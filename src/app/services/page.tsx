import { MagicCard } from '@/components/magicui/magic-card'
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import getPackages from '@/sanity/queries/get-packages'
import getServices from '@/sanity/queries/get-services'
import { CheckCircle, Phone, Heart, Mail, Cookie, Wine, Camera, Sparkles } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Services & Packages - My Dream Day.ie | Wedding & Event Décor",
    description: "Explore our wedding and event décor services and packages. Church décor from €500, civil ceremony styling, venue decoration, and complete package deals. Limerick based, serving nationwide.",
    keywords: ["wedding services", "event packages", "church decor packages", "civil ceremony decor", "venue styling", "wedding decoration", "Limerick", "Ireland", "package deals"],
    openGraph: {
        title: "Services & Packages - My Dream Day.ie | Wedding & Event Décor",
        description: "Explore our wedding and event décor services and packages. Church décor from €500, civil ceremony styling, venue decoration, and complete package deals.",
        url: "https://mydreamday.ie/services",
        siteName: "My Dream Day.ie",
        type: "website",
        locale: "en_IE",
        images: [
            {
                url: "/brand_logo.png",
                width: 1200,
                height: 630,
                alt: "My Dream Day Services - Wedding & Event Décor Packages",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Services & Packages - My Dream Day.ie | Wedding & Event Décor",
        description: "Explore our wedding and event décor services and packages. Church décor from €500, civil ceremony styling, venue decoration, and complete package deals.",
        images: ["/brand_logo.png"],
        creator: "@mydreamday_ie", // Replace with actual Twitter handle if available
    },
    alternates: {
        canonical: "https://mydreamday.ie/services",
    },
}

export default async function Services() {
    const services = await getServices()
    const packages = await getPackages()

    const getServicesByPackage = async (packageItems: Array<{
        _ref: string;
    }>) => {
        const packageItemRefs = packageItems.map(item => item._ref);
        const servicesByPackage = services.filter((service) => packageItemRefs.includes(service._id))
        return servicesByPackage
    }


    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>

            <MagicCard className="mb-12">
                <CardHeader>
                    <CardTitle>Products and Services We Offer:</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {services.map((service, index) => (
                            <li key={index} className="flex items-center">
                                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                                <span className="text-muted-foreground">{service.name}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </MagicCard>

            <h2 className="text-2xl font-semibold mb-4">Package Deals:</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {packages.map((pkg, index) => (
                    <MagicCard key={index}>
                        <CardHeader>
                            <CardTitle>{pkg.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold mb-4">{pkg.price}</p>
                            <ul className="space-y-2">
                                {pkg.items ? getServicesByPackage(pkg.items).then((services) => services.map((service, itemIndex) => (
                                    <li key={itemIndex} className="flex items-center gap-2 text-muted-foreground mb-2">
                                        {service.name?.toLowerCase().includes("telephone") ? (
                                            <Phone className="h-4 w-4 text-primary" />
                                        ) : service.name?.toLowerCase().includes("love sign") || service.name?.toLowerCase().includes("mr and mrs") ? (
                                            <Heart className="h-4 w-4 text-primary" />
                                        ) : service.name?.toLowerCase().includes("postbox") ? (
                                            <Mail className="h-4 w-4 text-primary" />
                                        ) : service.name?.toLowerCase().includes("donut") ? (
                                            <Cookie className="h-4 w-4 text-primary" />
                                        ) : service.name?.toLowerCase().includes("prosecco") ? (
                                            <Wine className="h-4 w-4 text-primary" />
                                        ) : service.name?.toLowerCase().includes("selfie") ? (
                                            <Camera className="h-4 w-4 text-primary" />
                                        ) : (
                                            <Sparkles className="h-4 w-4 text-primary" />
                                        )}
                                        {service.name}
                                    </li>
                                ))) : null}
                            </ul>
                        </CardContent>
                    </MagicCard>
                ))}
            </div>
            <p className="mt-8 text-center text-muted-foreground">
                Church Décor packages starting from €500. Contact us for more information.
            </p>
        </div>
    )
}

