"use client";

import { useState } from "react";
import { ShoppingCart, ChevronLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ShopPage() {
  const products = [
    {
      name: "Raw Honey 500g",
      description:
        "Rich blend from multiple wildflower sources, deep amber color",
      benefits: "Antioxidants, Energy boost, Immune support",
      image: "/500 G Lifestyle 2.png",
      amazonLink:
        "https://www.amazon.in/Sattva-Forest-Honey-500gm-Tested/dp/B0FWJQSYF6",
      price: "₹299",
      originalPrice: "₹449",
      discount: "33%",
      rating: 4.8,
      reviews: 42,
    },
    {
      name: "Raw Forest Honey 250g",
      description: "NMR Tested, 100% Pure Raw Forest Honey with no additives",
      benefits: "Immune boost, Energy support, Natural wellness",
      image: "/250G Lifestyle 2.png",
      amazonLink:
        "https://www.amazon.in/Sattva-Forest-Honey-250gm-Tested/dp/B0FWJQSYF6",
      price: "₹199",
      originalPrice: "₹299",
      discount: "33%",
      rating: 5.0,
      reviews: 1,
    },
    {
      name: "Bulk Orders",
      description: "For bulk orders, please contact us for inquiries.",
      benefits: "Custom packaging, Wholesale pricing, Premium quality",
      image: "/Bulk order.png", // Stock image
      amazonLink: "#", // No Amazon link
      price: "Contact us",
      originalPrice: "",
      discount: "",
      rating: "",
      reviews: "",
    },
  ];
  const [totalItems, setTotalItems] = useState(0); // Example state for cart items

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header with Back Button */}
      <div className="sticky top-0 z-40 bg-white border-b border-amber-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-amber-900 hover:text-amber-700 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="font-semibold">Back to Home</span>
          </Link>
        </div>
      </div>

      <section className="py-24 bg-background" id="products">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Our Premium Collection
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Handpicked Som Sattva varieties sourced from the finest apiaries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="group bg-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-accent/10 hover:border-accent/30"
              >
                <a
                  href={product.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mb-6 overflow-hidden rounded-xl h-64 block cursor-pointer"
                >
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.discount && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                      -{product.discount}
                    </div>
                  )}
                </a>

                <a
                  href={product.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold text-foreground mb-2 hover:text-primary transition-colors cursor-pointer block"
                >
                  {product.name}
                </a>
                <p className="text-foreground/60 mb-4">{product.description}</p>

                <div className="mb-4 flex items-center justify-between">
                  {/* <div className="flex items-center gap-2">
                  {product.rating && (
                    <span className="text-sm font-semibold text-primary">
                      ⭐ {product.rating}
                    </span>
                  )}
                  {product.reviews && (
                    <span className="text-xs text-foreground/50">
                      ({product.reviews} reviews)
                    </span>
                  )}
                </div> */}
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm line-through text-foreground/50 ml-2">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {product.benefits && (
                  <div className="mb-6 p-4 rounded-lg bg-secondary/20 backdrop-blur-sm">
                    <p className="text-sm font-semibold text-ring mb-1">
                      Key Benefits:
                    </p>
                    <p className="text-sm text-foreground/70">
                      {product.benefits}
                    </p>
                  </div>
                )}

                <div className="flex gap-3">
                  {product.name === "Bulk Orders" ? (
                    <Link
                      href="/contact"
                      className="flex-1 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-center flex items-center justify-center gap-2"
                      title="Contact us for Bulk Orders"
                    >
                      Contact Us
                    </Link>
                  ) : (
                    <a
                      href={product.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-center flex items-center justify-center gap-2"
                      title="Buy from Amazon"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Buy from Amazon
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
