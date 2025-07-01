"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MagicCard } from '@/components/magicui/magic-card'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

const contactFormSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    eventDate: z.string().min(1, {
        message: "Event date is required.",
    }),
    eventLocation: z.string().optional(),
    contactNumber: z.string().optional(),
    contactEmail: z.string().email({
        message: "Please enter a valid email address.",
    }),
    moreInfo: z.string().optional(),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export default function ContactForm() {
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            eventDate: "",
            eventLocation: "",
            contactNumber: "",
            contactEmail: "",
            moreInfo: "",
        },
    })

    function onSubmit(data: ContactFormValues) {
        const subject = "Wedding Inquiry - " + data.name
        const body = `Hello,

I would like to inquire about your wedding décor services.

Details:
- Name: ${data.name}
- Event Date: ${data.eventDate}
- Event Location: ${data.eventLocation}
- Contact Number: ${data.contactNumber}
- Contact Email: ${data.contactEmail}

Additional Information:
${data.moreInfo || 'N/A'}

Thank you for your time and I look forward to hearing from you.

Best regards,
${data.name}`

        const mailtoLink = `mailto:MydreamdayIreland@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        window.open(mailtoLink, '_blank')
    }

    return (
        <MagicCard className="w-full">
            <CardHeader>
                <CardTitle>Inquiry Form</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Your Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="eventDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Event Date</FormLabel>
                                        <FormControl>
                                            <Input type="date" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="eventLocation"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Event Location</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter event location" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="contactNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Contact Number</FormLabel>
                                        <FormControl>
                                            <Input type="tel" placeholder="Enter your phone number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="contactEmail"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Contact Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="Enter your email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="moreInfo"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>More Information</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Tell us more about your event..."
                                            rows={4}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">
                            Send Inquiry
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </MagicCard>
    )
} 