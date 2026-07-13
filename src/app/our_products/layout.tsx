import { ReactNode } from "react";
import ProductHeader from "@/components/products/product-header";

export default function ServicesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#D8E6EE]">
      <ProductHeader/>
      <main>{children}</main>
    </div>
  );
}