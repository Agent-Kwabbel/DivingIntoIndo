import { Edit3, BookOpen, Map } from 'lucide-react'
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"

export function QuickActions() {
    return (
        <Card className="col-span-3">
            <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Perform common tasks quickly.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <Button className="w-full">
                    <Edit3 className="mr-2 h-4 w-4" />
                    New Blog Post
                </Button>
                <Button className="w-full" variant="outline">
                    <BookOpen className="mr-2 h-4 w-4" />
                    View Latest Comments
                </Button>
                <Button className="w-full" variant="outline">
                    <Map className="mr-2 h-4 w-4" />
                    Update Itinerary
                </Button>
            </CardContent>
        </Card>
    )
}