import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Diving Into Indo',
  openGraph: {
    type: 'website',
    url: 'https://divingintoindo.xyz/terms',
    title: 'Terms of Service',
    description: 'Terms of Service for Diving Into Indo',
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

export default function Terms() {
  return (
      <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

          <p className="mb-4">Effective Date: 12 January 2025</p>

          <p className="mb-4">Welcome to <strong>Diving Into Indo</strong> ("the Website"). These Terms of Service
              govern your use of the Website. By accessing or using the Website, you agree to comply with the following
              terms.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">1. Website Purpose</h2>
          <p className="mb-4">The Website is primarily intended for sharing blog posts, photos, and details about our
              trip to Indonesia. The Website is for informational and non-commercial purposes only. The Website does not
              allow user interaction except through the contact form. Only site administrators have the ability to
              upload or modify content.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">2. Contact Form and User Submissions</h2>
          <p className="mb-4">The Website includes a contact form that allows users to submit their name, email,
              message, and IP address to the administrators. By using the contact form, you consent to the collection
              and processing of this information for the purpose of responding to your inquiry. Misuse of the contact
              form, including sending spam or inappropriate messages, is strictly prohibited.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">3. Good Faith Usage</h2>
          <p className="mb-4">You agree to use the Website in good faith and not to engage in any activities that could
              harm or abuse the Website, its content, or its features. You must not attempt to access restricted or
              administrative areas of the Website without proper authorization. Unauthorized access, tampering, or
              misuse of the Website is strictly prohibited.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">4. Intellectual Property</h2>
          <p className="mb-4">All original content, including text, photos, and other materials created by the
              administrators, is the property of <strong>Diving Into Indo</strong> unless otherwise noted. Any photos or
              content not created by the administrators are used under free-use licenses for non-commercial purposes.
              The rights to such third-party content remain with their respective owners.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">5. Liability Disclaimer</h2>
          <p className="mb-4">The content on this Website is for informational purposes only. While we strive to provide
              accurate and updated information, we cannot guarantee its completeness or accuracy. The administrators
              of <strong>Diving Into Indo</strong> are not liable for any damages arising from the use or inability to
              use the Website, including technical issues, broken links, or incorrect information.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">6. Data Collection and Third-Party Services</h2>
          <p className="mb-4">The Website uses third-party services to enhance its functionality and monitor
              performance. Additionally, the contact form collects personal data, including your name, email address,
              message, and IP address. For more details about how data is collected, processed, and stored, please refer
              to our <a href="/home/privacy" className="text-blue-500 hover:underline">Privacy Statement</a>.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">7. Modifications to the Terms</h2>
          <p className="mb-4">We reserve the right to modify these Terms of Service at any time. Any changes will be
              effective immediately upon posting the revised terms on the Website. Your continued use of the Website
              after any modifications indicates your acceptance of the updated terms.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">8. Governing Law</h2>
          <p className="mb-4">These Terms of Service are governed by and construed in accordance with the laws of the
              Netherlands. However, as the Website is hosted in Germany and accessed globally, applicable international
              regulations may also apply depending on your location.</p>

      </div>

  )
}