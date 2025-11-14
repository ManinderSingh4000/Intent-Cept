
import React from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import PricingHero from "../components/PricingHero";
import PricingPlans from "../components/PricingPlans";
import PricingFAQ from "../pricing/FAQPricing"; // reuse
import Integrations from "../components/Integrations";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import IntegrationsGrid from "../components/IntegrationsGrid";
import Services from "../components/Services";

export const metadata = {
  title: "Pricing | IntentCept",
  description:
    "Choose the perfect IntentCept plan to scale your agency with unlimited leads, automation, and integrations.",
  keywords: [
    "IntentCept Pricing",
    "Lead Generation Pricing",
    "Marketing Automation Plans",
    "AI Sales Platform",
    "Agency Growth Tools",
  ],
  openGraph: {
    title: "IntentCept Pricing",
    description:
      "Find the right IntentCept plan to grow your agency — transparent pricing for every stage.",
    url: "https://intentcept.vercel.app/pricing",
    images: ["/og-image.png"],
  },
};


export default function PricingPage() {
  return (
    <div  className="pricing">
        <Header />
        <div className="bg-white"> 
            <PricingHero/>
        </div> 
        <Integrations/>

        <PricingPlans />
        <HowItWorks/>
        <WhyChooseUs/>
        <IntegrationsGrid/>   
        <Services/>     
        <PricingFAQ />
      
      <Footer />
    </div>
  );
}
