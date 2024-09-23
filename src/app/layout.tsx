import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/scss/bootstrap.scss';
import '@/styles/style.css';

import Navbar from "@/components/navbar";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <header>
            <Navbar/>
        </header>
        {children}
        </body>
        </html>
    );
}
