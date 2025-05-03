import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export function MobileNav() {
    // Define your navigation links here
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <div className="md:hidden"> {/* Hide on medium screens and up */}
            <Drawer shouldScaleBackground>
                <DrawerTrigger asChild>
                    <Button variant="outline" size="icon">
                        <Menu className="h-4 w-4" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </DrawerTrigger>
                <DrawerContent className="w-full p-4"> {/* Adjust width as needed */}
                    <DrawerHeader>
                        <DrawerTitle>Navigation</DrawerTitle>
                        {/* Optional: Add a description */}
                        {/* <DrawerDescription>Select a page to navigate.</DrawerDescription> */}
                    </DrawerHeader>
                    <nav className="flex flex-col gap-4 py-4">
                        {navLinks.map((link) => (
                            <DrawerClose key={link.href} asChild>
                                <Link
                                    prefetch
                                    href={link.href}
                                    className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                                >
                                    {link.label}
                                </Link>
                            </DrawerClose>
                        ))}
                    </nav>
                </DrawerContent>
            </Drawer>
        </div>
    );
} 