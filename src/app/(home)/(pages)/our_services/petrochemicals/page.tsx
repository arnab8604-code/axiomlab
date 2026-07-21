"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const services = [
  {
  title: "Occupational/Chemical Exposure Monitoring",
  description: `Occupational/Chemical Exposure Monitoring is defined as the “anticipation, recognition, evaluation & control of workplace hazards”.  It ensures the employees/workers exposure to airborne organic and inorganic compounds such as metallic dusts, chemical fumes, vapours & toxic gases are within their permissible limits to create a safe workplace environment.`,
},
  {
    title: "Tank Cleaning Inspection & Testing (including Clearance Survey)",
    description:`Tank cleaning is the process of removing hydrocarbon vapors, liquids, or residues from cargo tanks onboard a tanker. Tank cleaning may be required for one or more of the following reasons: To gas-free tanks for internal inspections, repairs, or before entering the dry dock and to remove sediments from tank top plating. Inspection and testing is required for clearance certification to ensure cleanliness specification/requirement. `,
  },
];

export default function ManufacturingIndustryPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-[#D8E6EE] pb-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-12">

          <h1 className="mb-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Petrochemicals
          </h1>

          <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Industry description
          </span>

          <p className="mt-6 text-lg leading-8 text-slate-800">
            Axiom Laboratory is a preferred partner for the petrochemicals industry, providing specialized testing services covering air quality, emissions, and environmental impact assessments. Our consultancy services support the development and implementation of sustainable practices, ensuring regulatory compliance and environmental stewardship in the petrochemical sector.
          </p>
        </div>

        {/* Services */}
        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="mb-8 text-2xl font-bold text-slate-900">
            Services We Offer
          </h2>

          <div className="space-y-5">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="overflow-hidden rounded-2xl border border-slate-200 transition-all duration-300"
              >
                {/* Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between bg-white px-6 py-5 text-left transition hover:bg-sky-50"
                >
                  <span className="text-lg font-semibold text-slate-900">
                    {service.title}
                  </span>

                  <FaChevronDown
                    className={`text-sky-600 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Body */}
                <div
                  className={`grid transition-all duration-300 ${
                    openIndex === index
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-200 bg-slate-50 px-6 py-5">
                      <p className="leading-8 text-slate-600">
                        {service.description}
                      </p>

                      <Link href={{
                        pathname: "/enquiry",
                        query: {
                          industry: "Petrochemical Industry",
                          service: service.title,
                        },
                      }}className="mt-5 block w-30 text-center rounded-xl bg-green-700 px-2 py-3 font-semibold  text-white transition-all duration-300 hover:scale-[1.02] hover:bg-black">
                        Enquire
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}