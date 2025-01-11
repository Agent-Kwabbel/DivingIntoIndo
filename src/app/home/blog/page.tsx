import { BlogListing } from "~/components/blog/listing";
import { type Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Blog for Diving Into Indo',
    openGraph: {
        type: 'website',
        url: 'https://divingintoindo.xyz/blog',
        title: 'Blog',
        description: 'Blog for Diving Into Indo',
        images: [
            {
                url: 'https://divingintoindo.xyz/img/logo.png',
                width: 512,
                height: 512,
                alt: '404 - Page Not Found',
            },
        ],
    },
}

export default function Page() {

    return (
        <div className="container mx-auto px-4 py-8">
            <BlogListing/>
        </div>
    )
}