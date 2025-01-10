import { Avatar, AvatarFallback } from "~/components/ui/avatar"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"

// This would typically come from your database or API
const recentActivities = [
    { id: 1, action: "New blog post published", time: "2 hours ago" },
    { id: 2, action: "Comment approved", time: "4 hours ago" },
    { id: 3, action: "New user registered", time: "1 day ago" },
]

export function RecentActivities() {
    return (
        <Card className="col-span-4">
            <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent className="pt-1">
                <div className="space-y-8">
                    {recentActivities.map((activity) => (
                        <div key={activity.id} className="flex items-center">
                            <Avatar className="h-9 w-9">
                                <AvatarFallback>{activity.action[0]}</AvatarFallback>
                            </Avatar>
                            <div className="ml-4 space-y-1">
                                <p className="text-sm font-medium leading-none">{activity.action}</p>
                                <p className="text-sm text-muted-foreground">{activity.time}</p>
                            </div>
                            <div className="ml-auto font-medium">
                                <Button variant="ghost" size="sm">
                                    View
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}