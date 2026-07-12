
import React from 'react'

const ServiceHeader = () => {
  return (
    <>
    <section className="pt-32 pb-16 text-center">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">
            Our Expertise
          </p>

          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Our Services
          </h1>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-sky-500" />

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Delivering professional environmental testing, laboratory
            analysis, consultancy and compliance services across multiple
            industries.
          </p>
        </div>
      </section>
    </>
  )
}

export default ServiceHeader
