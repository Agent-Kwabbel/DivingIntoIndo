import { Hero } from "~/components/home/hero";
import { BlogSection } from "~/components/home/blogs";
import { StatusSection } from "~/components/home/status";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <Hero />
            <BlogSection />
            <StatusSection />
            <div className="flex justify-center pt-6 pb-10">
                <Link
                    href="/home/trip"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                >
                    See the Itinerary
                </Link>
            </div>
        </div>
    );
}