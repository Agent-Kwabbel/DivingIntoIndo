import ContactForm from './ContactForm'

export default function ContactPage() {
    return (
        <div className="flex justify-center items-center mt-10">
            <div>
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
                    <p className="mb-4">We'd love to hear from you! You can reach us at any time. Just fill out the form below and we'll get back to you as soon as possible.</p>
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}


