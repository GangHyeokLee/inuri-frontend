import "./globals.css";
import Navbar from "@/components/navbar";
import React from "react";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <head>
            <link
                rel="stylesheet"
                href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css"
            />
        </head>
        <body>
        <header className="w-full flex justify-center">
            <Navbar />
        </header>
        <main className="flex justify-center items-center w-full mt-48">
            {children}
        </main>
        </body>
        </html>
    );
}
