// import "./globals.css";
// import { Analytics } from "@vercel/analytics/next";
// import { SpeedInsights } from "@vercel/speed-insights/next";
// import Navbar from "@/components/Navbar";
// import LenisProvider from "@/components/LenisProvider";
// import { Rubik } from "next/font/google";
// import AudioProvider from "@/components/AudioProvider";
// import SoundButton from "@/components/SoundButton";

// const spaceGrotesk = Rubik({
//   subsets: ["latin"],
//   variable: "--font-main",
//   display: "swap",
// });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={spaceGrotesk.variable}>
//       <head>
//         <link
//           rel="stylesheet"
//           href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
//         />
//       </head>
//       <body className="bg-black text-white">
//         <AudioProvider>
//           <LenisProvider>
//             <Navbar />
//             {children}
//             <SoundButton />
//           </LenisProvider>
//         </AudioProvider>
//         <Analytics />
//         <SpeedInsights />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "Person",
//               name: "Shubham Bachhav",
//               url: "https://shubhambachhav.live",
//               jobTitle: "React Developer",
//               address: {
//                 "@type": "PostalAddress",
//                 addressLocality: "Pune",
//                 addressCountry: "India",
//               },
//               sameAs: [
//                 "https://github.com/ShubhamShamBachhav",
//                 "https://www.linkedin.com/in/shubham-bachhav-a59b23360/",
//               ],
//             }),
//           }}
//         />
//       </body>
//     </html>
//   );
// }

// // SEO Metadata
// export const metadata = {
//   title: {
//     default: "Shubham Bachhav - Software Engineer",
//     template: "%s | Shubham Bachhav",
//   },
//   description:
//     "Shubham Bachhav is a Pune-based React Developer specializing in scalable frontend architecture and performance optimization.",
//   openGraph: {
//     title: "Shubham Bachhav - Software Engineer",
//     description:
//       "Shubham Bachhav is a Pune-based Software Engineer & Full-Stack Developer specializing in scalable frontend architecture and performance optimization.",
//     url: "https://shubhambachhav.vercel.app",       // ✅ fixed
//     siteName: "Shubham Bachhav Portfolio",
//     type: "website",
//     images: [
//       {
//         url: "https://shubhambachhav.vercel.app/og-image.png",  // ✅ fixed
//         width: 1200,
//         height: 630,
//         alt: "Shubham Bachhav - Software Engineer & Full-Stack Developer",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Shubham Bachhav | Frontend Engineer",
//     description:
//       "Frontend Engineer specializing in React.js and scalable UI architecture.",
//     images: ["https://shubhambachhav.vercel.app/og-image.png"],  // ✅ fixed
//   },
// };

//--------------------

import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import LenisProvider from "@/components/LenisProvider";
import { Rubik } from "next/font/google";
import AudioProvider from "@/components/AudioProvider";
import SoundButton from "@/components/SoundButton";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-main",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={rubik.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>

      <body className="bg-black text-white">
        <AudioProvider>
          <LenisProvider>
            <Navbar />
            {children}
            <SoundButton />
          </LenisProvider>
        </AudioProvider>

        <Analytics />
        <SpeedInsights />

        {/* 🔥 Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shubham Bachhav",
              url: "https://shubhambachhav.vercel.app",
              jobTitle:
                "Java Full Stack Developer & Frontend React.js Developer",
              knowsAbout: [
                "Java",
                "Spring Boot",
                "Microservices",
                "React.js",
                "TypeScript",
                "REST APIs",
                "AWS",
                "Frontend Development",
                "Backend Development",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pune",
                addressCountry: "India",
              },
              sameAs: [
                "https://github.com/ShubhamShamBachhav",
                "https://www.linkedin.com/in/shubham-bachhav-a59b23360/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}

//// 🔥 SEO METADATA

export const metadata = {
  title: {
    default:
      "Shubham Bachhav | Java Full Stack Developer & React.js Developer",
    template: "%s | Shubham Bachhav",
  },

  description:
    "Java Full Stack Developer and Frontend React.js Developer with 2.4+ years of experience building scalable web applications using Spring Boot, Microservices, React, and AWS. Skilled in REST APIs, UI development, and performance optimization.",

  keywords: [
    "Shubham Bachhav",
    "Java Full Stack Developer",
    "React.js Developer",
    "Frontend Developer",
    "Spring Boot",
    "Microservices",
    "AWS",
    "TypeScript",
    "REST API Developer",
    "Software Engineer Pune",
  ],

  openGraph: {
    title:
      "Shubham Bachhav | Java Full Stack Developer & React.js Developer",
    description:
      "Software Engineer specializing in Spring Boot, Microservices, React.js, and AWS. Experienced in building scalable backend systems and modern frontend applications.",
    url: "https://shubhambachhav.vercel.app",
    siteName: "Shubham Bachhav Portfolio",
    type: "website",
    images: [
      {
        url: "https://shubhambachhav.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shubham Bachhav - Full Stack & React Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Shubham Bachhav | Full Stack & React.js Developer",
    description:
      "Java Full Stack & React.js Developer skilled in Spring Boot, Microservices, and modern frontend development.",
    images: ["https://shubhambachhav.vercel.app/og-image.png"],
  },
};