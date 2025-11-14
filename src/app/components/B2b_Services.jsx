"use client";
import React from "react";
import Image from "next/image";

export default function B2BLeadDataFeatures() {
 const features = [
  {
    title: "Win More Clients with the Right B2B Data for Your Agency",
    description:
      "Help your clients reach the right businesses with contact details and company info that makes outreach easier, faster, and more effective.",
    points: [
      {
        title: "Reach Real People Who Make Decisions",
        description:
          "Find names, job titles, emails, phone numbers, and LinkedIn profiles—so your clients talk to the right person every time.",
      },
      {
        title: "Know the Business Before You Pitch",
        description:
          "Get details like company size, website, revenue range, and more to make outreach more targeted and relevant.",
      },
      {
        title: "Run Campaigns That Actually Work",
        description:
          "Use clean and ready-to-use data for cold email, LinkedIn messages, and ads to get better results.",
      },
      {
        title: "Show Clients Real Value, Fast",
        description:
          "When your outreach connects and converts, your agency stands out—making it easier to keep clients and win new ones.",
      },
    ],
    image: "/illustrations/Capture-Leads.png",
  },

  {
    title: "Get data instantly—skip the scraping, save time",
    description:
      "No more waiting for lead lists or scraping tools. Your leads are delivered in real time.",
    points: [
      {
        title: "No Third-Party Delays",
        description:
          "Our proprietary system delivers data securely and instantly, without bottlenecks.",
      },
      {
        title: "Built for Speed",
        description:
          "Optimized infrastructure ensures smooth performance even at high volume.",
      },
      {
        title: "Smarter Outreach, Better Results",
        description:
          "Cleaner, more relevant data means your campaigns convert faster.",
      },
    ],
    image: "/illustrations/white-labeled.png",
  },

  {
    title: "100% legally obtained data that is ready to use",
    description:
      "All data is ethically sourced and follows global privacy standards.",
    points: [
      {
        title: "Enterprise-Grade Security",
        description:
          "Data is encrypted, stored securely, and access is strictly permission-based.",
      },
      {
        title: "Ethically Sourced Data",
        description:
          "Collected through consent-based, privacy-compliant methods that meet global standards.",
      },
      {
        title: "Peace of Mind",
        description:
          "Use the data confidently for outreach, remarketing, and analytics.",
      },
    ],
    image: "/illustrations/Target.png",
  },
];

return (
  <section className="w-full bg-white py-20 font-sans">
    <div className="max-w-7xl mx-auto px-6 space-y-28">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row items-center gap-12 ${
            idx % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* IMAGE COLUMN */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-[4/3]">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* TEXT COLUMN */}
          <div className="w-full md:w-1/2 space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
              {feature.title}
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {feature.description}
            </p>

            {/* BULLETS (heading + paragraph each) */}
            <ul className="space-y-5 mt-4">
              {feature.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  
                  {/* Bullet Icon */}
                  <span className="text-[#a53000] text-lg mt-1">•</span>

                  {/* Bullet Text */}
                  <div>
                    <p className="text-gray-900 font-semibold text-base md:text-lg leading-snug">
                      {point.title}
                    </p>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-1">
                      {point.description}
                    </p>
                  </div>

                </li>
              ))}
            </ul>

            {/* BUTTON */}
            <div className="mt-8 mb-14 flex justify-center md:justify-start">
              <a href="/book-demo/">
                <button className="bg-[#B31C04] text-white px-8 py-3 rounded-md font-semibold text-[15px] hover:bg-[#8f2800] transition-all duration-300 shadow-md hover:shadow-lg">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
}
