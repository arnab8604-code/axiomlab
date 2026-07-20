"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import type { Career } from "@/types/career";
import Link from "next/link";

interface CareerCardProps {
  career: Career;
}

const CareerCard = ({ career }: CareerCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-[30px] bg-[#EAF2F8] shadow-xl">

      {/* Header */}

      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-8 text-left"
      >
        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            {career.title}
          </h2>

          <p className="mt-2 text-slate-600">
            {career.department}
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-500">

            <span>{career.location}</span>

            <span>•</span>

            <span>{career.employmentType}</span>

            <span>•</span>

            <span>{career.experience}</span>

          </div>

        </div>

        <span className="text-3xl font-light">
          {open ? "−" : "+"}
        </span>

      </button>

      {/* Expandable Content */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >

            <div className="border-t border-slate-200 px-8 py-8">

              {/* Overview */}

              <h3 className="text-xl font-semibold">
                Position Overview
              </h3>

              <p className="mt-3 leading-8 text-slate-600">
                {career.overview}
              </p>

              {/* Responsibilities */}

              <h3 className="mt-8 text-xl font-semibold">
                Responsibilities
              </h3>

              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">

                {career.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}

              </ul>

              {/* Requirements */}

              <h3 className="mt-8 text-xl font-semibold">
                Requirements
              </h3>

              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">

                {career.requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}

              </ul>

              {/* Apply */}
              <Link href="/job_apply" className="inline-block mt-10 rounded-full bg-green-700 px-8 py-3 font-semibold text-white transition hover:bg-black">
              Apply now
              </Link>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
};

export default CareerCard;