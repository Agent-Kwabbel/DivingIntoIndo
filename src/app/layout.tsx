import "~/styles/globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { DM_Sans } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import { cn } from '~/lib/utils'

import { TRPCReactProvider } from "~/trpc/react";

const fontHeading = DM_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-heading',
})

const fontBody = Space_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-body',
    weight: ["400", "700"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={cn('antialiased', fontHeading.variable, fontBody.variable)}>
        <TRPCReactProvider>
            {children}
            <Analytics />
            <SpeedInsights />
        </TRPCReactProvider>
        </body>
        </html>
    );
}