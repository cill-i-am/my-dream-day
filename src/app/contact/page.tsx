"use client"

import { useState, useMemo } from "react"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MagicCard } from '@/components/magicui/magic-card'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        eventDate: "",
        eventLocation: "",
        contactNumber: "",
        contactEmail: "",
        moreInfo: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prevState) => ({ ...prevState, [name]: value }))
    }

    const mailtoLink = useMemo(() => {
        const subject = "Wedding Inquiry - " + formData.name
        const body = `Hello,

I would like to inquire about your wedding photography services.

Details:
- Name: ${formData.name}
- Event Date: ${formData.eventDate}
- Event Location: ${formData.eventLocation}
- Contact Number: ${formData.contactNumber}
- Contact Email: ${formData.contactEmail}

Additional Information:
${formData.moreInfo}

Thank you for your time and I look forward to hearing from you.

Best regards,
${formData.name}`

        return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }, [formData])

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

            <MagicCard className="w-full">
                <CardHeader>
                    <CardTitle>Inquiry Form</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Your Name</Label>
                                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="eventDate">Event Date</Label>
                                <Input
                                    type="date"
                                    id="eventDate"
                                    name="eventDate"
                                    value={formData.eventDate}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="eventLocation">Event Location</Label>
                                <Input
                                    id="eventLocation"
                                    name="eventLocation"
                                    value={formData.eventLocation}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="contactNumber">Contact Number</Label>
                                <Input
                                    type="tel"
                                    id="contactNumber"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="contactEmail">Contact Email</Label>
                                <Input
                                    type="email"
                                    id="contactEmail"
                                    name="contactEmail"
                                    value={formData.contactEmail}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="moreInfo">More Information</Label>
                            <Textarea id="moreInfo" name="moreInfo" value={formData.moreInfo} onChange={handleChange} rows={4} />
                        </div>
                        <Button asChild type="button">
                            <a href={mailtoLink}>
                                Send Email
                            </a>
                        </Button>
                    </div>
                </CardContent>
            </MagicCard>
        </div>
    )
}

