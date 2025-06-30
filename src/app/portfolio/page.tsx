import getPortfolio from '@/sanity/queries/get-portfolio'
import { PortfolioItemCard } from "./portfolio-item-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Portfolio - My Dream Day.ie | Wedding & Event Décor Gallery",
    description: "View our stunning portfolio of wedding and event décor projects. See our church décor, civil ceremony styling, and venue transformations. Limerick based, serving nationwide.",
    keywords: ["portfolio", "wedding gallery", "event decor examples", "church wedding decor", "civil ceremony styling", "venue decoration", "Limerick", "Ireland"],
    openGraph: {
        title: "Portfolio - My Dream Day.ie | Wedding & Event Décor Gallery",
        description: "View our stunning portfolio of wedding and event décor projects. See our church décor, civil ceremony styling, and venue transformations.",
        url: "https://mydreamday.ie/portfolio",
        siteName: "My Dream Day.ie",
        type: "website",
        locale: "en_IE",
        images: [
            {
                url: "/placeholder.svg", // You should replace this with a featured portfolio image
                width: 1200,
                height: 630,
                alt: "My Dream Day Portfolio - Wedding & Event Décor Gallery",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Portfolio - My Dream Day.ie | Wedding & Event Décor Gallery",
        description: "View our stunning portfolio of wedding and event décor projects. See our church décor, civil ceremony styling, and venue transformations.",
        images: ["/placeholder.svg"], // You should replace this with a featured portfolio image
        creator: "@mydreamday_ie", // Replace with actual Twitter handle if available
    },
    alternates: {
        canonical: "https://mydreamday.ie/portfolio",
    },
}

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

