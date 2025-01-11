import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "~/components/ui/card"

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <Card className="w-full max-w-md bg-gray-800 text-gray-100">
                <CardHeader className="space-y-1 pb-0">
                    <CardTitle className="text-2xl font-bold">Login</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="username" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Username
                        </label>
                        <Input
                            id="username"
                            placeholder="Enter your username"
                            className="bg-gray-700 border-gray-600 placeholder-gray-200 text-white focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Password
                        </label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="bg-gray-700 border-gray-600 placeholder-gray-200 text-white focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </CardContent>
                <CardFooter className="pt-0">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Sign In
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

