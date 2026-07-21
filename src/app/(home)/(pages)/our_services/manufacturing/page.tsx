"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { setEnquiry } from "@/redux/features/enquireSlice";

const services = [
  {
    title: "Indoor Air Quality Assessment",
    description: `
IAQ is defined as the "freshness" and "cleanliness" of the air quality within and around buildings and structures. This is of paramount importance as it relates to the health and comfort of the occupants of such buildings and structures.

The IAQ can be affected by gases such as carbon monoxide, carbon dioxide, radon, ozone, and volatile organic compounds, as well as by particulates and microbial contaminants (mold and bacteria). Such substances, chemicals, or any other mass or energy stressor have the potential to induce adverse health conditions and "Sick Building Syndrome (SBS)."

Through IAQ assessments, we can quantitatively determine the type of air pollutants and provide recommendations and remediation solutions.

Over the last two decades, Leadership in Energy and Environmental Design (LEED) green building programs and Well Building Standard Certification (WELL) have risen in popularity due to their focus on sustainable living.

It is imperative that the environments we live and work in are designed to support our comfort, health, and wellbeing without compromising environmental sustainability.

At Axiom Laboratory, our qualified specialists provide internationally recognized assessment plans and practical solutions to ensure that your premises meet global sustainability and indoor environmental quality standards.
  `,
  },
  {
    title: "Compressed Dry Air Quality",
    description: `Compressed Dry Air Quality test can be performed for solid particles, pressure dewpoint and oil mist with reference to ISO 8573-1:2010 Classes 1 to 5.  In addition, Breathing Air Quality test can be performed for oxygen, hydrocarbon, carbon monoxide, carbon dioxide and odour with reference to OSHA 29 CFR 1910.134 Grade D ANSI/CGA G-7.1-2004. `,
  },
];

export default function ManufacturingIndustryPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-[#D8E6EE] pb-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-12">

          <h1 className="mb-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Manufacturing
          </h1>

          <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Industry description
          </span>

          <p className="mt-6 text-lg leading-8 text-slate-800">
            Axiom Laboratory is a trusted partner for the manufacturing
            industry, providing comprehensive environmental testing and
            consultancy services. Our solutions help manufacturing facilities
            ensure regulatory compliance, improve operational efficiency, and
            promote sustainable environmental practices.
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

                      <button
                        onClick={() => {
                          dispatch(
                            setEnquiry({
                              industry: "Manufacturing Industry",
                              service: service.title,
                            })
                          );

                          router.push("/enquiry");
                        }}
                        className="mt-5 block w-30 rounded-xl bg-green-700 px-2 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-black"
                      >
                        Enquire
                      </button>
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