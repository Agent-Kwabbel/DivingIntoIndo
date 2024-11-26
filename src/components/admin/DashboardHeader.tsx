import { SidebarTrigger } from "~/components/ui/sidebar"

interface DashboardHeaderProps {
    title: string
}

export function DashboardHeader({ title }: DashboardHeaderProps) {
    return (
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-6">
            <SidebarTrigger className="-ml-2" />
            <div className="flex items-center gap-2">
                <h1 className="text-lg font-semibold">{title}</h1>
            </div>
        </header>
    )
}