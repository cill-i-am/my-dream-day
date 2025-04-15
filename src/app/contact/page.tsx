"use client"

import { useState } from "react"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MagicCard } from '@/components/magicui/magic-card'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        partnerName: "",
        eventDate: "",
        ceremonyLocation: "",
        receptionLocation: "",
        contactNumber: "",
        contactEmail: "",
        moreInfo: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prevState) => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the form data to your server or a third-party service
        console.log(formData)
        alert("Thank you for your inquiry. We will get back to you soon!")
    }

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

            <MagicCard className="w-full">
                <CardHeader>
                    <CardTitle>Inquiry Form</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Your Name</Label>
                                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="partnerName">Your Partner&apos;s Name</Label>
                                <Input
                                    id="partnerName"
                                    name="partnerName"
                                    value={formData.partnerName}
                                    onChange={handleChange}
                                    required
                                />
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
                                <Label htmlFor="ceremonyLocation">Ceremony Location</Label>
                                <Input
                                    id="ceremonyLocation"
                                    name="ceremonyLocation"
                                    value={formData.ceremonyLocation}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="receptionLocation">Reception Location</Label>
                                <Input
                                    id="receptionLocation"
                                    name="receptionLocation"
                                    value={formData.receptionLocation}
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
                        <Button type="submit">Submit Inquiry</Button>
                    </form>
                </CardContent>
            </MagicCard>
        </div>
    )
}

