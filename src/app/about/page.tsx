import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

            <Card>
                <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <Image src="/placeholder.svg" alt="Stuart" width={400} height={400} className="rounded-full shadow-lg" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Meet Stuart</h2>
                            <p className="mb-4 text-muted-foreground">
                                My name is Stuart and I am passionate about decorating your dream day.
                            </p>
                            <p className="mb-4 text-muted-foreground">I am Limerick based but also travel Nationwide.</p>
                            <p className="mb-4 text-muted-foreground">
                                My mother is a florist all her life and I grew up around decorating churches. This is where my eye for
                                detail has come from.
                            </p>
                            <p className="text-muted-foreground">Looking forward to helping you design your dream day.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

