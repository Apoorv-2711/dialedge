import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { auth } from "@/auth";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const contentDir = path.join(process.cwd(), "content", "blog");
    const filePath = path.join(contentDir, `${id}.mdx`);

    try {
      const fileContent = await fs.readFile(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      const post = {
        id: id,
        slug: id,
        title: data.title || "",
        description: data.description || "",
        metaTitle: data.metaTitle || "",
        metaDescription: data.metaDescription || "",
        date: data.date || new Date().toISOString(),
        published: data.published !== false,
        image: data.image || "",
        authors: data.authors || [],
        categories: data.categories || [],
        tags: data.tags || [],
        related: data.related || [],
        content,
      };

      return NextResponse.json(post);
    } catch (error) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await request.json();
    const contentDir = path.join(process.cwd(), "content", "blog");
    const oldFilePath = path.join(contentDir, `${id}.mdx`);

    // Check if old file exists
    try {
      await fs.access(oldFilePath);
    } catch {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    // Generate new slug from title
    const slug = data.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    // Create frontmatter
    const frontmatter = {
      title: data.title,
      date: data.date,
      authors: data.authors || [],
      categories: data.categories || [],
      image: data.image,
      ...(data.tags && data.tags.length > 0 && { tags: data.tags }),
      ...(data.description && { description: data.description }),
      ...(data.metaTitle && { metaTitle: data.metaTitle }),
      ...(data.metaDescription && { metaDescription: data.metaDescription }),
    };

    // Create the full content with frontmatter
    const fileContent = matter.stringify(data.content || "", frontmatter);

    const newFilePath = path.join(contentDir, `${slug}.mdx`);

    // If slug changed, check if new filename already exists
    if (slug !== id) {
      try {
        await fs.access(newFilePath);
        return NextResponse.json(
          { error: "A post with this title already exists" },
          { status: 409 }
        );
      } catch {
        // File doesn't exist, we can proceed
      }
    }

    // Write new file
    await fs.writeFile(newFilePath, fileContent);

    // Delete old file if slug changed
    if (slug !== id) {
      try {
        await fs.unlink(oldFilePath);
      } catch (error) {
        console.warn("Could not delete old file:", error);
      }
    }

    const post = {
      id: slug,
      slug,
      ...frontmatter,
      content: data.content || "",
    };

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error updating post:", error);
    return NextResponse.json(
      { error: "Failed to update post" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const contentDir = path.join(process.cwd(), "content", "blog");
    const filePath = path.join(contentDir, `${id}.mdx`);

    try {
      await fs.unlink(filePath);
      return NextResponse.json({ message: "Post deleted successfully" });
    } catch (error) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 500 }
    );
  }
}
