"use client";

import type React from "react";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Leaf,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

export default function FooterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-linear-to-b from-amber-50 to-amber-100 border-t border-amber-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 h-20 w-80">
              <img
                src="/trace.svg"
                alt="Som Sattva logo"
                width={40}
                height={40}
                className="h-20 w-20 object-contain"
              />
            </div>
            <p className="text-amber-800/70 my-2 text-sm leading-relaxed">
              Pure. Honest. Clean Nutrition. Bringing you food as nature
              intended.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/somsattva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 hover:text-amber-900 transition-colors cursor-pointer"
                title="Facebook"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/somsattva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 hover:text-amber-900 transition-colors cursor-pointer"
                title="Instagram"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.twitter.com/somsattva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 hover:text-amber-900 transition-colors cursor-pointer"
                title="Twitter"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@somsattva.com"
                className="text-amber-700 hover:text-amber-900 transition-colors cursor-pointer"
                title="Email"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-4 text-amber-900">Products</h4>
            <ul className="space-y-2 text-amber-800/70">
              <li>
                <a
                  href="https://www.amazon.in/Sattva-Forest-Honey-500gm-Tested/dp/B0FWJQSYF6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-900 transition-colors cursor-pointer flex items-center gap-1"
                >
                  Forest Honey <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="hover:text-amber-900 transition-colors cursor-pointer"
                >
                  Wildflower Honey
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="hover:text-amber-900 transition-colors cursor-pointer"
                >
                  Acacia Honey
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="hover:text-amber-900 transition-colors cursor-pointer"
                >
                  View All
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-amber-900">Company</h4>
            <ul className="space-y-2 text-amber-800/70">
              <li>
                <Link
                  href="/about"
                  className="hover:text-amber-900 transition-colors cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/Benefits"
                  className="hover:text-amber-900 transition-colors cursor-pointer"
                >
                  Benefits
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-amber-900 transition-colors cursor-pointer"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-amber-900 transition-colors cursor-pointer"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="hover:text-amber-900 transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4 text-amber-900">Newsletter</h4>
            <p className="text-amber-800/70 mb-4 text-sm">
              Subscribe for wellness tips and clean nutrition insights
            </p>
            {subscribed ? (
              <div className="p-3 bg-green-100 text-green-800 rounded-lg text-sm">
                Thanks for subscribing!
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-2 rounded-full bg-white text-amber-900 placeholder:text-amber-800/40 text-sm border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-700 cursor-text"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-800 text-white rounded-full hover:bg-amber-900 transition-colors cursor-pointer"
                >
                  <Mail className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-amber-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-amber-800/60 text-sm">
          <p>
            &copy; 2025 Som Sattva. All rights reserved. Crafted with purity and
            truth.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="hover:text-amber-900 transition-colors cursor-pointer"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-amber-900 transition-colors cursor-pointer"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
