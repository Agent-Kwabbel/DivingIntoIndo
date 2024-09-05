import Link from "next/link";

export function Footer() {
    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-muted-foreground">&copy; 2024 Diving Into Indo. All rights reserved.</p>
            <nav className="sm:ml-auto flex items-center gap-4 sm:gap-6">
                <Link href="/terms-of-service" className="text-xs hover:underline underline-offset-4">Terms of Service</Link>
                <Link href="/privacy" className="text-xs hover:underline underline-offset-4">Privacy</Link>
                <div className="border-r-2 border-muted-foreground-foreground h-5" />
                <Link href="https://github.com/Agent-Kwabbel/DivingIntoIndo" target="_blank" className="text-xs hover:underline underline-offset-4">GitHub</Link>
            </nav>
        </footer>
    );
}
