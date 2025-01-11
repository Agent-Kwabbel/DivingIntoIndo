'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { submitContactForm } from './actions'
import axios from 'axios'
import * as AlertDialog from '@radix-ui/react-alert-dialog'

export default function ContactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [ipAddress, setIpAddress] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [dialogMessage, setDialogMessage] = useState('')

    useEffect(() => {
        const fetchIp = async () => {
            try {
                const response = await axios.get<{ ip: string }>('https://api.ipify.org?format=json')
                setIpAddress(response.data.ip)
            } catch (error) {
                console.error('Error fetching IP address:', error)
            }
        }
        void fetchIp()
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await submitContactForm({ name, email, message, ip: ipAddress })

            if (response.success) {
                setName('')
                setEmail('')
                setMessage('')
                setDialogMessage('Thank you for your message. We will get back to you soon!')
            } else {
                setDialogMessage(response.message ?? 'An unexpected error occurred.')
            }
        } catch (error) {
            setDialogMessage('There was an error submitting your message. Please try again.')
        } finally {
            setIsSubmitting(false)
            setDialogOpen(true)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-1">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block mb-1">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={4}
                        className="w-full px-3 py-2 border rounded-md"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-300"
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>

            <AlertDialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
                <AlertDialog.Portal>
                    <AlertDialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
                    <AlertDialog.Content className="fixed inset-1/4 bg-white p-6 rounded-md shadow-md h-fit">
                        <AlertDialog.Title className="text-lg font-bold">
                            Alert
                        </AlertDialog.Title>
                        <AlertDialog.Description className="mt-2">
                            {dialogMessage}
                        </AlertDialog.Description>
                        <div className="mt-4 flex justify-end">
                            <AlertDialog.Action asChild>
                                <button
                                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                                >
                                    OK
                                </button>
                            </AlertDialog.Action>
                        </div>
                    </AlertDialog.Content>
                </AlertDialog.Portal>
            </AlertDialog.Root>
        </>
    )
}
