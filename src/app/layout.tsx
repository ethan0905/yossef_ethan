import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Medtech Q&A App',
  description: 'Application pour les questions et réponses sur le monde de la medtech',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
