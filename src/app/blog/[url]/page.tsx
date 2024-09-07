import { db } from "~/server/db";
import { eq } from "drizzle-orm";
import { posts, users } from "~/server/db/schema";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Separator } from "~/components/ui/separator";
import Image from "next/image";
import "~/styles/post.css"

export default async function Page({ params }: { params: { url: string } }) {
    const post = await db.query.posts.findFirst({
        where: eq(posts.url, params.url)
    });

    if (!post) return <div>Post not found</div>;

    const user = await db.query.users.findFirst({
        where: eq(users.id, post.createdById)
    });

    return (
      <div className="flex flex-col min-h-[100dvh]">
          <section className="w-full">
              <Image
                src={`/img/uploads/${post.image}`}
                width={1920}
                height={600}
                alt={post.name}
                className="aspect-[16/6] w-full object-cover"
              />
              <div className="container px-4 md:px-6 py-4 md:py-8">
                  <div className="max-w-3xl mx-auto space-y-4">
                      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                          {post.name}
                      </h1>
                      <div className="flex items-center space-x-4">
                          <Author username={user?.name ?? 'Unknown Author'} />
                          <Separator orientation="vertical" className="h-6" />
                          <PublishDate date={post.createdAt} />
                      </div>
                  </div>
              </div>
          </section>
          <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
              <article className="prose prose-gray mx-auto dark:prose-invert whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
      </div>
    );
}

function getInitials(name: string) {
    const initials = name.split(" ").map((n) => n[0]).join("");
    return initials.toUpperCase();
}

function Author({ username }: { username: string }) {
    const fallbackText = getInitials(username);

    return (
      <div className="flex items-center space-x-2">
          <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder-user.jpg" alt={username} />
              <AvatarFallback>{fallbackText}</AvatarFallback>
          </Avatar>
          <p className="text-sm font-medium">{username}</p>
      </div>
    );
}

function PublishDate({ date }: { date: Date }) {
    const dateString = date.toLocaleDateString("en-US", {
        timeZone: "UTC",
        dateStyle: "long",
    });
    return (
      <p className="text-sm text-muted-foreground">Published on {dateString} UTC</p>
    );
}