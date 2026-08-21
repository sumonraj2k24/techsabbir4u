import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "techsabbir4u | SM SABBIR HOSSAIN - Full Stack Developer & Designer",
  description: "Official portfolio of SM SABBIR HOSSAIN (techsabbir4u) - Senior Full Stack Web Developer, Graphics Designer, and Remote Tech Support Specialist.",
  keywords: [
    "techsabbir4u",
    "SM SABBIR HOSSAIN",
    "Full Stack Web Developer",
    "Graphics Designer",
    "Remote Tech Support",
    "React Developer Bangladesh",
    "Next.js Developer",
    "Freelancer Portfolio"
  ],
  authors: [{ name: "SM SABBIR HOSSAIN" }],
  icons: {
    icon: "/profile.jpg",
    shortcut: "/profile.jpg",
    apple: "/profile.jpg",
  },
  openGraph: {
    title: "techsabbir4u | SM SABBIR HOSSAIN",
    description: "Full Stack Web Developer • Graphics Designer • Remote Tech Support Specialist",
    url: "https://techsabbir4u.vercel.app",
    siteName: "techsabbir4u",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "SM SABBIR HOSSAIN",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "SM SABBIR HOSSAIN",
    alternateName: "techsabbir4u",
    jobTitle: "Full Stack Web Developer & Graphics Designer",
    email: "sabbirrajcpsc@gmail.com",
    telephone: "+8801712631560",
    url: "https://techsabbir4u.vercel.app",
    image: "/profile.jpg",
    knowsAbout: [
      "Full Stack Web Development",
      "Graphics Design",
      "Remote Tech Support",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "TailwindCSS"
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body class="bg-darkBg text-slate-100 antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}