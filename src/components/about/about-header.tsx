import React from "react";

const AboutHeader = () => {
  return (
    <section className="bg-[#D8E6EE] pt-32 pb-12 text-center">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">
          Since 2019
        </p>

        <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
          About{" "}
          <span className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
            AXIOM
          </span>{" "}
          Laboratory
        </h1>

        <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500" />
      </div>
    </section>
  );
};

export default AboutHeader;