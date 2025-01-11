'use server'

import { db } from "~/server/db"
import { eq } from "drizzle-orm"
import { contactSubmission, flags } from "~/server/db/schema"

interface ContactFormData {
    name: string
    email: string
    message: string
    ip: string
}

export async function submitContactForm(data: ContactFormData) {
    try {
        const flag = await db.select().from(flags).where(eq(flags.name, "override_status")).execute()
        if (flag[0]?.status != "null") {
            return { success: false, message: 'The contact form is currently closed. Please try again later.' }
        }

        const now = new Date()
        const submissions = await db.select().from(contactSubmission).where(eq(contactSubmission.ip, data.ip)).execute()
        if (submissions.length > 0 && submissions[0]?.createdAt && now.getTime() - new Date(submissions[0].createdAt).getTime() < 60 * 60 * 1000) {
            return { success: false, message: 'You have already submitted a message in the recent past and your request will be rate limited. Please wait a bit before submitting again.' }
        }

        let id = Math.floor(Math.random() * 1000000000)
        while ((await db.select().from(contactSubmission).where(eq(contactSubmission.id, id.toString())).execute()).length > 0) {
            id = Math.floor(Math.random() * 1000000000)
        }

        await db.insert(contactSubmission).values({
            id: id.toString(),
            name: data.name,
            email: data.email,
            message: data.message,
            ip: data.ip
        })

        return { success: true }
    } catch (error) {
        console.error('Error submitting contact form:', error)
        return { success: false, message: 'Failed to submit contact form' }
    }
}


