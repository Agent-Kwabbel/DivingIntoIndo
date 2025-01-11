import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Statement',
  description: 'Privacy Statement for Diving Into Indo',
  openGraph: {
    type: 'website',
    url: 'https://divingintoindo.com/privacy',
    title: 'Privacy Statement',
    description: 'Privacy Statement for Diving Into Indo',
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

export default function Privacy() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Privacy Statement</h1>

      <p className="mb-4">Effective Date: 7 September 2024</p>

      <p className="mb-4"><strong>Diving Into Indo</strong> ("the Website") is a website operated by
        committed to protecting the personal data collected through your use of the Website. This Privacy Statement
        explains how we collect, use, and protect your information when you visit the Website.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">The Website uses third-party services to collect and analyze non-personal data,
        including:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Timestamps</li>
        <li>IP addresses</li>
        <li>Website information (such as the page you visited and referring URL)</li>
        <li>Estimated geolocation</li>
        <li>Device and network information (such as type of browser and operating system)</li>
        <li>Performance data (including service speed metrics and other analytics)</li>
      </ul>
      <p className="mb-4">We do not collect any personal identifiable information (PII) directly from
        users.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Third-Party Services</h2>
      <p className="mb-4">We use third-party services to enhance the Website's functionality and
        performance, which may collect non-anonymous data. These services include:</p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li><a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" className="text-blue-500 hover:underline">Vercel
          Analytics</a></li>
        <li><a href="https://vercel.com/docs/speed-insights/privacy-policy" target="_blank" className="text-blue-500 hover:underline">Vercel
          Speed Insights</a></li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Use of Collected Data</h2>
      <p className="mb-4">The data collected is used solely for improving the Website, monitoring its
        performance, and ensuring it operates efficiently. We do not sell, share, or distribute this information to
        third parties, except as necessary for the operation of the Website.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Cookies</h2>
      <p className="mb-4">The Website may use cookies to enhance user experience and track performance.
        These cookies do not collect personal information but are used for tracking visitor behavior, such as page views
        and navigation paths.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Data Security</h2>
      <p className="mb-4">We take appropriate security measures to protect the data collected through the
        Website. However, no transmission over the Internet is entirely secure, and we cannot guarantee the absolute
        security of the information.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Your Rights</h2>
      <p className="mb-4">As a user, you have the right to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Access the data collected about you</li>
        <li>Request correction or deletion of inaccurate data</li>
        <li>Request the removal of your data from the Website</li>
        <li>Request the restriction of data processing in certain circumstances</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Modifications to the Privacy Statement</h2>
      <p className="mb-4">We reserve the right to modify this Privacy Statement at any time. Any changes
        will be effective immediately upon posting the revised statement on the Website. Continued use of the Website
        after any modifications indicates your acceptance of the updated Privacy Statement.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Governing Law</h2>
      <p className="mb-4">This Privacy Statement is governed by the laws of the Netherlands. By using the
        Website, you consent to the processing of your data in accordance with these laws.</p>
    </div>

  )
}