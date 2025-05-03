import getTeam from '@/sanity/queries/get-team'
import { TeamMemberCard } from "./components/team-member-card"

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

