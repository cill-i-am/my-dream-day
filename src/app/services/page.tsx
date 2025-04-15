import { MagicCard } from '@/components/magicui/magic-card'
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Phone, Heart, Mail, Cookie, Wine, Camera, Sparkles } from "lucide-react"

export default function Services() {
    const services = [
        "Church Décor",
        "Ceremony Décor",
        "Outdoor Ceremony",
        "Selfie Mirror hire",
        "360 Cam Hire",
        "Led Light Up Dance Floor",
        "5ft Love Sign",
        "5ft Mr and Mrs Sign",
        "Cold Fountain Stage Effects",
        "Throne Chairs",
        "Centre pieces",
        "Postbox hire",
        "Stage effects",
        "Sparklers",
        "Confetti Canons",
        "Telephone Audio Box",
        "Full Hall Draping",
    ]

    const packages = [
        {
            name: "Standard Package",
            price: "€1000",
            items: [
                "Telephone Audio Box",
                "Postbox",
                "Love Sign 5ft",
                "Donut Stand",
                "MR AND MRS SIGN 5FT",
                "Prosecco Stand",
            ],
        },
        {
            name: "Selfie Package",
            price: "€1000",
            items: ["Telephone audio box", "Postbox", "Selfie Mirror Hire – 3hour hire"],
        },
    ]

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
                                <span className="text-muted-foreground">{service}</span>
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
                                {pkg.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-center gap-2 text-muted-foreground mb-2">
                                        {item.toLowerCase().includes("telephone") ? (
                                            <Phone className="h-4 w-4 text-primary" />
                                        ) : item.toLowerCase().includes("love sign") || item.toLowerCase().includes("mr and mrs") ? (
                                            <Heart className="h-4 w-4 text-primary" />
                                        ) : item.toLowerCase().includes("postbox") ? (
                                            <Mail className="h-4 w-4 text-primary" />
                                        ) : item.toLowerCase().includes("donut") ? (
                                            <Cookie className="h-4 w-4 text-primary" />
                                        ) : item.toLowerCase().includes("prosecco") ? (
                                            <Wine className="h-4 w-4 text-primary" />
                                        ) : item.toLowerCase().includes("selfie") ? (
                                            <Camera className="h-4 w-4 text-primary" />
                                        ) : (
                                            <Sparkles className="h-4 w-4 text-primary" />
                                        )}
                                        {item}
                                    </li>
                                ))}
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

