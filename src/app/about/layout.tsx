import { ReactNode } from "react";
import AboutHeader from "@/components/about/about-header";

export default function ServicesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#D8E6EE]">
      <AboutHeader/>
      <main>{children}</main>
    </div>
  );
}