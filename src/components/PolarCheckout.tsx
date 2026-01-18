"use client";

import { useEffect } from "react";
import { PolarEmbedCheckout } from "@polar-sh/checkout/embed";

const CHECKOUT_LINK =
  process.env.NEXT_PUBLIC_POLAR_CHECKOUT_LINK ||
  "https://buy.polar.sh/polar_cl_O6qwqlyebCVmHQ791YQv686eVlWzxxmGAc3Gc2JNYQ";

export default function PolarCheckout() {
  useEffect(() => {
    PolarEmbedCheckout.init();
  }, []);

  return (
    <a
      href={CHECKOUT_LINK}
      data-polar-checkout
      data-polar-checkout-theme="dark"
      className="group relative block w-full py-3.5 rounded-xl font-semibold text-center overflow-hidden transition-all hover:scale-[1.02] cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-accent-orange to-accent-orange/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-accent-orange via-accent-green to-accent-orange opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="relative text-white flex items-center justify-center gap-2">
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        Buy Now — $4.99
      </span>
    </a>
  );
}
