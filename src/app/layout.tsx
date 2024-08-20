import { Metadata } from "next"
import "styles/globals.css"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { Fondamento } from "next/font/google";


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

const fondamento= Fondamento({
  subsets:['latin'],
  weight:['400'],
  style:'normal'
})



export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
      {/* <AppRouterCacheProvider>
      <ThemeProvider theme={theme}> */}
        <main className={fondamento.className}>{props.children}</main>
      {/* </ThemeProvider>
      </AppRouterCacheProvider> */}
      </body>
    </html>
  )
}
