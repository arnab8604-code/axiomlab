"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/AXIOM_LOGO.webp";
import { FaUserAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useAppSelector } from "@/redux/hooks";

/* =====================================
   Types
===================================== */

interface NavLink {
    title: string;
    href: string;
}

/* =====================================
   Navigation Data
===================================== */

const navLinks: NavLink[] = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About Us",
        href: "/about",
    },
    {
        title: "Our Products",
        href: "/our_products",
    },
    {
        title: "Services",
        href: "/our_services",
    },
    {
        title: "Careers",
        href: "/careers",
    },
    {
        title: "News",
        href: "/news",
    },
];

/* =====================================
   Tailwind Utility Classes
===================================== */

const navItem =
    "relative text-base xl:text-xl font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:text-cyan-500 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-cyan-500 after:content-[''] after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100";

const iconButton =
    "flex items-center justify-center h-10 w-10 rounded-full transition duration-300 hover:scale-105";

/*Component*/

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1200) {
                setMenuOpen(false);
            }
        };

        // Check once when component mounts
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuOpen]);

    const cart = useAppSelector(state => state.cart.cart);

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

    return (
        <nav
           className={`fixed top-3 left-0 right-0 z-50 mx-auto w-[95%] max-w-[1600px] overflow-hidden border border-white/20 bg-white/50 backdrop-blur-xl shadow-2xl ${menuOpen? "max-h-screen rounded-t-3xl": "h-18 rounded-full"}`}>

            <div className="mx-auto flex h-18 max-w-[1600px] items-center justify-between px-6 lg:px-10">

                {/* Logo */}

                <Link href="/" className="shrink-0">
                    <Image
                        src={logo}
                        alt="Axiom Logo"
                        className="h-12 w-auto lg:h-14 xl:h-16"
                        priority
                    />
                </Link>

                {/*Desktop Navigation*/}

                <ul className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8">

                    {navLinks.map((item) => (

                        <li key={item.title}>

                            <Link
                                href={item.href}
                                className={navItem}
                            >
                                <span>{item.title}</span>

                            </Link>

                        </li>

                    ))}

                </ul>
                {/*Desktop Right Side*/}

                <div className="hidden lg:flex items-center gap-3 xl:gap-5">

                    {/* Contact Button */}

                    <Link href="/contact"
                        type="button"
                        className="rounded-full px-4 xl:px-6 py-2 font-semibold bg-green-700 text-white transition-all duration-300 hover:scale-[1.02] hover:bg-black"
                    >
                        Contact Us
                    </Link>

                    {/* User Button */}

                    <button
                        type="button"
                        aria-label="User Profile"
                        className={`${iconButton} text-black hover:ring-2 hover:ring-white`}
                    >
                        <Link href="/login">
                        <FaUserAlt size={18} />
                        </Link>
                    </button>

                    {/* Cart Button */}

                    <button
                        type="button"
                        aria-label="Shopping Cart"
                        className={`${iconButton} relative text-black`}
                    >
                        <Link href="/cart">
                        <FaCartShopping size={26} />
                        <span className="flex absolute justify-center items-center -top-1 animate-bounce -right-1 h-4 w-4 text-white font-semibold border-2 p-2 border-black bg-black  rounded-full">{totalItems}</span>
                        </Link>
                    </button>

                </div>

                {/*Mobile Menu Toggle*/}

                <button
                    type="button"
                    aria-label="Toggle Navigation Menu"
                    className="lg:hidden text-black transition duration-300"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    {menuOpen ? (
                        <HiX size={34} />
                    ) : (
                        <HiMenuAlt3 size={34} />
                    )}
                </button>

            </div>

            {/*Mobile Navigation*/}

            <div
                className={`lg:hidden ${menuOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-3 opacity-0 pointer-events-none"
                    }`}
            >

                <div className="h-[calc(100vh-4rem)] overflow-y-auto px-6 pb-8">

                    {/* Navigation Links */}

                    <ul className="flex flex-col gap-5">

                        {navLinks.map((item) => (

                            <li key={item.title}>

                                <Link
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="flex items-center justify-between border-b border-black/10 pb-3 text-lg font-medium transition duration-200 hover:text-cyan-500"
                                >

                                    <span>{item.title}</span>

                                </Link>

                            </li>

                        ))}

                    </ul>
                    {/*Mobile Bottom*/}

                    <div className="mt-8 flex justify-center gap-8">

                        {/* Profile */}

                        <button
                            type="button"
                            aria-label="User Profile"
                            className="flex flex-col items-center gap-2 transition duration-300 hover:scale-105"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                                <FaUserAlt size={18} />
                            </div>

                            <span className="text-sm font-medium">
                                Profile
                            </span>
                        </button>

                        {/* Cart */}

                        <button
                            type="button"
                            aria-label="Shopping Cart"
                            className="relative flex flex-col items-center gap-2 transition duration-300 hover:scale-105"
                        >
                            <Link href="/cart" className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md" onClick={() => setMenuOpen((prev) => !prev)}>
                                <FaCartShopping size={22} />
                            </Link>
                            <span className="flex absolute justify-center items-center -top-1 animate-bounce -right-1 h-4 w-4 text-white font-semibold border-2 p-2 border-black bg-black  rounded-full">{totalItems}</span>

                            <span className="text-sm font-medium">
                                Cart
                            </span>
                        </button>

                    </div>

                    {/* Contact Button */}

                    <button
                        type="button"
                        className="mt-6 w-full rounded-full bg-green-800 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-black"
                    >
                        Contact us
                    </button>

                </div>
            </div>

        </nav>
    );
};

export default Navbar;