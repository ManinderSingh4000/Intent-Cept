

import Home from "./app-page";




export const metadata = {
  title: "IntentCept | Intelligent Acquisition System",
  description:
    "IntentCept helps agencies identify, capture, and convert high-intent leads into qualified customers with AI-powered automation and analytics.",
  keywords: [
    "IntentCept",
    "Lead Generation",
    "AI Marketing",
    "Automation Platform",
    "Customer Acquisition",
  ],
  alternates: {
    canonical: "https://intentcept.vercel.app/",
  },
  openGraph: {
    title: "IntentCept | Intelligent Acquisition System",
    description:
      "Identify, capture, and convert high-intent leads into customers with IntentCept’s AI-powered automation platform.",
    url: "https://intentcept.vercel.app/",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "IntentCept | Intelligent Acquisition System",
    description:
      "Discover how IntentCept transforms anonymous traffic into verified, high-intent leads.",
    images: ["/og-image.png"],
  },
};




export default function HomePage() {
  return (
    <main>
      <Home/>


    </main>
  );
}
