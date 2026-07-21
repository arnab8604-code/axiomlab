"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ServiceEnquiry() {
  const searchParams = useSearchParams();

  const industry = searchParams.get("industry") ?? "";
  const service = searchParams.get("service") ?? "";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const payload = {
      ...formData,
      industry,
      service,
    };

    console.log(payload);

    // await fetch("/api/enquiry", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(payload),
    // });
  };

  return (
    <section className="min-h-screen bg-[#D8E6EE] py-20">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-xl">
        <h1 className="mb-2 text-4xl font-bold text-slate-900">
          Service Enquiry
        </h1>

        <p className="mb-10 text-slate-600">
          Please fill out the form below and our team will contact you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name */}
          <div>
            <label className="mb-2 block font-semibold">
              First Name *
            </label>

            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-sky-600 focus:outline-none"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="mb-2 block font-semibold">
              Last Name *
            </label>

            <input
              type="text"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-sky-600 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block font-semibold">
              Email *
            </label>

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-sky-600 focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block font-semibold">
              Phone Number *
            </label>

            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-sky-600 focus:outline-none"
            />
          </div>

          {/* Industry */}
          <div>
            <label className="mb-2 block font-semibold">
              Industry
            </label>

            <input
              type="text"
              value={industry}
              readOnly
              className="w-full cursor-not-allowed rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 text-slate-700"
            />
          </div>

          {/* Service */}
          <div>
            <label className="mb-2 block font-semibold">
              Enquiry For Type Of Service
            </label>

            <input
              type="text"
              value={service}
              readOnly
              className="w-full cursor-not-allowed rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 text-slate-700"
            />
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block font-semibold">
              Message
            </label>

            <textarea
              name="message"
              rows={6}
              required
              placeholder="Let us know your questions!"
              value={formData.message}
              onChange={handleChange}
              className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 focus:border-sky-600 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-green-600 py-4 text-lg font-semibold text-white transition hover:bg-black"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}