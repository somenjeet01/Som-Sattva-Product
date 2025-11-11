"use client";

import { ChevronLeft, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function Gallery() {
  const images = [
    "/250 G -Natural BG.png",
    "/250 G -Plain.png",
    "/250G Lifestyle 2.png",
    "/250G Lifestyle.png",
    "/500 G Lifestyle 2.png",
    "/500 G Lifestyle 3.png",
    "/500 G Lifestyle 4 Natural.png",
    "/500 G Lifestyle.png",
    "/500 G-Plain.png",
    "/Som Sattva Honey 250g- Address.png",
    "/Som Sattva Honey 250g- Nutrient Value.png",
    "/Som Sattva Honey 500g- Address.png",
    "/Som Sattva Honey 500g- Nutrient Value.png",
    "/Som Sattva Honey-Benifits.jpeg",
    "/Som Sattva Honey-Differentiation.jpeg",
  ];

  return (
    <section className="pb-24 bg-background" id="gallery">
      <div className="sticky top-0 z-50 bg-white border-b border-amber-100 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
          <a
            href="/"
            className="flex items-center gap-2 text-amber-900 hover:text-amber-700 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="font-semibold">Back to Home</span>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Product Gallery
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Explore our premium collection through visuals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="group bg-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-accent/10 hover:border-accent/30"
            >
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
