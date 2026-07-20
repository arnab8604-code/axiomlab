"use client";

import { usePathname } from "next/navigation";

const pageContent = {
  about: {
    title: "About",
    highlight: "AXIOM laboratory",
  },

  careers: {
    title: "Careers",
    highlight: "We Provide",
  },

  our_products: {
    title: "Our Products",
    highlight: "Premium Solutions",
  },

  our_services: {
    title: "Our Services",
    highlight: "For Every Industry",
  },

  cart: {
    title: "Shopping Cart",
    highlight: "Your Selection",
  },
  news: {
    title: "News",
    highlight: " To keep you updated",
  },
};

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const slug = pathname.split("/")[1];

  const page =
    pageContent[slug as keyof typeof pageContent];

  return (
    <>
      {/* Page Header */}

      {page && (
        <section className="bg-[#D8E6EE] pt-30 pb-12 text-center">
          <div className="mx-auto max-w-6xl px-6">

            <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              {page.title}{" "}
              <span className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
                {page.highlight}
              </span>
            </h1>

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500" />

          </div>
        </section>
      )}

      {children}
    </>
  );
}