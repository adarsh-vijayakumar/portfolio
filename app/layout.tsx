import type { Metadata } from "next";
import { themeInitializer } from "@/lib/theme";
import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adarsh Vijayakumar | Java Full Stack Software Engineer",
  description: "Explore Adarsh Vijayakumar’s experience in Java, Spring Boot, event-driven systems, and AWS across healthcare and retail.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="light" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeInitializer }} /></head><body>{children}</body></html>;
}
