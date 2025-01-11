import Link from 'next/link'
import { WavesIcon as Wave } from 'lucide-react'
import { type Metadata } from 'next'

export const metadata: Metadata = {
    title: '404 - Page Not Found',
    description: 'Oops! Looks like you\'ve dived too deep. Check if the link is correct or try again in a few minutes.',
    openGraph: {
        type: 'website',
        url: 'https://divingintoindo.com/404',
        title: '404 - Page Not Found',
        description: 'Oops! Looks like you\'ve dived too deep. Check if the link is correct or try again in a few minutes.',
        images: [
            {
                url: 'https://divingintoindo.com/img/logo.png',
                width: 512,
                height: 512,
                alt: '404 - Page Not Found',
            },
        ],
    },
}

export default function Custom404() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl w-full space-y-8 text-center">
                <div className="relative">

                    <Wave className="h-32 w-32 text-white mx-auto relative z-10 animate-bounce"/>
                </div>
                <h1 className="mt-6 text-4xl font-extrabold text-white tracking-tight sm:text-5xl md:text-6xl">
                    404 - Page Not Found
                </h1>
                <p className="mt-2 text-xl text-blue-100">
                    Oops! Looks like you've dived too deep. <br/>
                    Don't worry, we're here to help you resurface. <br/>
                    Check if the link is correct or try again in a few minutes.
                </p>
                <div className="mt-6">
                    <Link href="/home"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-900 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300">
                        Return to Surface
                    </Link>
                </div>
            </div>
        </div>
    )
}

