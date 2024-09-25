import "./globals.css";
import Navbar from "@/components/navbar";
import React from "react";
import Script from "next/script";

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <head>
            <link
                rel="stylesheet"
                href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css"
            />
            <Script src="https://cdn.iamport.kr/v1/iamport.js"></Script>
        </head>
        <body>
        <header className="w-full flex justify-center">
            <Navbar/>
        </header>
        <main className="flex justify-center items-center w-full mt-48">
            <div className="w-4/5">
                {children}
            </div>
        </main>
        </body>
        </html>
    );
}
