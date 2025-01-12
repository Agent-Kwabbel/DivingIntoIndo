import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Statement',
  description: 'Privacy Statement for Diving Into Indo',
  openGraph: {
    type: 'website',
    url: 'https://divingintoindo.xyz/privacy',
    title: 'Privacy Statement',
    description: 'Privacy Statement for Diving Into Indo',
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

export default function Privacy() {
  return (
      <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Privacy Statement</h1>

          <p className="mb-4">Effective Date: 12 January 2025</p>

          <p className="mb-4"><strong>Diving Into Indo</strong> ("the Website") is committed to protecting the personal
              data collected through your use of the Website. This Privacy Statement explains how we collect, use, and
              protect your information when you visit and interact with the Website.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
          <p className="mb-4">We collect the following information:</p>
          <ul className="list-disc list-inside mb-4">
              <li><strong>Through Website Interaction:</strong></li>
              <ul className="list-disc list-inside mb-4">
                  <li>Timestamps</li>
                  <li>IP addresses</li>
                  <li>Website usage information (e.g., pages visited, referring URLs)</li>
                  <li>Estimated geolocation</li>
                  <li>Device and network information (e.g., browser type and operating system)</li>
                  <li>Performance data (e.g., speed metrics and analytics)</li>
              </ul>
              <li><strong>Through the Contact Form:</strong></li>
              <ul className="list-disc list-inside mb-4">
                  <li>Your name</li>
                  <li>Your email address</li>
                  <li>Your message content</li>
                  <li>Your IP address</li>
                  <li>The date and time of your message submission</li>
              </ul>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">2. Third-Party Services</h2>
          <p className="mb-4">We use third-party services to enhance the Website's functionality and monitor its
              performance. These services include:</p>
          <ul className="list-disc list-inside mb-4">
              <li><a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank"
                     className="text-blue-500 hover:underline">Vercel Analytics</a></li>
              <li><a href="https://vercel.com/docs/speed-insights/privacy-policy" target="_blank"
                     className="text-blue-500 hover:underline">Vercel Speed Insights</a></li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">3. Use of Collected Data</h2>
          <p className="mb-4">The data we collect is used for the following purposes:</p>
          <ul className="list-disc list-inside mb-4">
              <li>Improving Website performance and user experience</li>
              <li>Monitoring Website analytics and resolving technical issues</li>
              <li>Responding to inquiries submitted through the contact form</li>
          </ul>
          <p className="mb-4">We do not sell, share, or distribute this data to third parties, except as necessary for
              the operation of the Website or as required by law.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">4. Cookies</h2>
          <p className="mb-4">The Website may use cookies to enhance user experience and track performance. These
              cookies do not collect personal information but are used to track behavior such as page views and
              navigation paths. You can manage or disable cookies through your browser settings.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">5. Data Security</h2>
          <p className="mb-4">We implement appropriate security measures to protect the data collected via the Website
              and contact form. However, no transmission over the Internet can be guaranteed as completely secure.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">6. Your Rights</h2>
          <p className="mb-4">As a user, you have the right to:</p>
          <ul className="list-disc list-inside mb-4">
              <li>Access the data collected about you</li>
              <li>Request correction or deletion of inaccurate data</li>
              <li>Request deletion of data submitted through the contact form</li>
              <li>Restrict processing of your data in certain circumstances</li>
          </ul>
          <p className="mb-4">To exercise these rights, please contact us via the contact form on the Website.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">7. Modifications to the Privacy Statement</h2>
          <p className="mb-4">We reserve the right to modify this Privacy Statement at any time. Any changes will be
              effective immediately upon posting the revised statement on the Website. Continued use of the Website
              indicates your acceptance of the updated Privacy Statement.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">8. Governing Law</h2>
          <p className="mb-4">This Privacy Statement is governed by the laws of the Netherlands. By using the Website or
              submitting information through the contact form, you consent to the processing of your data in accordance
              with these laws.</p>

      </div>

  )
}