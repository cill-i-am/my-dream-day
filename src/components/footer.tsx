import Link from "next/link"

export default function Footer() {
    return (
        <footer className="border-t">
            <div className="container mx-auto px-6 py-8 md:flex md:items-center md:justify-between">
                <div className="mt-8 md:mt-0 md:order-1">
                    <p className="text-center text-sm text-muted-foreground">&copy; 2025 My Dream Day.ie. All rights reserved.</p>
                </div>
                <div className="flex justify-center space-x-6 md:order-2">
                    <Link prefetch href="tel:087-6069169" className="text-sm text-muted-foreground hover:text-primary">
                        087-6069169
                    </Link>
                    <Link prefetch href="mailto:Mydreamdayireland@gmail.com" className="text-sm text-muted-foreground hover:text-primary">
                        Mydreamdayireland@gmail.com
                    </Link>
                </div>
            </div>
        </footer>
    )
}

