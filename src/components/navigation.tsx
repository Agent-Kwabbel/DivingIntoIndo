import Link from "next/link";
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/src/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/src/components/ui/sheet";
import { Button } from "@/src/components/ui/button";
import { MenuIcon, HomeIcon, BookIcon, UserIcon, MailIcon, MountainIcon } from "@/src/components/icons";

export function Navigation() {
    return (
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
    <MountainIcon className="h-6 w-6" />
    <span className="sr-only">Indonesia Travel Blog</span>
    </Link>
    <NavigationMenu className="ml-auto hidden lg:flex">
        <NavigationMenuList>
            {["Home", "Blog", "About", "Contact"].map((label) => (
        <NavigationMenuLink asChild key={label}>
    <Link href="#" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
        {label}
        </Link>
        </NavigationMenuLink>
))}
    </NavigationMenuList>
    </NavigationMenu>
    <Sheet>
    <SheetTrigger asChild>
    <Button size="icon" variant="outline" className="lg:hidden">
    <MenuIcon className="h-6 w-6" />
    <span className="sr-only">Toggle navigation</span>
    </Button>
    </SheetTrigger>
    <SheetContent side="left" className="sm:max-w-xs">
    <nav className="grid gap-6 text-lg font-medium">
        {[
                { label: "Home", icon: HomeIcon },
    { label: "Blog", icon: BookIcon },
    { label: "About", icon: UserIcon },
    { label: "Contact", icon: MailIcon },
].map(({ label, icon: Icon }) => (
        <Link key={label} href="#" className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
    <Icon className="h-5 w-5" />
        {label}
        </Link>
))}
    </nav>
    </SheetContent>
    </Sheet>
    </header>
);
}
