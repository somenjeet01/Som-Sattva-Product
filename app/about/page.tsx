import Header from "@/components/header"
import FooterSection from "@/components/footer-section"
import Link from "next/link"
import { Leaf, Award, Heart, Droplet } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-24">
        {/* Hero Section */}
        <div className="mb-24">
          <Link
            href="/"
            className="text-amber-700 hover:text-amber-900 font-medium mb-6 inline-flex items-center gap-2"
          >
            ← Back to Home
          </Link>
          <h1 className="text-5xl lg:text-6xl font-bold text-amber-900 mb-6 text-balance">About Som Sattva</h1>
          <p className="text-xl text-amber-800/70 max-w-3xl leading-relaxed">
            For over 25 years, Som Sattva has been dedicated to bringing you the purest, most authentic honey from
            nature's most trusted sources. We believe in the power of natural wellness and the importance of honest,
            clean nutrition.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Our Story</h2>
            <p className="text-amber-800/70 mb-4 leading-relaxed">
              Som Sattva began with a simple vision: to reconnect people with nature's purest gifts. Our founder, deeply
              passionate about traditional beekeeping methods and ancient wellness practices, set out to create a honey
              brand that honors both tradition and quality.
            </p>
            <p className="text-amber-800/70 leading-relaxed">
              Today, we work with ethical beekeepers across the globe to source the finest honey varieties. Every jar
              represents our commitment to purity, sustainability, and your well-being.
            </p>
          </div>
          <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">Our Values</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Leaf className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-amber-900">Purity First</p>
                  <p className="text-sm text-amber-800/70">No additives, no shortcuts. Just pure honey.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Award className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-amber-900">Quality Standards</p>
                  <p className="text-sm text-amber-800/70">Rigorous testing and global certifications.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Heart className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-amber-900">Wellness Focus</p>
                  <p className="text-sm text-amber-800/70">Your health and happiness matter most.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Droplet className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-amber-900">Sustainability</p>
                  <p className="text-sm text-amber-800/70">Supporting bee ecosystems and beekeepers.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-24 text-center">
          <div className="p-6 bg-amber-50 rounded-xl border border-amber-100">
            <p className="text-4xl font-bold text-amber-800">25+</p>
            <p className="text-amber-800/70 mt-2">Years Heritage</p>
          </div>
          <div className="p-6 bg-amber-50 rounded-xl border border-amber-100">
            <p className="text-4xl font-bold text-amber-800">100K+</p>
            <p className="text-amber-800/70 mt-2">Happy Customers</p>
          </div>
          <div className="p-6 bg-amber-50 rounded-xl border border-amber-100">
            <p className="text-4xl font-bold text-amber-800">50+</p>
            <p className="text-amber-800/70 mt-2">Honey Varieties</p>
          </div>
          <div className="p-6 bg-amber-50 rounded-xl border border-amber-100">
            <p className="text-4xl font-bold text-amber-800">30+</p>
            <p className="text-amber-800/70 mt-2">Global Partners</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-amber-50 rounded-2xl p-12 border border-amber-100">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Experience Som Sattva</h2>
          <p className="text-amber-800/70 mb-8 max-w-2xl mx-auto">
            Discover why thousands of families trust Som Sattva for their daily wellness.
          </p>
          <Link
            href="/shop"
            className="inline-block px-8 py-3 bg-amber-800 text-white rounded-full font-semibold hover:bg-amber-900 transition-all shadow-md hover:shadow-lg"
          >
            Shop Now
          </Link>
        </div>
      </main>

      <FooterSection />
    </div>
  )
}
