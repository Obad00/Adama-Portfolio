import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Adama Dabo - Full Stack Web Developer',
    template: '%s | Adama Dabo',
  },
  description: 'Full stack web developer passionate about building modern web applications. Specialized in HTML, CSS, JavaScript, PHP, Laravel, Node.js, and more.',
  keywords: ['web developer', 'full stack', 'Laravel', 'React', 'Next.js', 'Senegal'],
  authors: [{ name: 'Adama Dabo' }],
  creator: 'Adama Dabo',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adama-portfolio.vercel.app',
    siteName: 'Adama Dabo Portfolio',
    title: 'Adama Dabo - Full Stack Web Developer',
    description: 'Full stack web developer passionate about building modern web applications.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Adama Dabo Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adama Dabo - Full Stack Web Developer',
    description: 'Full stack web developer passionate about building modern web applications.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
