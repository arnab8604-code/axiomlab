"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { setEnquiry } from "@/redux/features/enquireSlice";

const services = [
  {
    title: "Source Emission Monitoring / Ambient Air Quality Monitoring",
    description: `
All testings shall be performed in compliance with the rules and regulations set forth by the Singapore’s National Environment Agency (NEA) - Environmental Protection and Management Act, 2008 “Environmental Protection and Management (Air Impurities) (Amendment) Regulations 2015”, and also reference to “Special Emission Standards for Waste Incinerators” and or any other requirements necessary for a complete compliance as required by the Singapore government.

Destruction Efficiency (DE) is defined as the percentage of Principal Organic Hazardous Constituent (POHC) ie. pollutant indicator destroyed or irreversibly transformed by a particular method or technology and shall meet the NEA’s DRE guidelines of 99.9999%. 
Destruction Removal Efficiency (DRE) only considers emissions to air and is the percentage of original POHC irreversibly transformed and removed from gaseous emissions and shall meet the NEA’s DE guidelines of 99.999%. 
 

Hence, the difference lies in the fact that DE considers all residual POHC that remains after the incineration process while DRE only involves measuring the residual POHC found in the flue gas from the discharge stack after the air pollution control equipment. The formulae for calculating DE and DRE are as follows:
 

DE = (POHC content within waste – POHC content within gas, liquid and solid residual) / POHC content within the waste.
 

DRE = (POHC content within waste – POHC content within gas residual) / POHC content within the waste.

The main sources of air pollution in Singapore are emissions from the industries and motor vehicles. From time to time, transboundary smoke haze from land and forest fires in the region also affect Singapore’s air quality, particularly during the Southwest and Northeast monsoon periods.

As international air quality benchmarks such as the World Health Organisation Air Quality Guidelines (WHO AQGs) are constantly reviewed, NEA established the Advisory Committee on Ambient Air Quality in July 2010 to recommend air quality targets for Singapore.  Axiomlab are able to offer ambient air quality monitoring and assessment to meet these requirements to support process industries, initial plants set up baseline ambient air quality studies, etc.
  `,
  },
  {
    title: "Asbestos Survey & Testing (including Asbestos Demolition Clearance Survey)",
    description: `Under the SOLAS II-1, Regulation 3-5 & MSC.1/Circ.1379, wef 1 January 2011, for all ships, new installation of materials which contain asbestos shall be prohibited. There is also restriction and banned on use of asbestos containing materials worldwide.  Our laboratory have recognised & competent specialists (USEPA, BOHS, NATA & MOM) and equipment resources (PLM, PCM & TEM) to conduct asbestos survey, testing, audit and consultancy.`,
  },
  {
    title: "Greenhouse Gas (GHG) Emissions & DRE of PFCs Testing for Carbon Taxation",
    description: `Axiom Laboratory is the first lab in Singapore to carry out GHG emissions testing for the wafer fab, petroleum and petrochemical, and marine industries. This is in relation to the series of laws that the government of Singapore has introduced to comply with international global warming and climate change guidelines. 

The Carbon Pricing Act (CPA) and its regulations came into operation on the 1st of January 2019. The Measurement, Reporting and Verification (MRV) requirements are specified in the Carbon Pricing Regulations 2018 (under the section on MRV). Under this Act, the responsibility rests with any industrial facility that emits direct GHGs equal to or above 2,000 tCO2e annually to register as a reportable facility and to submit an Emissions Report annually. 

As such, in compliance with the aforementioned regulations, clients are able to engage us to quantify the amount of GHGs emitted and our team of environmental specialists then provide detailed remediation measures that clients can implement in line with the regulations. 

Destruction Efficiency (DE) is defined as the percentage of Principal Organic Hazardous Constituent (POHC) destroyed or irreversibly transformed by a particular method or technology and shall meet the NEA’s DRE guidelines of 99.9999%.

Perfluorocarbons (PFCs) are a common GHG emitted by the wafer fab industry during their production processes. As such, we have worked in tandem with them to monitor the destruction and removal (DRE) efficiency of the PFCs emitted via the use of state-of-the-art technologies, and also provide comprehensive remediation solutions for our clients. 

Axiom Laboratory provides these services as our flagship services, and we are one of the market leaders in the industry for the aforementioned.`,
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
            Government
          </h1>

          <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Industry description
          </span>

          <p className="mt-6 text-lg leading-8 text-slate-800">
            Axiom Laboratory collaborates with government entities, offering a range of environmental testing and consultancy services. We assist government agencies in addressing environmental challenges, ensuring compliance with regulatory standards, and making informed decisions for sustainable development. Our commitment is to contribute to creating a cleaner and healthier environment through our expertise and partnership with government initiatives.
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