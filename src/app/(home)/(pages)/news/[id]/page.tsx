import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiCalendar } from "react-icons/fi";

import { news } from "@/temp-data/news/news";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function NewsDetailsPage({ params }: Props) {
  const { id } = await params;

  const article = news.find((item) => item.id === Number(id));

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#D8E6EE] pb-24">
      <div className="mx-auto max-w-4xl px-6">

        {/* Back Button */}
        <Link
          href="/news"
          className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-slate-600 shadow transition hover:text-cyan-600 hover:shadow-md"
        >
          <FiArrowLeft />
          Back to News
        </Link>

        {/* Article */}
        <article className="rounded-[35px] bg-white p-8 shadow-xl md:p-12">

          {/* Date */}
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <FiCalendar className="text-cyan-600" />
            <span>{article.date}</span>
          </div>

          {/* Title */}
          <h1 className="mt-4 text-xl font-bold leading-tight text-slate-900 md:text-3xl">
            {article.title}
          </h1>

          <div className="my-5 h-px bg-slate-200" />

          {/* Content */}
          <div className="text-lg leading-9 text-slate-700">
            {article.content}
          </div>

        </article>

      </div>
    </main>
  );
}