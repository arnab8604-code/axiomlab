import type { Product } from "@/types/products";

export const products: Product[] = [
  {
    id: 1,
    name: "Gas Analyzer X",
    category: "Gas Analyzer",
    description:`HALO-LED™ whole home in-duct air purifier to help protect your air conditioned space. It is zero ozone
certified and provides a longer product life with improved energy efficiency. Easily installed in new or existing air conditioning system ductwork. It reduces airborne bacteria, viruses, odors, mold and allergens ensuring excellent
indoor air quality.`,
price:300,
    image: "/products/gas.jpg",
  },
  {
    id: 2,
    name: "Air Sampler",
    category: "Environmental Testing & Sampling",
    description: "...",
    image: "/products/air.jpg",
    price:400,
  },
];