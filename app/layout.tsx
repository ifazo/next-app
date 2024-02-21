import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/auth'
import './globals.css'
import { Toaster } from "@/components/ui/sonner";
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ifaz Next App',
  description: 'Created by Ziaul Karim Ifaz',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <Toaster />
          {children}
          <Footer />
        </body>
      </html>
    </SessionProvider>
  )
}
