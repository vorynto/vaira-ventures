import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vairaventures.in"),
  title: {
    default: "Vaira Ventures | Jockey & First Cry Franchise Outlet, Singaperumal Kovil, Chennai",
    template: "%s | Vaira Ventures",
  },
  description:
    "Vaira Ventures operates the authorized Jockey and First Cry franchise outlets at Singaperumal Kovil, Chennai — premium innerwear, apparel, and everything for babies & kids.",
  icons: {
    icon: "/assets/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
