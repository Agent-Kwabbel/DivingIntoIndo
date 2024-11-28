import { LayoutDashboard, FileText, Map, Cog, Users, ChevronRight } from 'lucide-react'
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "~/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu"

const navItems = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
        url: "/admin",
        isActive: true,
    },
    {
        title: "Blog Management",
        icon: FileText,
        items: [
            { title: "All Posts", url: "/admin/blog/posts" },
            { title: "New Post", url: "/admin/blog/new" },
            { title: "Comments", url: "/admin/blog/comments" },
        ],
    },
    {
        title: "Itinerary",
        icon: Map,
        items: [
            { title: "View Itinerary", url: "/admin/itinerary" },
            { title: "Edit Itinerary", url: "/admin/itinerary/edit" },
            { title: "Add Activity", url: "/admin/itinerary/add-activity" },
        ],
    },
    {
        title: "Website Settings",
        icon: Cog,
        items: [
            { title: "General", url: "/admin/settings/general" },
            { title: "Pages", url: "/admin/settings/pages" },
            { title: "Appearance", url: "/admin/settings/appearance" },
        ],
    },
    {
        title: "User Management",
        icon: Users,
        items: [
            { title: "All Users", url: "/admin/users" },
            { title: "Add New User", url: "/admin/users/new" },
            { title: "Roles", url: "/admin/users/roles" },
        ],
    },
]

export function AdminSidebarContent() {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Admin Menu</SidebarGroupLabel>
            <SidebarMenu>
                {navItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        {item.items ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <SidebarMenuButton tooltip={item.title}>
                                        {item.icon && <item.icon />}
                                        <span>{item.title}</span>
                                        <ChevronRight className="ml-auto" />
                                    </SidebarMenuButton>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    className="w-56 rounded-lg"
                                    side="right"
                                    align="start"
                                    sideOffset={8}
                                >
                                    {item.items.map((subItem) => (
                                        <DropdownMenuItem key={subItem.title} asChild>
                                            <a href={subItem.url}>{subItem.title}</a>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <SidebarMenuButton asChild tooltip={item.title} isActive={item.isActive}>
                                <a href={item.url}>
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                </a>
                            </SidebarMenuButton>
                        )}
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}