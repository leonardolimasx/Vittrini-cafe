import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import './globals.css'

// Puxando a fonte super elegante Playfair Display
const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vittrini Restaurante e Café',
  description: 'O melhor restaurante e café de Botelhos - MG',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={playfair.className}>{children}</body>
    </html>
  )
}