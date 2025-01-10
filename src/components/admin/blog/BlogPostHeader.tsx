import { Plus } from 'lucide-react'
import { Button } from "~/components/ui/button"
import { SidebarTrigger } from "~/components/ui/sidebar"

export function BlogPostsHeader() {
    return (
        <header className="flex h-16 shrink-0 items-center justify-between gap-4 border-b px-6">
        <div className="flex items-center gap-4">
        <SidebarTrigger className="-ml-2" />
        <h1 className="text-lg font-semibold">Blog Posts</h1>
    </div>
    <Button asChild>
    <a href="/admin/dashboard/blog/new">
    <Plus className="mr-2 h-4 w-4" />
        New Post
    </a>
    </Button>
    </header>
)
}