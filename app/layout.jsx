import { Layout } from "@/components/dom/Layout"
import "@/global.css"
import Menu from "@/components/Menu"

export const metadata = {
  title: "Next.js + Three.js",
  description: "A minimal starter for Nextjs + React-three-fiber and Threejs.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <head />
      <body>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <Layout>
          <Menu />
          {children}
        </Layout>
      </body>
    </html>
  )
}
