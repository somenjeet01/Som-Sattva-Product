"use client";

import { Leaf, Droplet, Award, Heart, Check, Shield } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Leaf,
      title: "Pure & Organic",
      description:
        "NMR Tested - No additives, no processing. Just pure raw forest honey straight from the hive.",
    },
    {
      icon: Droplet,
      title: "Raw & Unfiltered",
      description:
        "Retains all natural enzymes and nutrients — pure raw forest honey packed with maximum health benefits.",
    },
    {
      icon: Award,
      title: "Award Winning Quality",
      description:
        "5-star rated on Amazon. Recognized globally for quality and purity. Trusted by wellness experts.",
    },
    {
      icon: Heart,
      title: "Health Benefits",
      description:
        "Natural energy, immune support, and ancient wellness properties. Perfect for daily wellness.",
    },
    {
      icon: Check,
      title: "Amazon Certified",
      description:
        "Amazon Delivered with secure transaction and Prime benefits. Verified quality and authenticity.",
    },
    {
      icon: Shield,
      title: "Non-Returnable Quality",
      description:
        "Non-returnable due to product nature. Free delivery on first order. Pay on Delivery available.",
    },
  ];

  return (
    <section className="py-24 bg-secondary/10" id="benefits">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Choose Som Sattva
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Combining traditional honey harvesting with modern quality
            standards. NMR Tested & Amazon Verified
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-card border border-accent/10 hover:border-accent/30 transition-all hover:shadow-lg hover:scale-105 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-card rounded-2xl border border-accent/20 p-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Som Sattva Forest Honey Specifications
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">
                Key Features
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-foreground/80">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>Raw Forest Honey - 500gm</span>
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>NMR Tested for Purity</span>
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>No Additives or Processing</span>
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span>5-Star Amazon Rating</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">
                Special Offer
              </h4>
              <div className="space-y-4">
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="text-sm text-foreground/60 mb-1">
                    Limited Time Price
                  </p>
                  <p className="text-3xl font-bold text-primary">₹299</p>
                  <p className="text-sm line-through text-foreground/40 mt-1">
                    Original Price ₹449
                  </p>
                  <p className="text-sm font-semibold text-primary mt-2">
                    33% Discount
                  </p>
                </div>
                <a
                  href="https://www.amazon.in/Sattva-Forest-Honey-500gm-Tested/dp/B0FWJQSYF6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg text-center transition-all hover:shadow-lg"
                >
                  Buy Now on Amazon
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
