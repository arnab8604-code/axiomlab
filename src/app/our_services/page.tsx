"use client";

import Link from "next/link";
import {
  FaIndustry,
  FaShip,
  FaFlask,
  FaBuilding,
} from "react-icons/fa";
import { GiOilDrum } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";
import { IconType } from "react-icons";

interface Service {
  title: string;
  description: string;
  href: string;
  icon: IconType;
}

const services: Service[] = [
  {
    title: "Manufacturing Industry",
    description:
      "Environmental testing and compliance solutions for manufacturing facilities.",
    href: "/our_services/manufacturing",
    icon: FaIndustry,
  },
  {
    title: "Marine Industry",
    description:
      "Inspection, sampling and environmental monitoring for marine operations.",
    href: "/our_services/marine",
    icon: FaShip,
  },
  {
    title: "Oil & Gas Industry",
    description:
      "Air, water and environmental assessment for oil & gas facilities.",
    href: "/our_services/oil-gas",
    icon: GiOilDrum,
  },
  {
    title: "Petrochemicals",
    description:
      "Testing and consultancy services for petrochemical industries.",
    href: "/our_services/petrochemicals",
    icon: FaFlask,
  },
  {
    title: "Chemicals & Pharmaceutical",
    description:
      "Laboratory testing and quality assurance for chemical industries.",
    href: "/our_services/pharmaceutical",
    icon: FaFlask,
  },
  {
    title: "Government",
    description:
      "Reliable environmental assessments and consultancy for government agencies.",
    href: "/our_services/government",
    icon: FaBuilding,
  },
];

const Services = () => {
  return (
   <section className="relative bg-[#D8E6EE] pb-28 pt-5 overflow-hidden">

      <div className="mx-auto max-w-7xl px-6">

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
            <Link
  key={service.title}
  href={service.href}
 className="
group
relative
ease-out
hover:-translate-y-3
hover:scale-[1.03]
overflow-hidden
rounded-[30px]
border
border-slate-400
bg-[#EAF2F8]
p-8
shadow-2xl
transition-all
duration-300
"
>
  {/* Icon */}

  <div
    className="
      flex
      h-16
      w-16
      items-center
      justify-center
      rounded-2xl
      bg-gradient-to-br
      from-sky-500
      via-cyan-500
      to-emerald-500
      text-3xl
      text-white
    "
  >
    <Icon />
  </div>

  {/* Title */}

  <h3 className="mt-8 text-2xl font-bold text-slate-900">
    {service.title}
  </h3>

  {/* Description */}

  <p className="mt-4 flex-grow leading-7 text-slate-600">
    {service.description}
  </p>

  {/* CTA */}

  <div className="mt-8 flex items-center gap-3 text-sky-600 font-semibold">

    <span>Explore Service</span>

    <FaArrowRightLong
      className="
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
    />

  </div>

</Link>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Services;