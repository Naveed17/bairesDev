import type { ReactNode } from 'react'
import { locales } from '../../../next-intl'
import '@src/css/app.css'
import { Noto_Kufi_Arabic, Outfit } from 'next/font/google'
import AppProvider from '@lib/appProvider'

const outfit = Outfit({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

const notoKufiArabic = Noto_Kufi_Arabic({
  weight: ['400', '700'],
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-noto-kufi-arabic',
})

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const isArabic = lang === 'ar'

  return (
    <html
      lang={lang}
      dir={isArabic ? 'rtl' : 'ltr'}
      className={isArabic ? notoKufiArabic.variable : outfit.variable}
    >
      <body className={isArabic ? notoKufiArabic.className : outfit.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
