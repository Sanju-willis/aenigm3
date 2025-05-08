import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { Layout } from '../components/layout'
import Script from 'next/script'
import { playfair, sourceSans } from '../utils/fonts'

export const metadata: Metadata = {
  title: 'Aenigm3 - Digital Marketing Agency',
  description: 'Digital Marketing Solutions for your Business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`h-full ${playfair.variable} ${sourceSans.variable}`}>
      <body className={`${sourceSans.className} h-full`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
