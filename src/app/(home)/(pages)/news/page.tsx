"use client";

import Link from "next/link";
import { FiArrowRight, FiCalendar } from "react-icons/fi";

import {news} from "@/temp-data/news/news";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#D8E6EE] pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="space-y-6">

          {news.map((item) => (
            <article
              key={item.id}
              className="rounded-[30px] bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <FiCalendar className="text-cyan-600" />
                {item.date}
              </div>

              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                {item.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>

              <div className="mt-8 flex justify-end">
                <Link
                  href={`/news/${item.id}`}
                  className="flex items-center gap-2 font-semibold text-cyan-600 transition hover:gap-3"
                >
                  Read More
                  <FiArrowRight />
                </Link>
              </div>

            </article>
          ))}

        </div>

      </div>
    </main>
  );
}