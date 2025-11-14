"use client";
import React from "react";
import Image from "next/image";

export default function LeadDataFeatures() {
  const features = [
    {
      title: "Pinpoint-accurate contacts—no fillers, just your ideal leads",
      description:
        "Stop wasting time marketing to the masses. Start with search-based intent and send your marketing campaigns into overdrive.",
      points: [
        {
          title: "You're flying blind",
          description:
            "Stop guessing who’s actually in the market for your service—wasting ad dollars on people who may never buy.",
        },
        {
          title: "You're targeting too late",
          description:
            "By the time you reach most prospects with traditional marketing, they’ve already chosen a competitor. Search ID reaches them while searching.",
        },
        {
          title: "You're paying for noise, not intent",
          description:
            "Most platforms charge you to reach broad audiences. Without Search ID, you’re paying for impressions—not buyers.",
        },
      ],
      image: "/illustrations/Capture-Leads.png",
    },
    {
      title: "Get data instantly—skip the scraping, save time",
      description:
        "No more waiting for lead lists or scraping tools. With Search ID, your leads are delivered in real time.",
      points: [
        {
          title: "No Third-Party Delays",
          description:
            "Our proprietary system delivers data securely and instantly—without bottlenecks.",
        },
        {
          title: "Built for Speed",
          description:
            "Whether expanding or managing high volume, the infrastructure is optimized for real-time performance.",
        },
        {
          title: "Smarter Outreach, Better Results",
          description:
            "Cleaner, more relevant data means higher conversions with less effort.",
        },
      ],
      image: "/illustrations/white-labeled.png",
    },
    {
      title: "100% legally obtained data that is ready to use",
      description:
        "All data is ethically sourced and adheres to global privacy standards.",
      points: [
        {
          title: "Enterprise-Grade Security",
          description:
            "Data is encrypted, securely stored, and access-controlled for maximum safety.",
        },
        {
          title: "Ethically Sourced Data",
          description:
            "Collected through consent-based and privacy-compliant methods that meet global regulations.",
        },
        {
          title: "Peace of Mind",
          description:
            "Use the data confidently across outreach, remarketing, and analytics.",
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

              {/* BULLETS */}
              <ul className="space-y-5 mt-4">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#a53000] text-lg mt-1">•</span>
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
