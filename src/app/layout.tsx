import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nodegaze Landing Page',
  description: 'Nodegaze landing page built with Next.js and Tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}