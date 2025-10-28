"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Plus, Save, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { RichTextEditor } from "@/components/ui/rich-text-editor";
import { Author } from "@/config/authors";

interface BlogPostForm {
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  published: boolean;
  image: string;
  authors: string[];
  tags: string[];
  categories: string[];
  related: string[];
  content: string;
}

const CATEGORY_OPTIONS = [
  "news",
  "logistics",
  "shipping-aggregator",
  "technology",
  "business",
  "guides",
];

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams();
  const [authors, setAuthors] = useState<Author[]>([]);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [tagInput, setTagInput] = useState("");
  const [relatedInput, setRelatedInput] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<BlogPostForm>();

  const watchedImage = watch("image");
  const watchedTags = watch("tags") || [];
  const watchedAuthors = watch("authors") || [];
  const watchedCategories = watch("categories") || [];
  const watchedRelated = watch("related") || [];
  const watchedContent = watch("content") || "";

  useEffect(() => {
    fetchAuthors();
    fetchPost();
  }, [params.id]);

  const fetchAuthors = async () => {
    try {
      const response = await fetch("/api/cms/authors");
      if (response.ok) {
        const data = await response.json();
        setAuthors(data);
      }
    } catch (error) {
      console.error("Error fetching authors:", error);
    }
  };

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/cms/posts/${params.id}`);
      if (response.ok) {
        const post = await response.json();

        // Format the date for the input
        const formattedDate = new Date(post.date).toISOString().split("T")[0];

        reset({
          title: post.title,
          description: post.description || "",
          metaTitle: post.metaTitle || "",
          metaDescription: post.metaDescription || "",
          date: formattedDate,
          published: post.published,
          image: post.image,
          authors: post.authors,
          tags: post.tags,
          categories: post.categories,
          related: post.related,
          content: post.content,
        });
      } else {
        toast.error("Failed to fetch post");
        router.push("/cms");
      }
    } catch (error) {
      toast.error("Error fetching post");
      router.push("/cms");
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/cms/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setValue("image", data.url);
        toast.success("Image uploaded successfully");
      } else {
        toast.error("Failed to upload image");
      }
    } catch (error) {
      toast.error("Error uploading image");
    } finally {
      setUploading(false);
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !watchedTags.includes(tagInput.trim())) {
      setValue("tags", [...watchedTags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (tag: string) => {
    setValue(
      "tags",
      watchedTags.filter((t) => t !== tag)
    );
  };

  const addRelated = () => {
    if (relatedInput.trim() && !watchedRelated.includes(relatedInput.trim())) {
      setValue("related", [...watchedRelated, relatedInput.trim()]);
      setRelatedInput("");
    }
  };

  const removeRelated = (slug: string) => {
    setValue(
      "related",
      watchedRelated.filter((s) => s !== slug)
    );
  };

  const toggleAuthor = (username: string) => {
    const isSelected = watchedAuthors.includes(username);
    if (isSelected) {
      setValue(
        "authors",
        watchedAuthors.filter((a) => a !== username)
      );
    } else {
      setValue("authors", [...watchedAuthors, username]);
    }
  };

  const toggleCategory = (category: string) => {
    const isSelected = watchedCategories.includes(category);
    if (isSelected) {
      setValue(
        "categories",
        watchedCategories.filter((c) => c !== category)
      );
    } else {
      setValue("categories", [...watchedCategories, category]);
    }
  };

  const onSubmit = async (data: BlogPostForm) => {
    if (watchedAuthors.length === 0) {
      toast.error("Please select at least one author");
      return;
    }
    if (watchedCategories.length === 0) {
      toast.error("Please select at least one category");
      return;
    }

    setSaving(true);
    try {
      const response = await fetch(`/api/cms/posts/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Post updated successfully");
        router.push("/cms");
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to update post");
      }
    } catch (error) {
      toast.error("Error updating post");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto py-8 max-w-4xl">
        <div className="text-center">Loading post...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/cms">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to CMS
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Edit Blog Post</h1>
          <p className="text-gray-600 mt-2">Update your blog post</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>
              Enter the basic details of your blog post
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                {...register("title", { required: "Title is required" })}
                placeholder="Enter blog post title"
              />
              {errors.title && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                {...register("description")}
                placeholder="Brief description of the blog post"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="metaTitle">Meta Title</Label>
              <Input
                id="metaTitle"
                {...register("metaTitle")}
                placeholder="SEO title for search engines (optional)"
              />
              <p className="text-sm text-gray-500 mt-1">
                If not provided, the post title will be used
              </p>
            </div>

            <div>
              <Label htmlFor="metaDescription">Meta Description</Label>
              <Textarea
                id="metaDescription"
                {...register("metaDescription")}
                placeholder="SEO description for search engines (optional)"
                rows={2}
              />
              <p className="text-sm text-gray-500 mt-1">
                If not provided, the post description will be used
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date">Publication Date *</Label>
                <Input
                  id="date"
                  type="date"
                  {...register("date", { required: "Date is required" })}
                />
                {errors.date && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.date.message}
                  </p>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="published"
                  checked={watch("published")}
                  onCheckedChange={(checked) => setValue("published", checked)}
                />
                <Label htmlFor="published">Published</Label>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Featured Image</CardTitle>
            <CardDescription>
              Upload a featured image for your blog post
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="image-upload">Upload Image</Label>
                <Input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                />
              </div>

              {watchedImage && (
                <div>
                  <img
                    src={watchedImage}
                    alt="Featured image preview"
                    className="max-w-xs rounded-lg border"
                  />
                </div>
              )}

              <div>
                <Label htmlFor="image-url">Image URL</Label>
                <Input
                  id="image-url"
                  {...register("image", { required: "Image is required" })}
                  placeholder="Enter image URL or upload above"
                />
                {errors.image && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.image.message}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Authors & Categories</CardTitle>
            <CardDescription>
              Select authors and categories for this post
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Authors *</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {authors.map((author) => (
                  <Badge
                    key={author.username}
                    variant={
                      watchedAuthors.includes(author.username)
                        ? "default"
                        : "outline"
                    }
                    className="cursor-pointer"
                    onClick={() => toggleAuthor(author.username)}
                  >
                    {author.name} ({author.username})
                  </Badge>
                ))}
              </div>
              {watchedAuthors.length === 0 && (
                <p className="text-sm text-red-500 mt-1">
                  At least one author is required
                </p>
              )}
            </div>

            <div>
              <Label>Categories *</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {CATEGORY_OPTIONS.map((category) => (
                  <Badge
                    key={category}
                    variant={
                      watchedCategories.includes(category)
                        ? "default"
                        : "outline"
                    }
                    className="cursor-pointer"
                    onClick={() => toggleCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
              {watchedCategories.length === 0 && (
                <p className="text-sm text-red-500 mt-1">
                  At least one category is required
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tags & Related Posts</CardTitle>
            <CardDescription>Add tags and related post slugs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Tags</Label>
              <div className="flex gap-2 mt-2">
                <Input
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  placeholder="Enter tag and press Add"
                  onKeyPress={(e) =>
                    e.key === "Enter" && (e.preventDefault(), addTag())
                  }
                />
                <Button type="button" onClick={addTag} variant="outline">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {watchedTags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                    <X
                      className="h-3 w-3 ml-1 cursor-pointer"
                      onClick={() => removeTag(tag)}
                    />
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <Label>Related Posts (slugs)</Label>
              <div className="flex gap-2 mt-2">
                <Input
                  value={relatedInput}
                  onChange={(e) => setRelatedInput(e.target.value)}
                  placeholder="Enter related post slug and press Add"
                  onKeyPress={(e) =>
                    e.key === "Enter" && (e.preventDefault(), addRelated())
                  }
                />
                <Button type="button" onClick={addRelated} variant="outline">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {watchedRelated.map((slug) => (
                  <Badge key={slug} variant="secondary">
                    {slug}
                    <X
                      className="h-3 w-3 ml-1 cursor-pointer"
                      onClick={() => removeRelated(slug)}
                    />
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Content</CardTitle>
            <CardDescription>
              Write your blog post content using the rich text editor
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RichTextEditor
              content={watchedContent}
              onChange={(content) => setValue("content", content)}
              placeholder="Start writing your blog post..."
            />
            {errors.content && (
              <p className="text-sm text-red-500 mt-1">
                {errors.content.message}
              </p>
            )}
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Link href="/cms">
            <Button variant="outline">Cancel</Button>
          </Link>
          <Button type="submit" disabled={saving}>
            <Save className="h-4 w-4 mr-2" />
            {saving ? "Updating..." : "Update Post"}
          </Button>
        </div>
      </form>
    </div>
  );
}
