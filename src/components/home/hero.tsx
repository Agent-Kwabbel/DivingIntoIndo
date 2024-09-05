import Link from "next/link";

export function Hero() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <img
                        src="/placeholder.svg"
                        width="550"
                        height="550"
                        alt="Hero"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                    />
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Exploring the Wonders of Indonesia
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                Join us on an unforgettable journey as two students discover the breathtaking landscapes, rich culture, and vibrant cities of Indonesia.
                            </p>
                        </div>
                        <Link href="#" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}