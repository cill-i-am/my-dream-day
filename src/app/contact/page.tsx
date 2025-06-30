import type { Metadata } from "next"
import ContactForm from './contact-form'

export const metadata: Metadata = {
    title: "Contact Us - My Dream Day.ie | Wedding Inquiry & Booking",
    description: "Contact My Dream Day.ie for your wedding or event décor needs. Get a quote for church décor, civil ceremony décor, and venue styling. Limerick based, serving nationwide.",
    keywords: ["contact", "wedding inquiry", "event booking", "quote", "church decor", "civil ceremony", "venue decor", "Limerick", "Ireland"],
    openGraph: {
        title: "Contact Us - My Dream Day.ie | Wedding Inquiry & Booking",
        description: "Contact My Dream Day.ie for your wedding or event décor needs. Get a quote for church décor, civil ceremony décor, and venue styling.",
        url: "https://mydreamday.ie/contact",
        siteName: "My Dream Day.ie",
        type: "website",
        locale: "en_IE",
        images: [
            {
                url: "/placeholder.svg", // You should replace this with a contact/inquiry related image
                width: 1200,
                height: 630,
                alt: "Contact My Dream Day - Wedding & Event Décor Inquiry",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us - My Dream Day.ie | Wedding Inquiry & Booking",
        description: "Contact My Dream Day.ie for your wedding or event décor needs. Get a quote for church décor, civil ceremony décor, and venue styling.",
        images: ["/placeholder.svg"], // You should replace this with a contact/inquiry related image
        creator: "@mydreamday_ie", // Replace with actual Twitter handle if available
    },
    alternates: {
        canonical: "https://mydreamday.ie/contact",
    },
}

export default function Contact() {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
            <ContactForm />
        </div>
    )
}

