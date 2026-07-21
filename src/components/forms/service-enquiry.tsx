"use client";

import { useState } from "react";
import { useAppSelector } from "@/redux/hooks";

export default function ServiceEnquiry() {
  const { industry, service } = useAppSelector(
  (state) => state.enquiry
);
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
  <section className="min-h-screen bg-[#D8E6EE] px-4 py-6 sm:px-6 sm:py-8">
    <div className="mx-auto w-full max-w-4xl rounded-2xl bg-white p-5 shadow-lg sm:p-8">
      <h1 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
        Service Enquiry
      </h1>

      <p className="mt-2 mb-6 text-center text-sm text-slate-600 sm:text-base">
        Please fill out the form below and our team will contact you shortly.
      </p>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-5 md:grid-cols-2"
      >
        {/* First Name */}
        <div>
          <label className="mb-2 block font-medium text-slate-700">
            First Name *
          </label>

          <input
            type="text"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-sky-600 focus:outline-none"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Last Name *
          </label>

          <input
            type="text"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-sky-600 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Email *
          </label>

          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-sky-600 focus:outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Phone Number *
          </label>

          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-sky-600 focus:outline-none"
          />
        </div>

        {/* Industry */}
        <div className="md:col-span-2">
          <label className="mb-2 block font-medium text-slate-700">
            Industry
          </label>

          <input
            type="text"
            value={industry}
            readOnly
            className="w-full cursor-not-allowed rounded-lg border border-slate-300 bg-slate-100 px-4 py-2.5 text-slate-700"
          />
        </div>

        {/* Service */}
        <div className="md:col-span-2">
          <label className="mb-2 block font-medium text-slate-700">
            Enquiry For Type Of Service
          </label>

          <input
            type="text"
            value={service}
            readOnly
            className="w-full cursor-not-allowed rounded-lg border border-slate-300 bg-slate-100 px-4 py-2.5 text-slate-700"
          />
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label className="mb-2 block font-medium text-slate-700">
            Message *
          </label>

          <textarea
            name="message"
            rows={5}
            required
            placeholder="Let us know your questions..."
            value={formData.message}
            onChange={handleChange}
            className="w-full resize-none rounded-lg border border-slate-300 px-4 py-2.5 focus:border-sky-600 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center md:col-span-2">
          <button
            type="submit"
            className="w-full max-w-xs rounded-xl bg-green-600 py-3 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-black"
          >
            Submit Enquiry
          </button>
        </div>
      </form>
    </div>
  </section>
);
}