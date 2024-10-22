import type { Metadata } from "next"
import "../styles/main.css"

export const metadata: Metadata = {
    title: "next-express-ts",
    description: "next-express-ts",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}
