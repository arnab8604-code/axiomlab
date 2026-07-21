"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { setEnquiry } from "@/redux/features/enquireSlice";

const services = [
  {
    title: "Noise & Vibration Testing (for Ship & Offshore Rig/Platform)",
    description: `
The IMO Resolution A.468 (XII) Code on Noise Level onboard Ships sets the allowable limit for noise level onboard the ship for the workplace safety & health of the working personnel.        Our noise & vibration testing covers the machinery, engines and surrounding workplace noise and vibration levels, which also include the integrity testing for the existing sound proof insulation materials.`,
  },
  {
    title: "Emission Monitoring IMO MARPOL 73/78 Annex VI (Ship)",
    description: `The IMO Revised MARPOL 73/78 Annex VI - Regulations for the Prevention of Air Pollution from Ships (2010), applies to all ship operators, fixed and floating offshore drilling rigs,               oil exploration and production platforms. The most important emission gases from ships and offshore units are sulphur oxides (SOx) and nitrogen oxides (NOx). In addition to NOx and SOx, offshore rig operators are required to monitor carbon monoxide (CO) and unburned hydrocarbon (HC) emissions for Integrated Pollution Prevention and Control. The penalties for non-compliance are potentially huge. We provide in-house expertise to perform emissions monitoring for improving efficiency and to ensure compliance to these regulations.`,
  },
  {
    title: "Inventory of Hazardous Materials Assessment (IHM)",
    description: `Following the Hong Kong International Convention for the Safe and Environmentally Sound Recycling of Ships (2009) & the EU Regulation on Ship Recycling (2013), many ship owners require the service of IHM as a formal listing of all the hazardous materials onboard the ship which aids in hazard management. It applies to ships of at least 500gt flagged of an EU member state, and any ships visiting the EU. Non-EU flagged ships of ≥ 500gt that are in commercial service are compulsory to comply with regulation regardless of new builds or existing ships by 31 December 2020. Our “HazMat” experts are well trained to perform IHM assessment onboard the ship with the backing of local and global accredited testing laboratory for hazardous materials. New ship buildings will need an IHM not later than               31 December 2018, whereas ships going for recycling will need an IHM as soon as any EU List is published, tentatively after 31 December 2016.`,
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
            Marine
          </h1>

          <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Industry description
          </span>

          <p className="mt-6 text-lg leading-8 text-slate-800">
            As a leading environmental testing and consultancy firm, Axiom Laboratory supports the marine industry by offering specialized services. We assess emissions, pollutants, and environmental impact associated with maritime activities. Our solutions assist marine companies in navigating regulatory requirements, fostering responsible practices, and contributing to a cleaner and more sustainable marine ecosystem.
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