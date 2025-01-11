import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
    return (
        <main className="container mx-auto px-4 py-8">
            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-2">Diving Into Indonesia</h2>
                <p className="text-lg mb-4">
                    Welcome to Diving Into Indo, a journey of exploration, social work, and cultural immersion in the beautiful archipelago of Indonesia. We are two friends passionate about making a difference while experiencing the rich diversity of this incredible country.
                </p>
            </section>

            <section className="mb-8 bg-primary p-6 rounded-lg">
                <h2 className="text-3xl font-semibold mb-2">Our Mission</h2>
                <p className="text-lg mb-4">
                    Our mission is to combine our love for travel with meaningful social work. We aim to:
                </p>
                <ul className="list-disc list-inside text-lg mb-4">
                    <li>Engage in community development projects</li>
                    <li>Promote sustainable tourism practices</li>
                    <li>Share the beauty and culture of Indonesia with the world</li>
                    <li>Inspire others to make a positive impact through travel</li>
                </ul>
            </section>

            {/* Team Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6">Meet the Team</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <TeamMember
                        name="Fabe Stuffken"
                        role="Co-founder & Social Work Coordinator"
                        bio="A passionate traveler with a background in social work, dedicated to making a positive impact in communities across Indonesia."
                    />
                    <TeamMember
                        name="Mats van den Tempel"
                        role="Co-founder & Travel Specialist"
                        bio="An experienced adventurer with a keen interest in sustainable tourism and cultural exchange, excited to share the wonders of Indonesia."
                    />
                </div>
            </section>

            {/* Blog and Itinerary Section */}
            <section className="text-center">
                <h2 className="text-3xl font-semibold mb-6">Follow Our Journey</h2>
                <div className="flex justify-center space-x-4">
                    <Link
                        href="/home/blog"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                    >
                        Read the Blog
                    </Link>
                    <Link
                        href="/home/trip"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                    >
                        Check the Itinerary
                    </Link>
                </div>
            </section>
        </main>
    )
}

function TeamMember({ name, role, bio }: { name: string; role: string; bio: string }) {
    return (
        <div className="bg-primary p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-600 mb-2">{role}</p>
            <p>{bio}</p>
        </div>
    )
}

