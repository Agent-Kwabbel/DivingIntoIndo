import type { Metadata } from "next"
import { Inter } from "next/font/google"
// import "./globals.css"
import { SidebarProvider } from "~/components/ui/sidebar"
import { AdminSidebar } from "~/components/admin/AdminSidebar"

import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Admin dashboard for the blog website",
}

export default function AdminLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <TRPCReactProvider>
        <SidebarProvider>
            <div className="flex h-screen w-full">
                <AdminSidebar />
                <main className="flex-1 overflow-auto">
                    {children}
                </main>
            </div>
        </SidebarProvider>
        </TRPCReactProvider>
        </body>
        </html>
    )
}