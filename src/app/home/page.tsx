import { Hero } from "~/components/home/hero";
import { BlogSection } from "~/components/home/blogs";
import { StatusSection } from "~/components/home/status";

export default function Home() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <Hero />
            <BlogSection />
            <StatusSection />
        </div>
    );
}