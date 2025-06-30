import getTeam from '@/sanity/queries/get-team'
import { TeamMemberCard } from "./components/team-member-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us - My Dream Day.ie | Wedding & Event Décor Team",
    description: "Meet our experienced team at My Dream Day.ie. With 20+ years in fresh flowers and wedding décor, we make your dream day a reality. Limerick based, serving nationwide.",
    keywords: ["about us", "wedding team", "event decor experts", "fresh flowers", "Limerick", "Ireland", "wedding professionals"],
    openGraph: {
        title: "About Us - My Dream Day.ie | Wedding & Event Décor Team",
        description: "Meet our experienced team at My Dream Day.ie. With 20+ years in fresh flowers and wedding décor, we make your dream day a reality.",
        url: "https://mydreamday.ie/about",
        siteName: "My Dream Day.ie",
        type: "website",
        locale: "en_IE",
        images: [
            {
                url: "/brand_logo.png",
                width: 1200,
                height: 630,
                alt: "My Dream Day Team - Wedding & Event Décor Experts",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us - My Dream Day.ie | Wedding & Event Décor Team",
        description: "Meet our experienced team at My Dream Day.ie. With 20+ years in fresh flowers and wedding décor, we make your dream day a reality.",
        images: ["/brand_logo.png"],
        creator: "@mydreamday_ie", // Replace with actual Twitter handle if available
    },
    alternates: {
        canonical: "https://mydreamday.ie/about",
    },
}

export default async function About() {
    const team = await getTeam()

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

            {team.map((member, index) => (
                <TeamMemberCard key={index} member={member} />
            ))}
        </div>
    )
}

