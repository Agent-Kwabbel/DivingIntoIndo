"use client"

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "~/components/ui/sidebar"
import { AdminSidebarHeader } from "./AdminSidebarHeader"
import { AdminSidebarContent } from "./AdminSidebarContent"
import { AdminSidebarFooter } from "./AdminSidebarFooter"

export function AdminSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <AdminSidebarHeader />
            </SidebarHeader>
            <SidebarContent>
                <AdminSidebarContent />
            </SidebarContent>
            <SidebarFooter>
                <AdminSidebarFooter />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}