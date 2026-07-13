import { ReactNode } from "react";
import CareerHeader from "@/components/careers/career-header";

export default function ServicesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#D8E6EE]">
      <CareerHeader/>
      <main>{children}</main>
    </div>
  );
}