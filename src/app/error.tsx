'use client' // Error components must be Client Components

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangleIcon, RefreshCcwIcon } from 'lucide-react'
import { type Metadata } from 'next'

export const metadata: Metadata = {
    title: '500 - Server Error',
    description: 'Uh-oh! The server malfunctioned. Don\'t panic! Try again in a few minutes or contact us.',
    openGraph: {
        type: 'website',
        url: 'https://divingintoindo.xyz/500',
        title: '500 - Server Error',
        description: 'Uh-oh! The server malfunctioned. Don\'t panic! Try again in a few minutes or contact us.',
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

export default function Error({error, reset,}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen bg-gradient-to-b from-red-400 to-red-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl w-full space-y-8 text-center">
                <div className="relative">
                    <AlertTriangleIcon className="h-32 w-32 text-white mx-auto relative z-10 animate-bounce" />
                </div>
                <h1 className="mt-6 text-4xl font-extrabold text-white tracking-tight sm:text-5xl md:text-6xl">
                    500 - Server Error
                </h1>
                <p className="mt-2 text-xl text-red-100">
                    Uh-oh! The server malfunctioned. <br/> Don't panic! Try again in a few minutes or contact us.
                </p>
                <div className="mt-6 flex items-center justify-center gap-4">
                    <button
                        onClick={() => reset()}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-red-900 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-300"
                    >
                        <RefreshCcwIcon className="h-5 w-5 mr-2" /> Try Again
                    </button>
                    <Link href="/home" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-300">
                        Return to Surface
                    </Link>
                </div>
            </div>
        </div>
    )
}

