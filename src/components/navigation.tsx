import Link from "next/link";
import { NavigationMenu, NavigationMenuLink } from "@/src/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/src/components/ui/sheet";
import { Button } from "@/src/components/ui/button";
import { MenuIcon, HomeIcon, BookIcon, UserIcon, MailIcon, MountainIcon } from "@/src/components/icons";

const navigationMenuLinks = [
  { href: "/blog", label: "Blog", icon: <HomeIcon className="h-5 w-5" /> },
  { href: "/trip", label: "Trip", icon: <BookIcon className="h-5 w-5" /> },
  { href: "/about", label: "About", icon: <UserIcon className="h-5 w-5" /> },
  { href: "/contact", label: "Contact", icon: <MailIcon className="h-5 w-5" /> },
];

export function Navigation() {
    return (
      <header
        className="sticky top-0 z-30 flex h-14 justify-between items-center bg-background p-4 sm:h-auto sm:px-6">
          <Link href="/" className="flex items-center justify-center hover:scale-110 transition-transform duration-200 " prefetch={false}>
              <MountainIcon className="h-6 w-6" />
              <span className="sr-only">Indonesia Travel Blog</span>
          </Link>
          <NavigationMenu className="ml-auto hidden sm:flex">
              {navigationMenuLinks.map((link) => (
                <NavigationMenuLink key={link.href} asChild>
                    <Link
                      href={link.href}
                      className="group inline-flex h-9 w-max items-center justify-center rounded-lg px-4 py-2 text-base font-medium transition-all hover:underline underline-offset-2 focus:underline"
                      prefetch={false}
                    >
                        {link.label}
                    </Link>
                </NavigationMenuLink>
              ))}
          </NavigationMenu>
          <Sheet>
              <SheetTrigger asChild>
                  <Button size="icon" variant="outline" className="sm:hidden">
                      <MenuIcon className="h-6 w-6" />
                      <span className="sr-only">Toggle navigation</span>
                  </Button>
              </SheetTrigger>
              <SheetContent side="right" className="sm:max-w-xs">
                  <nav className="grid gap-6 text-lg font-medium">
                      {navigationMenuLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="flex items-center gap-4 px-2.5 text-foreground" prefetch={false}>
                            {link.icon}
                            {link.label}
                        </Link>
                      ))}
                  </nav>
              </SheetContent>
          </Sheet>
      </header>
    );
}
