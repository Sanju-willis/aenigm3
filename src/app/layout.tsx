import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { Layout } from '../components/layout'
import Script from 'next/script'
import { royalCastle, aleo } from '../utils/fonts'

export const metadata: Metadata = {
  title: 'Aenigm3 - Digital Marketing Agency',
  description: 'Digital Marketing Solutions for your Business',
  icons: {
    icon: '/fav-icon.png',
    shortcut: '/fav-icon.png',
    apple: '/fav-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`h-full ${royalCastle.variable} ${aleo.variable}`}>
      <body className={`${aleo.className} h-full`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
