import "~/styles/globals.css";

import { Navigation } from "~/components/navigation";
import { Footer } from "~/components/footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}