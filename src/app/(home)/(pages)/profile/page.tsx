"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiCamera,
  FiPackage,
  FiUser,
  FiMoreVertical,
  FiLogOut,
  FiEdit,
  FiLock,
} from "react-icons/fi";

export default function ProfilePage() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#D8E6EE] py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="rounded-[35px] bg-white p-8 shadow-xl">
<div className="relative border-b border-slate-200 pb-10">

  {/* Three Dot Button */}
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="absolute right-0 top-0 rounded-xl p-2 transition hover:bg-slate-100"
  >
    <FiMoreVertical size={22} />
  </button>

  {/* Dropdown */}
  {menuOpen && (
    <div className="absolute right-0 top-12 z-20 w-56 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">

      <button className="flex w-full items-center gap-3 px-5 py-4 text-left transition hover:bg-slate-50">
        <FiEdit />
        Edit Profile
      </button>

      <button className="flex w-full items-center gap-3 px-5 py-4 text-left transition hover:bg-slate-50">
        <FiLock />
        Change Password
      </button>

      <div className="border-t border-slate-200" />

      <Link href="/login" className="flex w-full items-center gap-3 px-5 py-4 text-left text-red-600 transition hover:bg-red-50">
        <FiLogOut />
        Logout
      </Link>

    </div>
  )}

  {/* Profile */}
  <div className="flex flex-col items-center gap-6 md:flex-row">

    <div className="relative">

      <div className="h-36 w-36 overflow-hidden rounded-full border-4 border-cyan-600">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={144}
          height={144}
          className="h-full w-full object-cover"
        />
      </div>

      <button className="absolute bottom-1 right-1 rounded-full bg-cyan-600 p-3 text-white shadow-lg transition hover:bg-cyan-700">
        <FiCamera />
      </button>

    </div>

    <div className="text-center md:text-left">

      <h2 className="text-3xl font-bold text-slate-900">
        Arnav Das
      </h2>

      <p className="mt-2 text-slate-500">
        arnab@example.com
      </p>

    </div>

  </div>

</div>

{/* Personal Information */}

<section className="mt-10">

  <h3 className="mb-6 text-2xl font-semibold text-slate-900">
    Personal Information
  </h3>

  <div className="grid gap-6 md:grid-cols-2">

    <div className="rounded-2xl bg-slate-50 p-5">
      <p className="text-sm font-medium text-slate-500">
        Full Name
      </p>

      <p className="mt-2 text-lg font-semibold text-slate-900">
        Arnav Das
      </p>
    </div>

    <div className="rounded-2xl bg-slate-50 p-5">
      <p className="text-sm font-medium text-slate-500">
        Phone Number
      </p>

      <p className="mt-2 text-lg font-semibold text-slate-900">
        +91 9876543210
      </p>
    </div>

    <div className="rounded-2xl bg-slate-50 p-5 md:col-span-2">
      <p className="text-sm font-medium text-slate-500">
        Email Address
      </p>

      <p className="mt-2 text-lg font-semibold text-slate-900">
        arnab@example.com
      </p>
    </div>

    <div className="rounded-2xl bg-slate-50 p-5 md:col-span-2">
      <p className="text-sm font-medium text-slate-500">
        Delivery Address
      </p>

      <p className="mt-2 text-lg font-semibold text-slate-900">
        House No. 15, ABC Road,
        <br />
        Guwahati, Assam - 781001
      </p>
    </div>

  </div>

</section>

          {/* Account Overview */}

          <section className="mt-12">

            <h3 className="mb-6 text-2xl font-semibold text-slate-900">
              Account Overview
            </h3>

            <div className="grid gap-5 md:grid-cols-3">

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">

                <FiPackage className="text-3xl text-cyan-600" />

                <p className="mt-4 text-sm text-slate-500">
                  Orders
                </p>

                <h4 className="mt-2 text-3xl font-bold">
                  14
                </h4>

              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">

                <FiUser className="text-3xl text-cyan-600" />

                <p className="mt-4 text-sm text-slate-500">
                  Customer ID
                </p>

                <h4 className="mt-2 text-xl font-bold">
                  AXM1024
                </h4>

              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">

                <p className="text-3xl">📅</p>

                <p className="mt-4 text-sm text-slate-500">
                  Member Since
                </p>

                <h4 className="mt-2 text-xl font-bold">
                  July 2026
                </h4>

              </div>

            </div>

          </section>
        </div>
      </div>
    </main>
  );
}