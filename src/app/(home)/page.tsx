"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {bg} from "@/utils/color"
//=========== react icons ============/////
import {
  FaArrowRight,
  FaLeaf,
  FaFlask,
  FaShieldAlt,
  FaHandshake,
  FaWind,
  FaWater,
  FaShip,
  FaCloud,
  FaVolumeUp,
  FaMicroscope,
  FaGlobeAsia, FaUsers,
  FaAward,
  FaCheckCircle,
} from "react-icons/fa";

import {
  HiOutlineBuildingOffice2,
  HiOutlineDocumentCheck,
} from "react-icons/hi2";

//================ banner images =========//////
import AXIOM from "@/assets/AXIOM.jpg";
import TEAM from "@/assets/AXIOM_TEAM.jpg";

//======= hero images array from public ========//
const images = [
  "/hero/hero1.jpg",
   "/hero/hero2.jpg",
   "/hero/hero3.jpg"
];
// ======== services array ===========//
const services = [
  {
    icon: <FaWind />,
    title: "Indoor Air Quality Assessment",
    color: "text-sky-600",
  },
  {
    icon: <FaCloud />,
    title: "Compressed Dry Air Quality",
    color: "text-cyan-600",
  },
  {
    icon: <FaVolumeUp />,
    title: "Occupational Noise Monitoring",
    color: "text-indigo-600",
  },
  {
    icon: <FaMicroscope />,
    title: "Chemical Exposure Monitoring",
    color: "text-emerald-600",
  },
  {
    icon: <FaShip />,
    title: "Noise & Vibration Testing",
    color: "text-blue-600",
  },
  {
    icon: <FaWater />,
    title: "IMO MARPOL Emission Monitoring",
    color: "text-teal-600",
  },
  {
    icon: <FaGlobeAsia />,
    title: "GHG Emissions & Carbon Testing",
    color: "text-green-600",
  },
];
//========== industries array ========////
const industries = [
  "Oil & Gas",
  "Manufacturing",
  "Marine",
  "Power Plants",
  "Healthcare",
  "Government",
  "Petrochemicals",
];

