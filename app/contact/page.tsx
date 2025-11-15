"use client";

import type React from "react";

import Header from "@/components/header";
import FooterSection from "@/components/footer-section";
import Link from "next/link";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    alternatePhone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          message: "",
          phone: "",
          alternatePhone: "",
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        console.error("Failed to submit contact form");
      }
    } catch (error) {
      console.error("Error submitting contact form", error);
    }
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="text-amber-700 hover:text-amber-900 font-medium mb-6 inline-flex items-center gap-2"
        >
          ← Back to Home
        </Link>

        <div className="mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-amber-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-amber-800/70">
            We'd love to hear from you. Reach out with any questions or
            feedback.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-amber-700 shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-1">Email</h3>
                <a
                  href="mailto:hello@somsattva.com"
                  className="text-amber-800/70 hover:text-amber-900"
                >
                  sales@somsattva.com
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-amber-700 shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-1">Phone</h3>
                <a
                  href="tel:+1234567890"
                  className="text-amber-800/70 hover:text-amber-900"
                >
                  +91 8770986085
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-amber-700 shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-1">Address</h3>
                <p className="text-amber-800/70">
                  The House of Vrindavan, Durga Petals, Doddanekundi 560037
                  Bengaluru
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-amber-50 rounded-2xl p-8 border border-amber-100"
            >
              {submitted && (
                <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg border border-green-200">
                  Thank you! We'll get back to you soon.
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-amber-900 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-white border border-amber-200 text-amber-900 placeholder:text-amber-800/40 focus:outline-none focus:ring-2 focus:ring-amber-700"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-amber-900 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-white border border-amber-200 text-amber-900 placeholder:text-amber-800/40 focus:outline-none focus:ring-2 focus:ring-amber-700"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-amber-900 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-white border border-amber-200 text-amber-900 placeholder:text-amber-800/40 focus:outline-none focus:ring-2 focus:ring-amber-700"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="alternatePhone"
                    className="block text-sm font-semibold text-amber-900 mb-2"
                  >
                    Alternate Phone Number
                  </label>
                  <input
                    id="alternatePhone"
                    type="tel"
                    value={formData.alternatePhone || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        alternatePhone: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-white border border-amber-200 text-amber-900 placeholder:text-amber-800/40 focus:outline-none focus:ring-2 focus:ring-amber-700"
                    placeholder="Alternate phone number (optional)"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-amber-900 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-white border border-amber-200 text-amber-900 placeholder:text-amber-800/40 focus:outline-none focus:ring-2 focus:ring-amber-700 resize-none"
                    placeholder="Your message..."
                    rows={5}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-amber-800 text-white rounded-lg font-semibold hover:bg-amber-900 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
