import { Hero } from "@/src/components/home/hero";
import { BlogSection } from "@/src/components/home/blogs";
import { StatusSection } from "@/src/components/home/status";

export default function Home() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <Hero />
            <BlogSection />
            <StatusSection />
        </div>
    );
}