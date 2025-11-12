"use client";

import { useState } from "react";
import { ShoppingCart, ChevronLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ShopPage() {
  const [cart, setCart] = useState<
    { id: string; name: string; price: number; quantity: number }[]
  >([]);
  const [notification, setNotification] = useState("");

  const products = [
    {
      id: "forest-honey",
      name: "Som Sattva Raw Forest Honey",
      price: 299,
      originalPrice: 449,
      description:
        "100% Pure, NMR Tested Raw Forest Honey. No additives, no heating, just nature's pure gift.",
      benefits: "NMR Tested, Raw & Unprocessed, Immune Boost, Energy Support",

      image: "/500 G Lifestyle 2.png",
      size: "500g",
      amazonLink:
        "https://www.amazon.in/Sattva-Forest-Honey-500gm-Tested/dp/B0FWJQSYF6",
      rating: 5,
      reviews: 1,
      discount: 33,
    },
    {
      id: "wildflower",
      name: "Som Sattva Wildflower Honey",
      price: 199,
      originalPrice: 299,
      description:
        "Rich blend from multiple wildflower sources, deep amber color with complex floral notes",
      benefits: "Antioxidants, Energy boost, Immune support, Raw goodness",
      image: "/250G Lifestyle 2.png",
      size: "250g",
      rating: 4.8,
      reviews: 42,
      discount: 33,
    },
    {
      id: "acacia",
      name: "Bulk Orders for Som Sattva Honey",
      price: " --",
      originalPrice: "",
      description:
        "Delicate and mild, never crystallizes. Perfect for daily use and kids",
      benefits: "Mild flavor, Long shelf life, Great for sensitive palates",
      image: "/bulk order.png",
      size: "500g",
      rating: "",
      reviews: "",
      discount: "",
      amazonLink: "#",
    },
  ];

  const addToCart = (product: (typeof products)[0]) => {
    if (typeof product.price !== "number") {
      console.warn("Product price is not a number, cannot add to cart:", product);
      setNotification("This item cannot be added to cart");
      setTimeout(() => setNotification(""), 3000);
      return;
    }

    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        },
      ]);
    }
    setNotification(`${product.name} added to cart!`);
    setTimeout(() => setNotification(""), 3000);
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert(
      `Order Total: ₹${totalPrice}\n\nItems: ${totalItems}\n\nProceeding to checkout...`
    );
  };

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
          <div className="flex items-center gap-2 justify-end">
            <ShoppingCart className="w-8 h-8 text-amber-900" />
            <div className="text-right">
              <p className="text-sm text-amber-700">
                Items in cart:- {" "}
                <span className="text-sm font-bold text-amber-900">
                  {" "}
                  {totalItems}
                </span>
              </p>
              <p className="text-sm "></p>
            </div>
          </div>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-amber-800 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          {notification}
        </div>
      )}

      {/* Shop Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-4">
            Shop Our Collection
          </h1>
          <p className="text-lg text-amber-700/60">
            Premium Som Sattva honey varieties for every need
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-amber-100"
            >
              <a
                href={product.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-64 overflow-hidden bg-amber-50 block cursor-pointer"
              >
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-amber-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  -{product.discount}%
                </div>
                {product.rating && (
                  <div className="absolute top-4 left-4 bg-white text-amber-800 px-3 py-1 rounded-full text-sm font-semibold">
                    ⭐ {product.rating}
                  </div>
                )}
              </a>

              <div className="p-6">
                <a
                  href={product.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold text-amber-900 mb-2 hover:text-amber-700 transition-colors cursor-pointer block"
                >
                  {product.name}
                </a>
                <p className="text-sm text-amber-700 mb-3">{product.size}</p>
                <p className="text-amber-900/70 mb-4 text-sm">
                  {product.description}
                </p>

                <div className="mb-4 flex items-center gap-2">
                  <span className="text-xs text-amber-700">
                    ({product.reviews} reviews)
                  </span>
                </div>

                <div className="mb-6 p-4 rounded-lg bg-amber-50 border border-amber-100">
                  <p className="text-xs font-semibold text-amber-900 mb-1">
                    Key Benefits:
                  </p>
                  <p className="text-xs text-amber-800">{product.benefits}</p>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-3xl font-bold text-amber-800">
                      ₹{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-amber-600 line-through ml-2">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {product.id === "acacia" ? (
                    <Link
                      href="/contact"
                      className="px-4 py-3 bg-amber-800 text-white rounded-lg font-semibold hover:bg-amber-900 transition-all shadow-md hover:shadow-lg text-center flex items-center justify-center gap-2"
                      title="Contact us for Bulk Orders"
                    >
                      Contact Us
                    </Link>
                  ) : (
                    <button
                      onClick={() => addToCart(product)}
                      className="px-4 py-3 bg-amber-800 text-white rounded-lg font-semibold hover:bg-amber-900 transition-all shadow-md hover:shadow-lg cursor-pointer"
                    >
                      Add to Cart
                    </button>
                  )}
                  <a
                    href={product.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 bg-amber-100 text-amber-900 rounded-lg font-semibold hover:bg-amber-200 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    title="Buy on Amazon"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Buy on Amazon
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        {totalItems > 0 && (
          <div className="bg-white rounded-2xl p-8 border border-amber-100 shadow-lg">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">
              Order Summary
            </h2>
            <div className="space-y-4 mb-6 pb-6 border-b border-amber-100">
              {cart.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center text-amber-900"
                >
                  <div>
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-sm text-amber-700 ml-2">
                      x{item.quantity}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-amber-600 hover:text-amber-900 transition-colors text-sm cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold text-amber-900">
                Total:
              </span>
              <span className="text-3xl font-bold text-amber-800">
                ₹{totalPrice.toLocaleString()}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full px-6 py-4 bg-amber-800 text-white rounded-lg font-semibold hover:bg-amber-900 transition-all shadow-md hover:shadow-lg text-lg cursor-pointer"
            >
              Proceed to Checkout
            </button>
          </div>
        )}

        {/* Empty Cart Message */}
        {totalItems === 0 && (
          <div className="text-center py-12">
            <ShoppingCart className="w-16 h-16 text-amber-300 mx-auto mb-4 opacity-50" />
            <p className="text-amber-900/60 text-lg">
              Your cart is empty. Add some honey to get started!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
