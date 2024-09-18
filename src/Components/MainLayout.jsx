"use client";

import { ThemeProvider, useTheme } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import { useEffect, useState } from "react";
import Navbar from "./Shared/Navbar/Navbar";

const MainLayout = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only apply the theme after the component is mounted
  useEffect(() => {
    setMounted(true);
    setTheme("dark");
  }, [setTheme]);

  // Avoid rendering the content until the theme is applied
  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class">
      {/* <Cursor></Cursor> */}
      <div className={`dark:bg-gray-800 ${theme === "dark" ? "dark" : ""}`}>
        {/* Top Loader and Content */}
        <NextTopLoader color="#5036E1" height={4} />
        <Navbar />
        {/* <header className="text-white">Header</header> */}
        <main className={`theme-${theme}`}>{children}</main>
        <footer className="text-white">Footer</footer>
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;
