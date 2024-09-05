import Link from "next/link";
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/src/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/src/components/ui/sheet";
import { Button } from "@/src/components/ui/button";
import { MenuIcon, HomeIcon, BookIcon, UserIcon, MailIcon, MountainIcon } from "@/src/components/icons";

export function Navigation() {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link href="#" className="flex items-center justify-center" prefetch={false}>
                <MountainIcon className="h-6 w-6"/>
                <span className="sr-only">Adventure Blog</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Blog
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    About
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Contact
                </Link>
            </nav>
        </header>
    );
}
