'use client'

import Image from "next/image"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { useNextSanityImage } from 'next-sanity-image'
import { client } from '@/sanity/lib/client'

interface CompanyInfoSectionProps {
    heading: string
    paragraphs: string[]
    image: SanityImageSource
    imageAlt: string
}

export default function CompanyInfoSection({ heading, paragraphs, image, imageAlt }: CompanyInfoSectionProps) {
    const imageProps = useNextSanityImage(client, image!);

    return (
        <section className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
                <h2 className="text-2xl font-semibold mb-4">{heading}</h2>
                {paragraphs.map((paragraph, index) => (
                    <p key={index} className={`text-muted-foreground ${index < paragraphs.length - 1 ? 'mb-4' : ''}`}>
                        {paragraph}
                    </p>
                ))}
            </div>
            <div>
                <Image {...imageProps} alt={imageAlt} width={500} height={300} className="shadow-lg" />
            </div>
        </section>
    )
} 