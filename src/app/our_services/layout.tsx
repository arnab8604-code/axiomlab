import { ReactNode } from "react";
import ServiceHeader from "@/components/service-header";

export default function ServicesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#D8E6EE]">
      <ServiceHeader/>
      <main>{children}</main>
    </div>
  );
}