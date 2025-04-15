import Image from "next/image"
import { CardContent } from "@/components/ui/card"
import { MagicCard } from '@/components/magicui/magic-card'

export default function Portfolio() {
    // This would ideally be fetched from a CMS or database
    const portfolioItems = [
        { id: 1, title: "Elegant Church Wedding", image: "/placeholder.svg" },
        { id: 2, title: "Rustic Outdoor Ceremony", image: "/placeholder.svg" },
        { id: 3, title: "Glamorous Reception Venue", image: "/placeholder.svg" },
        { id: 4, title: "Romantic Beach Wedding", image: "/placeholder.svg" },
        { id: 5, title: "Chic City Celebration", image: "/placeholder.svg" },
        { id: 6, title: "Countryside Barn Wedding", image: "/placeholder.svg" },
    ]

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center">Our Portfolio</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems.map((item) => (
                    <MagicCard key={item.id}>
                        <CardContent className="p-0">
                            <div className="relative aspect-[16/9]">
                                <Image
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.title}
                                    fill
                                    className="object-cover rounded-t-lg"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                            </div>
                        </CardContent>
                    </MagicCard>
                ))}
            </div>
        </div>
    )
}

