import { DashboardHeader } from "~/components/admin/DashboardHeader"
import { DashboardStats } from "~/components/admin/DashboardStats"
import { RecentActivities } from "~/components/admin/RecentActivities"
import { QuickActions } from "~/components/admin/QuickActions"

export default function AdminDashboard() {
    return (
        <div className="flex flex-col h-full">
            <DashboardHeader title="Dashboard" />
            <div className="flex-1 overflow-auto p-6">
                <div className="grid gap-6">
                    <DashboardStats />
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <RecentActivities />
                        <QuickActions />
                    </div>
                </div>
            </div>
        </div>
    )
}