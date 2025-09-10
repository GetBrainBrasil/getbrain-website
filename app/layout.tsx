import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GetBrain',
  description: 'Transforme sua empresa com agentes de IA customizados',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}