//======== main function ==========
export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <main className={`overflow-x-hidden ${bg}`}>

      {/* ================= Hero section ================= */}
      <section className="relative lg:h-screen min-h-screen overflow-hidden">

        {/* ================= Background Slideshow ================= */}

        <div className="absolute inset-0">

          {images.map((image, index) => (

            <img
              key={index}
              src={image}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${currentImage === index
                ? "opacity-100"
                : "opacity-0"
                }`}
            />

          ))}

          <div className="absolute inset-0 bg-linear-to-r from-slate-900/70 via-slate-800/50 to-transparent backdrop-blur-[2px]" />

        </div>

        {/* ================= Hero Content ================= */}
        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1800px] items-center px-8 xl:px-20">

          <div className="flex w-full flex-col justify-between gap-16 lg:flex-row lg:items-center">
            {/* ================= Left Side ================= */}

            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .8 }}
            >
              {/* Heading */}

              <h1 className="text-4xl font-black leading-tight text-white mt-24 lg:mt-10 sm:text-5xl lg:text-7xl">

                Empowering Industries

                <br />

                with Environmental

                <span className="bg-linear-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">

                  {" "}Excellence

                </span>

              </h1>
              <div className="mt-8 l:mt-0 inline-flex items-center gap-2 ">

                <FaLeaf className="text-green-500" />

                <span className="text-sm font-medium text-white">

                  Trusted Environmental Laboratory

                </span>

              </div>

            </motion.div>

            {/* ================= Right Side ================= */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .8, delay: .2 }}
              className="grid lg:mt-20 -mt-5 l:mb-0 mb-10 gap-6"
            >        {/* Card 1 */}

              <div className="rounded-[28px] border border-white/40 bg-white/55 p-7 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100">

                  <FaShieldAlt className="text-3xl text-sky-600" />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  Accredited Services
                </h3>
                <p className="mt-3 leading-7 text-white">
                  We uphold impartiality, transparency
                  and professionalism in every project
                  while helping clients make informed
                  environmental decisions.
                </p>
              </div>

              {/* Card 2 */}

              <div className="rounded-[28px] border border-white/40 bg-white/55 p-7 shadow-xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">

                  <FaHandshake className="text-3xl text-green-600" />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  Our Clientele
                </h3>

                <p className="mt-3 leading-7 text-white">
                  We uphold impartiality, transparency
                  and professionalism in every project
                  while helping clients make informed
                  environmental decisions.
                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </section>



      {/* ================= ABOUT ================= */}

      <section className="px-6 py-20 lg:px-24">

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">

              Trusted Environmental
              <br />
              Testing &
              <span className="text-sky-600">
                {" "}Consultancy
              </span>

            </h2>

            <p className="mt-8 text-lg leading-9 text-black">

              Axiom Laboratory Pte Ltd is an emerging environmental
              testing and consultancy company established in 2019.

              <br />
              <br />

              We operate in Singapore, Malaysia and Myanmar,
              supported by professional associates across China,
              Indonesia, Brunei, Thailand, Vietnam and Cambodia.

              <br />
              <br />

              Through scientific excellence, integrity and
              professionalism, we provide environmental monitoring,
              industrial hygiene assessments and compliance testing
              that help organisations maintain safer workplaces
              and sustainable operations.

            </p>

            <Link href="/about" className="mt-10 flex w-40 items-center justify-center gap-2 rounded-2xl bg-green-700 px-4 py-4 font-semibold  text-white transition-all duration-300 hover:scale-[1.02] hover:bg-black">

              Learn More

              <FaArrowRight />

            </Link>

          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="relative"
          >

            <div className="overflow-hidden rounded-[40px] border border-white/40 bg-white/50 backdrop-blur-xl shadow-[4px_4px_12px_#dddddd,12px_12px_0_#ffffff,12px_12px_0_1px_#cccccc,16px_16px_12px_#dddddd] md:shadow-[4px_4px_12px_#dddddd,12px_12px_0_#ffffff,12px_12px_0_1px_#cccccc,16px_16px_12px_#dddddd,24px_24px_0_#ffffff,24px_24px_0_1px_#cccccc,28px_28px_12px_#dddddd]">

              <Image
                src={AXIOM}
                alt="Axiom Laboratory"
                className="h-162.5w-full rounded-3xl object-cover"
              />

            </div>

            <div className="absolute left-0 bottom-0 rounded-tr-3xl rounded-bl-3xl bg-white p-6">

              <p className="mt-1 font-bold text-slate-700">
                SINCE
              </p>
              <h2 className="text-5xl font-black text-sky-600">
                2019
              </h2>


            </div>

          </motion.div>


        </div>

      </section>

      {/* ================= INDUSTRIES ================= */}

      <section className="px-6 py-20 lg:px-24">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <h2 className="mt-6 text-5xl font-black text-slate-900">

              Serving Diverse Industries

            </h2>

          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {industries.map((industry, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="rounded-[30px] border border-white/40 bg-white/50 p-8 backdrop-blur-xl shadow-xl transition-all"
              >
                <h3 className=" text-center text-2xl font-bold text-slate-900">

                  {industry}

                </h3>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
      {/* ================= SERVICES ================= */}

      <section className="relative px-6 py-20 lg:px-24">

        <div className="mx-auto max-w-7xl">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="text-center"
          >
            <h2 className="mt-6 text-5xl font-black text-slate-900">

              SERVICES
              <span className="text-sky-600"> WE PROVIDE</span>

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

              Delivering accurate laboratory analysis, industrial hygiene
              assessments and environmental compliance services across
              Southeast Asia.

            </p>

          </motion.div>

          {/* Cards */}

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {services.map((service, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-[34px] border border-white/40 bg-white/50 p-8 backdrop-blur-xl shadow-xl transition-all duration-300"
              >

                {/* Hover Gradient */}

                <div className="absolute inset-0 bg-linear-to-br from-sky-100/0 via-sky-100/0 to-cyan-100/50 opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">

                  {/* Icon */}

                  <div className={`mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-4xl shadow-lg ${service.color}`}>

                    {service.icon}

                  </div>

                  {/* Title */}

                  <h3 className="text-2xl font-bold leading-snug text-slate-900">

                    {service.title}

                  </h3>
                </div>
              </motion.div>

            ))}
            <div className="flex justify-center md:justify-start items-center ">
              <Link href="/our_services">
            <button className="flex items-center gap-3 rounded-2xl bg-green-700 px-8 py-4 font-semibold  text-white transition-all duration-300 hover:scale-[1.02] hover:bg-black">

              Learn More

              <FaArrowRight />

            </button>
              </Link>
            </div>

          </div>

        </div>

      </section>
      {/* ================= JOIN OUR TEAM ================= */}

      <section className="px-6 py-28 lg:px-24">

        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="relative"
          >

            <div className="overflow-hidden rounded-3xl border border-white/40 bg-white/50 backdrop-blur-xl shadow-[4px_4px_12px_#dddddd,12px_12px_0_#ffffff,12px_12px_0_1px_#cccccc,16px_16px_12px_#dddddd] md:shadow-[4px_4px_12px_#dddddd,12px_12px_0_#ffffff,12px_12px_0_1px_#cccccc,16px_16px_12px_#dddddd,24px_24px_0_#ffffff,24px_24px_0_1px_#cccccc,28px_28px_12px_#dddddd]">

              <Image
                src={TEAM}
                alt="Our Team"
                className="h-150 w-full rounded-3xl object-cover"
              />

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}>

            <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">

              Join Our
              <br />
              Passionate Team

            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">

              Be part of a group of dedicated professionals driven by a shared commitment to environmental excellence and making a positive impact on our world.
            </p>

            <div className=" flex flex-col mt-10 space-y-6">
              <div className="flex flex-wrap gap-3">
                {[
                  "Team Collaboration",
                  "Professional Development",
                  "Cutting-Edge Projects",
                  "Diverse & Inclusive Culture",
                ].map((item, index) => (

                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex w-70 items-center gap-3 rounded-2xl border border-white/40 bg-white/50 p-5 backdrop-blur-xl shadow-lg"
                  >

                    <div className="rounded-full bg-green-100 p-3">

                      <FaCheckCircle className="text-green-600" />

                    </div>

                    <span className="text-lg font-semibold text-slate-800">

                      {item}

                    </span>

                  </motion.div>

                ))}
              </div>

              <button className="w-70 flex justify-center items-center gap-3 rounded-2xl bg-green-700 px-8 py-4 font-semibold  text-white transition-all duration-300 hover:scale-[1.02] hover:bg-black">
                View Careers

              <FaArrowRight />

            </button>
            </div>

          </motion.div>

        </div>

      </section>

      {/* ================= CONTACT CTA ================= */}

      <section className="px-6 pb-20 lg:px-24">

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[45px] bg-linear-to-r from-sky-600 via-cyan-500 to-emerald-500 p-16 shadow-2xl"
        >

          {/* Decorative Blobs */}

          <div className="absolute -left-24 -top-24  rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <h2 className="mt-6  text-3xl md:text-5xl font-black leading-tight text-white">

                Let's Build a
                <br />
                Sustainable Future
                Together.

              </h2>

              <p className="mt-8 max-w-xl text-lg leading-9 text-sky-100">

                Reach out to Axiom Laboratory Pte Ltd for
                environmental testing, consultancy,
                industrial hygiene assessments,
                compliance monitoring or collaboration opportunities.

              </p>

            </div>

            <div className="flex flex-wrap gap-6 lg:justify-end">

              <button className="mt-10 flex items-center gap-3 rounded-2xl bg-white px-8 py-4  text-black hover:text-white font-bold transition-all duration-300 hover:scale-[1.02] hover:bg-black">

              Contact US

            </button>
            </div>

          </div>

        </motion.div>

      </section>

    </main>
  );
}
