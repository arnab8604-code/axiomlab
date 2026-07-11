import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/AXIOM_LOGO.webp";

import {
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="border-t bg-[#D8E6EE]">

            <div className="mx-auto max-w-7xl px-6 pt-10 pb-5">

                <div className="grid gap-10 lg:grid-cols-4">

                    {/* LEFT */}

                    <div>

                        <Image
                            src={logo}
                            alt="Axiom Laboratory"
                            className="w-52"
                        />

                        <p className="mt-5 leading-6 text-[#6b7280]">
                            Delivering trusted environmental testing,
                            inspection and consultancy services across
                            Asia with integrity, professionalism and
                            technical excellence.
                        </p>

                    </div>

                    {/* COMPANY */}

                    <div>

                        <h3 className="text-xl font-bold text-[#24476B]">
                            Company
                        </h3>

                        <div className="mt-2 h-1 w-14 rounded bg-[#22C55E]" />

                        <div className="mt-8 flex flex-col gap-4">

                            <Link href="/">Home</Link>

                            <Link href="/about">
                                About Us
                            </Link>

                            <Link href="/products">
                                Products
                            </Link>

                        </div>

                    </div>

                    {/* QUICK LINKS */}

                    <div>

                        <h3 className="text-xl font-bold text-[#24476B]">
                            Quick Links
                        </h3>

                        <div className="mt-2 h-1 w-14 rounded bg-[#22C55E]" />

                        <div className="mt-8 flex flex-col gap-4">

                            <Link href="/services">
                                Services
                            </Link>

                            <Link href="/careers">
                                Careers
                            </Link>

                            <Link href="/news">
                                News
                            </Link>
                        </div>

                    </div>

                    {/* CONTACT */}

                    <div>

                        <h3 className="text-xl font-bold text-[#24476B]">
                            Get In Touch
                        </h3>

                        <div className="mt-2 h-1 w-14 rounded bg-[#22C55E]" />

                        <div className="mt-8 space-y-6">

                            <div className="flex gap-4">

                                <FaEnvelope className="mt-1 text-[#4F8EF7]" />

                                <div>

                                    <p>sales@axiomlab.sg</p>

                                    <p>changhk@axiomlab.sg</p>

                                </div>

                            </div>

                            <div className="flex gap-4">

                                <FaPhoneAlt className="mt-1 text-[#4F8EF7]" />

                                <div>

                                    <p>+65 9630 2838</p>

                                    <p>+65 6022 1898</p>

                                </div>

                            </div>

                            <div className="flex gap-4">

                                <FaMapMarkerAlt className="mt-1 text-[#4F8EF7]" />

                                <p>
                                    Axiom Laboratory Pte Ltd
                                    <br />
                                    194 Pandan Loop
                                    <br />
                                    #02-01 Pantech Business Hub
                                    <br />
                                    Singapore 128383
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-blue-100 pt-5 text-sm text-[#6B7280] lg:flex-row">

                    <p>
                        © 2026 Axiom Laboratory Pte Ltd.
                        All Rights Reserved.
                    </p>

                    <div className="flex gap-8">

                        <Link href="/">
                            Privacy Policy
                        </Link>

                        <Link href="/">
                            Terms & Conditions
                        </Link>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;