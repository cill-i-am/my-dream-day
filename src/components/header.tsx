import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from './theme-toggle'
import { MobileNav } from "./layout/MobileNav"

export default function Header() {
    // Assume existing desktop navigation links are handled elsewhere or defined here
    const desktopNavLinks = [
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center px-2 justify-start gap-2">
                <div className="mr-4 hidden md:flex">
                    <Link prefetch href="/" className="mr-6 flex items-center space-x-2">
                        <Image
                            src="/brand_logo.png"
                            alt="My Dream Day - Wedding & Event Décor"
                            width={100}
                            height={100}
                            className="h-16 w-auto"
                            priority
                        />
                    </Link>
                    <nav className="flex items-center gap-6 text-sm">
                        {desktopNavLinks.map((link) => (
                            <Link
                                prefetch
                                key={link.href}
                                href={link.href}
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Mobile Navigation Trigger - Placed at the start for mobile layout */}
                <MobileNav />

                {/* Site Title/Logo - Visible on mobile */}
                <div className="flex flex-1 items-center justify-start space-x-2 md:hidden">
                    <Link prefetch href="/" className="flex items-center space-x-2">
                        <Image
                            src="/brand_logo.png"
                            alt="My Dream Day - Wedding & Event Décor"
                            width={100}
                            height={32}
                            className="h-7 w-auto"
                            priority
                        />
                    </Link>
                </div>

                <div className="flex flex-1 items-center justify-end space-x-2">
                    <nav className="flex items-center">
                        <ThemeToggle />
                    </nav>
                </div>
            </div>
        </header>
    )
}

