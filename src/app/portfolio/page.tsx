import getPortfolio from '@/sanity/queries/get-portfolio'
import { PortfolioItemCard } from "./portfolio-item-card"
export default async function Portfolio() {
    // This would ideally be fetched from a CMS or database
    // const portfolioItems = [
    //     { id: 1, title: "Elegant Church Wedding", image: "/placeholder.svg" },
    //     { id: 2, title: "Rustic Outdoor Ceremony", image: "/placeholder.svg" },
    //     { id: 3, title: "Glamorous Reception Venue", image: "/placeholder.svg" },
    //     { id: 4, title: "Romantic Beach Wedding", image: "/placeholder.svg" },
    //     { id: 5, title: "Chic City Celebration", image: "/placeholder.svg" },
    //     { id: 6, title: "Countryside Barn Wedding", image: "/placeholder.svg" },
    // ]

    const portfolioItems = await getPortfolio()

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center">Our Portfolio</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems.map((item) => (
                    <PortfolioItemCard key={item._id} item={item} />
                ))}
            </div>
        </div>
    )
}

