"use client";

import { Menu, ShoppingCart, Leaf, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-amber-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center" onClick={handleLinkClick}>
          <Image
            src={"/trace.svg"}
            alt="Som Sattva logo"
            width={60}
            height={60}
            className="h-16 w-16 object-contain"
            priority
          />
          {/* <div>
            <h1 className="text-2xl font-serif font-bold text-amber-900">Som Sattva</h1>
            <p className="text-xs tracking-widest text-amber-700 font-medium">BE NATURAL</p>
          </div> */}
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/#products"
            className="text-amber-900/70 hover:text-amber-900 transition-colors font-medium text-sm"
          >
            Products
          </Link>
          <Link
            href="/#benefits"
            className="text-amber-900/70 hover:text-amber-900 transition-colors font-medium text-sm"
          >
            Benefits
          </Link>
          <Link
            href="/about"
            className="text-amber-900/70 hover:text-amber-900 transition-colors font-medium text-sm"
          >
            About us
          </Link>
          <Link
            href="/contact"
            className="text-amber-900/70 hover:text-amber-900 transition-colors font-medium text-sm"
          >
            Contact
          </Link>
          <Link
            href="/gallery"
            className="text-amber-900/70 hover:text-amber-900 transition-colors font-medium text-sm"
          >
            Gallery
          </Link>
        </nav>

        {/* CTA & Cart - Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/shop"
            className="p-2 hover:bg-amber-50 rounded-lg transition-colors"
            title="Shopping Cart"
          ></Link>
          <Link
            href="/shop"
            className="px-6 py-2.5 bg-amber-800 text-white rounded-full font-semibold hover:bg-amber-900 transition-all shadow-md hover:shadow-lg"
          >
            Shop Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-amber-50 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-amber-900" />
          ) : (
            <Menu className="w-6 h-6 text-amber-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-amber-100 bg-white">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            <Link
              href="/#products"
              className="text-amber-900/70 hover:text-amber-900 transition-colors font-medium"
              onClick={handleLinkClick}
            >
              Products
            </Link>
            <Link
              href="/#benefits"
              className="text-amber-900/70 hover:text-amber-900 transition-colors font-medium"
              onClick={handleLinkClick}
            >
              Benefits
            </Link>
            <Link
              href="/about"
              className="text-amber-900/70 hover:text-amber-900 transition-colors font-medium"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-amber-900/70 hover:text-amber-900 transition-colors font-medium"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
            <Link
              href="/gallery"
              className="text-amber-900/70 hover:text-amber-900 transition-colors font-medium"
              onClick={handleLinkClick}
            >
              Gallery
            </Link>
            <Link
              href="/shop"
              className="w-full mt-2 px-6 py-2.5 bg-amber-800 text-white rounded-full font-semibold hover:bg-amber-900 transition-all text-center"
              onClick={handleLinkClick}
            >
              Shop Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
