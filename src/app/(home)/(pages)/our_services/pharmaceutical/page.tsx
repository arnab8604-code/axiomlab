"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const services = [
  {
    title: "Microbial Contamination Survey & Remediation",
    description: `Microbes; pathogenic bacteria, fungi (mould, mildew) & virus causes materials contamination & health issues. They impair our health and create allergic symptoms like coughing, sneezing, headache, itchy eyes, skin irritation, asthmatic effects and even pathogenic diseases like legionnaire disease, bronchopneumonia, respiratory infection and bronchitis.  We are capable of providing a one-stop solution to our clients through sampling, microbial analysis and bio-decontamination services.`,
  },
  {
    title: "Environmental Baseline Study (EBS) and Pollution Control Study (PCS)",
    description: `Axiomlab will involve as Environmental Coordinator for the entire EBS / PCS project and lead by experienced environmentalists with strong support between our Environmental Services and Laboratory Testing Divisions within the company.

We are able to provide a comprehensive package price for JTC’s Guideline on Environmental Baseline Study (2015 Edition) as well as testing and assessment based on their respective Chemicals Compound Target and Intervention Values of Dutch Standards 2000.  Laboratory analysis shall be performed with reference to generally accepted international standards such as the USEPA SW-846 “Test Methods for Evaluating Solid Wastes, Physical/Chemical Methods”, 3rd Edition, November 1990;  EPA-600/4-79-020 “Methods for Chemical Analysis of Water and Wastes”, revised March 1983 (ie. for soil and groundwater samples), and the American Public Health Association (APHA) “Standard Methods for Examination of Water and Wastewater”, 23rd Edition, 2017 (ie. for groundwater samples).

 

In the case where a suspiciously high contamination levels occurred, Axiomlab will report such occurrence to the client prior to confirmation of actual sampling depth and further investigation could be identified as detailed study.  `,
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
            Pharmaceuticals
          </h1>

          <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Industry description
          </span>

          <p className="mt-6 text-lg leading-8 text-slate-800">
            In the realm of chemicals and pharmaceuticals, Axiom Laboratory offers expertise in environmental testing and consultancy. Our services encompass air quality assessments, emissions testing, and comprehensive environmental impact assessments. We collaborate with companies in these industries to promote sustainability, regulatory compliance, and responsible environmental practices.
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
                    className={`text-sky-600 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* Body */}
                <div
                  className={`grid transition-all duration-300 ${openIndex === index
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
                          industry: "Pharmaceutical Industry",
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