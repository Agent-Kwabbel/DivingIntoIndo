import { BarChart, Users, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"

// This would typically come from your database or API
const stats = {
    totalViews: 12500,
    uniqueVisitors: 3200,
    avgTimeOnSite: "2m 45s",
    bounceRate: "42%",
}

export function DashboardStats() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                    <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="pt-1">
                    <div className="text-2xl font-bold">{stats.totalViews.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="pt-1">
                    <div className="text-2xl font-bold">{stats.uniqueVisitors.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">+10.5% from last month</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Avg. Time on Site</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="pt-1">
                    <div className="text-2xl font-bold">{stats.avgTimeOnSite}</div>
                    <p className="text-xs text-muted-foreground">+5.2% from last month</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
                    <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="pt-1">
                    <div className="text-2xl font-bold">{stats.bounceRate}</div>
                    <p className="text-xs text-muted-foreground">-3.1% from last month</p>
                </CardContent>
            </Card>
        </div>
    )
}