import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { auth } from "@/auth";

export async function GET() {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const contentDir = path.join(process.cwd(), "content", "blog");

    // Ensure directory exists
    try {
      await fs.access(contentDir);
    } catch {
      await fs.mkdir(contentDir, { recursive: true });
      return NextResponse.json([]);
    }

    const files = await fs.readdir(contentDir);
    const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

    const posts = await Promise.all(
      mdxFiles.map(async (file) => {
        const filePath = path.join(contentDir, file);
        const fileContent = await fs.readFile(filePath, "utf-8");
        const { data, content } = matter(fileContent);

        return {
          id: file.replace(".mdx", ""),
          slug: file.replace(".mdx", ""),
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
          filename: file,
        };
      })
    );

    // Sort by date (newest first)
    posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await request.json();

    // Generate slug from title
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

    // Write to file
    const contentDir = path.join(process.cwd(), "content", "blog");
    await fs.mkdir(contentDir, { recursive: true });

    const filename = `${slug}.mdx`;
    const filePath = path.join(contentDir, filename);

    // Check if file already exists
    try {
      await fs.access(filePath);
      return NextResponse.json(
        { error: "A post with this title already exists" },
        { status: 409 }
      );
    } catch {
      // File doesn't exist, we can create it
    }

    await fs.writeFile(filePath, fileContent);

    const post = {
      id: slug,
      slug,
      filename,
      ...frontmatter,
      content: data.content || "",
    };

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
