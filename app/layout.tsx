import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Acerto - Built with AI Studio',
  description: 'The fastest path from prompt to production with Gemini.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
