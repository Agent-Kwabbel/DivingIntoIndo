import { db } from "~/server/db";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {eq} from "drizzle-orm";
import {users} from "~/server/db/schema";
import { Separator } from "~/components/ui/separator";

function stripHtml(html: string) {
    return html.replace(/<[^>]*>?/gm, '');
}

function PublishDate({ date }: { date: Date }) {
    const dateString = date.toLocaleDateString("en-GB", {
        timeZone: "UTC",
        dateStyle: "long",
    });
    return (
        <p className="text-sm text-muted-foreground flex whitespace-pre m-0">{dateString} UTC</p>
    );
}

async function Username({ id }: { id: string }) {
    const user = await db.query.users.findFirst({
        where: eq(users.id, id)
    });
    const username = user?.name ?? 'Unknown Author';

    return (
        <p className="text-sm text-muted-foreground flex whitespace-pre m-0">By {username}</p>
    );
}

export async function BlogListing() {
    const posts = await db.query.posts.findMany({
        orderBy: (posts, {desc}) => [desc(posts.id)]
    });

    return (
        <div className="space-y-6 mb-8">
            {posts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                    <div className="md:flex">
                        <div className="md:1/3 lg:w-1/5">
                            <Image
                                src={`/img/uploads/${post.image}`}
                                alt={post.name}
                                width={300}
                                height={200}
                                className="w-full h-48 md:h-full object-cover"
                            />
                        </div>
                        <div className="md:w-2/3 lg:w-4/5 p-6 flex flex-col justify-between">
                            <CardContent className="p-0">
                                <h2 className="text-2xl font-bold mb-2">{post.name}</h2>
                                <p className="text-muted-foreground line-clamp-3">{stripHtml(post.content).substring(0, 400)}...</p>
                            </CardContent>
                            <CardFooter className="p-0 pt-4 flex justify-between items-center">
                                <Link href={`/blog/${post.url}`}>
                                    <Button>Read More</Button>
                                </Link>
                                <div className="flex flex-col lg:flex-row items-center space-x-2">
                                    <Username id={post.createdById}/>
                                    <Separator orientation="vertical" className="h-4 hidden lg:block"/>
                                    <PublishDate date={post.createdAt} />
                                </div>
                            </CardFooter>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    )
}