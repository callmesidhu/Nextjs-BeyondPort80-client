import {Tiny5,Antonio,Vina_Sans,Unbounded,Poppins,Urbanist,Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
  

const tiny5 = Tiny5({
  variable: "--font-tiny5",
  weight: "400",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const vinaSans = Vina_Sans({
  weight: "400",
  variable: "--font-vina-sans",
  subsets: ["latin"],
});

const antonio = Antonio({
  subsets: ["latin"],
});

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-unbounded",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Faya:80",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${tiny5.variable} ${vinaSans.variable} ${urbanist.variable} ${geistSans.variable} ${geistMono.variable} ${unbounded.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
