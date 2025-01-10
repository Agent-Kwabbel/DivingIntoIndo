import { BlogPostsHeader } from "~/components/admin/blog/BlogPostsHeader"
import { BlogPostsTable } from "~/components/admin/blog/BlogPostsTable"

export default function BlogPostsPage() {
    return (
        <div className="flex flex-col h-full">
            <BlogPostsHeader />
            <div className="flex-1 overflow-auto p-6">
                <BlogPostsTable />
            </div>
        </div>
    )
}