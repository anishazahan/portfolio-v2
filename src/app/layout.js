import MainLayout from "@/Components/MainLayout";
import { Heebo, Outfit } from "next/font/google";
import "./globals.css";

// Google Fonts
const heebo = Heebo({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-heebo",
});

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${heebo.variable} ${outfit.variable} antialiased`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
