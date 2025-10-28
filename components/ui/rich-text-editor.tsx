'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { Color } from '@tiptap/extension-color';
import { Button } from '@/components/ui/button';
import {
    Bold,
    Italic,
    Underline as UnderlineIcon,
    Strikethrough,
    Highlighter,
    List,
    ListOrdered,
    Quote,
    Undo,
    Redo,
    Type
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface RichTextEditorProps {
    content: string;
    onChange: (content: string) => void;
    placeholder?: string;
}

export function RichTextEditor({ content, onChange, placeholder }: RichTextEditorProps) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Highlight.configure({
                multicolor: true,
            }),
            TextStyle,
            Color,
        ],
        content: htmlToEditor(content),
        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            const mdx = htmlToMDX(html);
            onChange(mdx);
        },
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[300px] p-4',
            },
        },
    });

    if (!editor) {
        return null;
    }

    return (
        <div className="border rounded-lg">
            {/* Toolbar */}
            <div className="border-b p-2 flex flex-wrap gap-1">
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={cn(editor.isActive('bold') && 'bg-gray-200')}
                >
                    <Bold className="h-4 w-4" />
                </Button>

                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={cn(editor.isActive('italic') && 'bg-gray-200')}
                >
                    <Italic className="h-4 w-4" />
                </Button>

                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    className={cn(editor.isActive('underline') && 'bg-gray-200')}
                >
                    <UnderlineIcon className="h-4 w-4" />
                </Button>

                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={cn(editor.isActive('strike') && 'bg-gray-200')}
                >
                    <Strikethrough className="h-4 w-4" />
                </Button>

                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => editor.chain().focus().toggleHighlight({ color: '#ffff00' }).run()}
                    className={cn(editor.isActive('highlight') && 'bg-gray-200')}
                >
                    <Highlighter className="h-4 w-4" />
                </Button>

                <div className="w-px h-6 bg-gray-300 mx-1" />

                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={cn(editor.isActive('heading', { level: 1 }) && 'bg-gray-200')}
                >
                    H1
                </Button>

                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={cn(editor.isActive('heading', { level: 2 }) && 'bg-gray-200')}
                >
                    H2
                </Button>

                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={cn(editor.isActive('heading', { level: 3 }) && 'bg-gray-200')}
                >
                    H3
                </Button>

                <div className="w-px h-6 bg-gray-300 mx-1" />

                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={cn(editor.isActive('bulletList') && 'bg-gray-200')}
                >
                    <List className="h-4 w-4" />
                </Button>

                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={cn(editor.isActive('orderedList') && 'bg-gray-200')}
                >
                    <ListOrdered className="h-4 w-4" />
                </Button>

                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={cn(editor.isActive('blockquote') && 'bg-gray-200')}
                >
                    <Quote className="h-4 w-4" />
                </Button>

                <div className="w-px h-6 bg-gray-300 mx-1" />

                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editor.can().chain().focus().undo().run()}
                >
                    <Undo className="h-4 w-4" />
                </Button>

                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editor.can().chain().focus().redo().run()}
                >
                    <Redo className="h-4 w-4" />
                </Button>
            </div>

            {/* Editor */}
            <EditorContent
                editor={editor}
                className="min-h-[300px]"
                placeholder={placeholder}
            />
        </div>
    );
}

// Convert MDX content to HTML for editor
function htmlToEditor(mdxContent: string): string {
    if (!mdxContent) return '';

    // Convert MDX/Markdown to HTML for display in editor
    let html = mdxContent;

    // Convert headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Convert bold and italic
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Convert blockquotes
    html = html.replace(/^> (.*$)/gim, '<blockquote><p>$1</p></blockquote>');

    // Convert line breaks
    html = html.replace(/\n\n/g, '</p><p>');
    html = html.replace(/\n/g, '<br>');

    // Wrap in paragraphs if not already wrapped
    if (!html.includes('<p>') && !html.includes('<h') && html.trim()) {
        html = `<p>${html}</p>`;
    }

    return html;
}

// Convert HTML from editor to MDX
function htmlToMDX(html: string): string {
    let mdx = html;

    // Convert headers
    mdx = mdx.replace(/<h1>(.*?)<\/h1>/g, '# $1\n\n');
    mdx = mdx.replace(/<h2>(.*?)<\/h2>/g, '## $1\n\n');
    mdx = mdx.replace(/<h3>(.*?)<\/h3>/g, '### $1\n\n');
    mdx = mdx.replace(/<h4>(.*?)<\/h4>/g, '#### $1\n\n');
    mdx = mdx.replace(/<h5>(.*?)<\/h5>/g, '##### $1\n\n');
    mdx = mdx.replace(/<h6>(.*?)<\/h6>/g, '###### $1\n\n');

    // Convert bold and italic
    mdx = mdx.replace(/<strong>(.*?)<\/strong>/g, '**$1**');
    mdx = mdx.replace(/<b>(.*?)<\/b>/g, '**$1**');
    mdx = mdx.replace(/<em>(.*?)<\/em>/g, '*$1*');
    mdx = mdx.replace(/<i>(.*?)<\/i>/g, '*$1*');

    // Convert underline (HTML to Markdown doesn't have native underline, so we'll keep it as HTML)
    // mdx = mdx.replace(/<u>(.*?)<\/u>/g, '<u>$1</u>');

    // Convert strikethrough
    mdx = mdx.replace(/<s>(.*?)<\/s>/g, '~~$1~~');
    mdx = mdx.replace(/<del>(.*?)<\/del>/g, '~~$1~~');

    // Convert highlights
    mdx = mdx.replace(/<mark[^>]*>(.*?)<\/mark>/g, '==$1==');

    // Convert blockquotes
    mdx = mdx.replace(/<blockquote><p>(.*?)<\/p><\/blockquote>/g, '> $1\n\n');
    mdx = mdx.replace(/<blockquote>(.*?)<\/blockquote>/g, '> $1\n\n');

    // Convert lists
    mdx = mdx.replace(/<ul>/g, '');
    mdx = mdx.replace(/<\/ul>/g, '\n');
    mdx = mdx.replace(/<ol>/g, '');
    mdx = mdx.replace(/<\/ol>/g, '\n');
    mdx = mdx.replace(/<li>/g, '- ');
    mdx = mdx.replace(/<\/li>/g, '\n');

    // Convert paragraphs
    mdx = mdx.replace(/<p>/g, '');
    mdx = mdx.replace(/<\/p>/g, '\n\n');

    // Convert line breaks
    mdx = mdx.replace(/<br\s*\/?>/g, '\n');

    // Clean up extra newlines
    mdx = mdx.replace(/\n{3,}/g, '\n\n');
    mdx = mdx.trim();

    return mdx;
} 