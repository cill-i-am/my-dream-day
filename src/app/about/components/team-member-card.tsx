'use client'

import { client } from '@/sanity/lib/client';
import { Team } from '../../../../sanity.types';
import { useNextSanityImage } from 'next-sanity-image';
import { CardContent } from '@/components/ui/card';
import { Card } from '@/components/ui/card';
import Image from "next/image"

const TeamMemberCard = ({ member }: { member: Team }) => {
    const imageProps = useNextSanityImage(client, member.image!);

    return (
        <Card>
            <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Image {...imageProps} alt={member.name || 'Team Member'} width={400} height={400} className="rounded-full shadow-lg" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">{member.name}</h2>
                        <p className="mb-4 text-muted-foreground">
                            {member.description}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export { TeamMemberCard }