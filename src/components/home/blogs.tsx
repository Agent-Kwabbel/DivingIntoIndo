import { Card, CardContent } from "~/components/ui/card";
import { ArrowRightIcon } from "~/components/icons";
import Link from "next/link";
import Image from "next/image";
import { db } from "~/server/db";

export async function BlogSection() {
    // Limit to 4 posts
    const posts = await db.query.posts.findMany({
        orderBy: (posts, { desc }) => [desc(posts.id)],
        limit: 4
    });

    function stripHtml(html: string) {
        return html.replace(/<[^>]*>?/gm, '');
    }

    return (
      <section className="w-full bg-muted py-10 lg:pb-12">
        <div className="flex h-full w-full items-center justify-center">
          <div className="container px-4 md:px-6">
            <Link
              href="/home/blog"
              className="mb-6 inline-flex items-center gap-1 font-heading text-xl font-semibold hover:underline md:text-3xl"
            >
              Latest Blog Posts
              <ArrowRightIcon className="h-6 w-6 md:h-8 md:w-8" />
            </Link>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {posts.map((post) => (
                <Card key={post.id}>
                  <CardContent className="space-y-2">
                    <Image
                      src={`/img/uploads/${post.image}`}
                      width="400"
                      height="225"
                      alt="Blog Post"
                      className="aspect-video rounded-md object-cover"
                    />
                    <h3 className="text-xl font-semibold">{post.name}</h3>
                    <p className="line-clamp-3 text-base text-muted-foreground">
                      {stripHtml(post.content).substring(0, 300)}
                    </p>
                    <Link
                      href={`/home/blog/${post.url}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                    >
                      Read More
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}