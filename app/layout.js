import "@/styles/globals.scss";

import Provder from "@/components/layout/Provder";

export const metadata = {
  title: "O-Projects | Architecture, Design & Technology Solutions",
  description: "O-Projects delivers innovative architecture, design, UI/UX, web development, and mobile app solutions to bring your projects to life.",
  keywords: [
    "Architecture",
    "Design",
    "UI/UX",
    "Web Development",
    "Mobile Apps",
    "Technology Solutions",
    "Innovative Projects",
    "Digital Solutions","Technology","O-projects","o-projects","o projects", "oprojects","projects","MENA","solutions","craft","front-end"
  ],
  authors: [{ name: "O-Projects", url: "https://o-projects.vercel.app/" }],
  creator: "O-Projects",
  publisher: "O-Projects",
  metadataBase: new URL("https://o-projects.vercel.app/"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "O-Projects | Architecture, Design & Technology Solutions",
    description: "We provide cutting-edge solutions in architecture, design, UI/UX, web, and mobile development to elevate your projects.",
    url: "https://o-projects.vercel.app/",
    siteName: "O-Projects",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://o-projects.vercel.app/images/frams/framelogo1.png",
        width: 1200,
        height: 630,
        alt: "UI/UX Design",
      },
      {
        url: "https://o-projects.vercel.app/images/frams/framelogo2.png",
        width: 1200,
        height: 630,
        alt: "Web Development",
      },
      {
        url: "https://o-projects.vercel.app/images/frams/framelogo3.png",
        width: 1200,
        height: 630,
        alt: "Mobile App Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "O-Projects | Architecture, Design & Technology Solutions",
    description: "O-Projects delivers innovative solutions in UI/UX, web, mobile app development, and architecture.",
    images: [
      "https://o-projects.vercel.app/images/frams/framelogo1.png",
    ],
    creator: "@OProjectsOfficial",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-b900"
      >
        <Provder>
          {children}
        </Provder>
      </body>
    </html>
  );
}
