import Link from 'next/link'
import { SearchIcon, AnchorIcon } from 'lucide-react'

export default function PostNotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-teal-400 to-teal-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl w-full space-y-8 text-center">
                <div className="relative">

                    <AnchorIcon className="h-32 w-32 text-white mx-auto relative z-10 animate-bounce" />
                </div>
                <h1 className="mt-6 text-4xl font-extrabold text-white tracking-tight sm:text-5xl md:text-6xl">
                    Post Not Found
                </h1>
                <p className="mt-2 text-xl text-teal-100">
                    Oops! This post seems to be uncharted. <br/>
                    It seems like it was removed or never existed. <br/>
                    Check if the link is correct or try again in a few minutes.
                </p>
                <div className="mt-6 flex justify-center items-center gap-4">
                    <Link href="/home/blog" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-teal-900 bg-teal-100 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-300">
                        <SearchIcon className="h-5 w-5 mr-2" /> Explore Other Posts
                    </Link>
                    <Link href="/home" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-300">
                        Return to Surface (Home)
                    </Link>
                </div>
            </div>
        </div>
    )
}

