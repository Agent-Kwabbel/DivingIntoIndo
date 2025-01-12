import { DashboardHeader } from "~/components/admin/DashboardHeader"
import { DashboardStats } from "~/components/admin/DashboardStats"
import { RecentActivities } from "~/components/admin/RecentActivities"
import { QuickActions } from "~/components/admin/QuickActions"

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AdminDashboard() {
    const session = await getServerSession();
    if ((!session) || !session.user) {
        redirect("/admin/login");
    }

    return (
        <div className="flex flex-col h-full">
            <DashboardHeader title="Dashboard"/>
            <div className="flex-1 overflow-auto p-6">
                <div className="grid gap-6">
                    <DashboardStats/>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <RecentActivities/>
                        <QuickActions/>
                    </div>
                </div>
            </div>
        </div>
    )
}