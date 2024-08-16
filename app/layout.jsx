import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import GoogleAnalytics from "@/components/GoogleAnalytics";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Gerardo Melendez | Software Developer Portfolio",
  description: "Gerardo Melendez's personal portfolio showcasing software development projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Gerardo Melendez, software developer, portfolio, React, JavaScript, web development" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://gerardomelendez-portfolio.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://gerardomelendez-portfolio.vercel.app/_next/image?url=%2Fassets%2Fphoto.png&w=1200&q=100" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://gerardomelendez-portfolio.vercel.app" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Gerardo Melendez",
            "url": "https://gerardomelendez-portfolio.vercel.app",
            "sameAs": [
              "https://www.linkedin.com/in/gerardomelendez/",
              "https://github.com/gerardomelendezpr"
            ],
            "jobTitle": "Software Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Your Current Employer or Freelance"
            }
          }
          `}
        </script>
      </Head>
      <body className={jetbrainsMono.variable}>
        <GoogleAnalytics />
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
