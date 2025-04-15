import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from './theme-toggle'

export default function Header() {
    return (
        <header className="border-b">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold">
                        My Dream Day.ie
                    </Link>
                    <div className="flex items-center space-x-4">
                        <nav className="hidden md:flex space-x-4">
                            <Button variant="ghost" asChild>
                                <Link href="/">Home</Link>
                            </Button>
                            <Button variant="ghost" asChild>
                                <Link href="/about">About Us</Link>
                            </Button>
                            <Button variant="ghost" asChild>
                                <Link href="/portfolio">Portfolio</Link>
                            </Button>
                            <Button variant="ghost" asChild>
                                <Link href="/services">Services</Link>
                            </Button>
                            <Button variant="ghost" asChild>
                                <Link href="/contact">Contact</Link>
                            </Button>
                        </nav>
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header>
    )
}

