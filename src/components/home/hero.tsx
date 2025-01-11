import Link from "next/link";
import Image from "next/image";
import { list } from "@vercel/blob"

export async function Hero() {
    const response = await list({"prefix": "hero/"})
    console.log(response)
    const heroImages = response.blobs.filter((item) => item.pathname.includes(".webp"))
    const randomIndex = Math.floor(Math.random() * heroImages.length);
    const heroImage = heroImages[randomIndex] ?? { url: "" };

    return (
        <section className="w-full pt-4 pb-10 lg:pb-12 px-8 md:px-16">
            <div className=" w-full">
                <div className="w-full grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-20 xl:grid-cols-[1fr_600px]">
                    <Image
                        src={heroImage?.url || "/img/'placeholder.svg"}
                        width="550"
                        height="550"
                        alt="Hero"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-md transition-all hover:shadow-2xl hover:scale-105 sm:w-full lg:order-last lg:aspect-square"
                    />
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Diving into the Wonders of <i>Indonesia</i>
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                Join us on an unforgettable journey as two students discover the breathtaking
                                landscapes, rich culture, and vibrant cities of Indonesia.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link
                              href="/home/blog"
                              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                              prefetch={false}
                            >
                                Read the Blog
                            </Link>
                            <Link
                              href="/home/about"
                              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                              prefetch={false}
                            >
                                About the Travelers
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}