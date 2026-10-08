import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adarsh Vijayakumar | Java Full Stack Software Engineer",
  description: "Explore Adarsh Vijayakumar’s experience in Java, Spring Boot, event-driven systems, and AWS across healthcare and retail.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
