"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const services = [
  {
  title: "Occupational Noise Mapping & Dosimetry Noise Exposure Monitoring / Boundary Noise Monitoring (for Process Plant)",
  description: `Occupational noise mapping and dosimetry noise exposure monitoring ascertain the noise exposure level which an employee encounters at workplace environment.  In compliance with the relevant regulatory, our noise specialists are able to conduct noise testing, inclusive of noise hazard assessment by qualitative & quantitative methods, thereby able to provide practical control measures.`,
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
            Oil & Gas
          </h1>

          <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Industry description
          </span>

          <p className="mt-6 text-lg leading-8 text-slate-800">
            Axiom Laboratory plays a crucial role in the oil and gas industry, offering tailored environmental testing and assessment services. We assist in monitoring and controlling greenhouse gas emissions, ensuring operational efficiency, and promoting environmentally responsible practices. Our expertise helps oil and gas companies meet regulatory standards while contributing to the industry's sustainable future.
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

                      <Link href="/our_services/service_enquiry" className=" block w-25 flex justify-center mt-10 rounded-xl bg-sky-600 px-5 py-3 font-medium text-white transition hover:bg-sky-700">
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