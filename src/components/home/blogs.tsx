import { Card, CardContent } from "@/src/components/ui/card";
import { ArrowRightIcon } from "@/src/components/icons";
import Link from "next/link";
import Image from "next/image";

export function BlogSection() {
    const posts = [
        {
            title: "Exploring the Vibrant Markets of Bali",
            description: "Discover the vibrant and colorful markets of Bali, where you can find unique handcrafted goods, spices, and delicious local cuisine.",
        },
        {
            title: "Trekking Through the Lush Jungles of Java",
            description: "Immerse yourself in the stunning natural beauty of Java's lush jungles, home to a diverse array of flora and fauna.",
        },
        {
            title: "Discovering the Enchanting Temples of Yogyakarta",
            description: "Explore the ancient and captivating temples of Yogyakarta, where you can immerse yourself in the rich cultural heritage of Indonesia.",
        },
        {
            title: "Savoring the Flavors of Indonesian Cuisine",
            description: "Indulge in the rich and diverse flavors of Indonesian cuisine, from spicy curries to fragrant rice dishes and delectable street food.",
        },
    ];

    return (
        <section className="w-full py-10 lg:pb-12 bg-muted">
            <div className="w-full h-full flex items-center justify-center">
            <div className="container px-4 md:px-6">
                <Link href="/blog" className="mb-6 font-heading inline-flex items-center gap-1 text-xl md:text-3xl font-semibold hover:underline">
                    Latest Blog Posts
                    <ArrowRightIcon className="h-6 w-6 md:h-8 md:w-8" />
                </Link>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {posts.map((post, index) => (
                        <Card key={index}>
                            <CardContent className="space-y-2">
                                <Image src="/placeholder.svg" width="400" height="225" alt="Blog Post" className="aspect-video rounded-md object-cover" />
                                <h3 className="text-xl font-semibold">{post.title}</h3>
                                <p className="text-muted-foreground line-clamp-3">{post.description}</p>
                                <Link href="#" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
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