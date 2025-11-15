"use client";
import { ArrowRight, Leaf } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-secondary to-background flex items-center justify-center">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 flex flex-col lg:flex-row items-center gap-12">
        {/* Left content */}
        <div className="flex-1 flex flex-col gap-8">
          <div>
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center gap-2">
              <p className="text-sm text-xs font-semibold text-amber-900 mb-1">
              <Leaf className="w-4 h-4 inline-block mr-1" /> Pure. Honest. Clean Nutrition
              </p>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              <span className="text-primary">Som Sattva</span> Nature's Perfect
              Gift
            </h1>
            <p className="text-xl text-foreground/70 mt-6 max-w-xl leading-relaxed">
              Choose authenticity. Choose wellness. Som Sattva raw forest honey
              is NMR tested, 100% pure, and crafted by nature. Trusted by
              thousands of families worldwide.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/shop"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              Shop Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://www.amazon.in/Sattva-Forest-Honey-500gm-Tested/dp/B0FWJQSYF6"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-secondary/30 text-foreground text-center rounded-lg font-semibold hover:bg-secondary/50 transition-colors backdrop-blur-sm border border-accent/20"
            >
              Buy on Amazon
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-8 border-t border-accent/20">
            <div>
              <p className="text-3xl font-bold text-primary">8+</p>
              <p className="text-sm text-foreground/60 mt-1">Years Heritage</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">10K+</p>
              <p className="text-sm text-foreground/60 mt-1">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">NMR</p>
              <p className="text-sm text-foreground/60 mt-1">Lab Tested Pure</p>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
            <img
              src="/250 G -Natural BG.png"
              alt="Som Sattva Premium Raw Forest Honey"
              className="relative w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
