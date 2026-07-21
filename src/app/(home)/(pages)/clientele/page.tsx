"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { clienteleData } from "@/temp-data/clientele/clientele";

const Services = () => {
    const [expandedCard, setExpandedCard] = useState<number | null>(null);

    const toggleCard = (index: number) => {
        setExpandedCard((prev) => (prev === index ? null : index));
    };

    return (
        <section className="relative overflow-hidden bg-[#D8E6EE] pb-28 pt-5">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {clienteleData.map((client, index) => {
                        const isExpanded = expandedCard === index;

                        return (
                            <motion.div
                                key={client.title}
                                layout
                                transition={{
                                    layout: {
                                        duration: 0.4,
                                        ease: "easeInOut",
                                    },
                                }}
                                className="group flex flex-col justify-between rounded-[30px] border border-slate-400 bg-[#EAF2F8] p-5 shadow-2xl"
                            >
                                {/* Image */}
                                <div className="flex h-40 w-full items-center justify-center rounded-2xl border-2 border-dashed border-black">
                                    {/* Image goes here */}

                                </div>

                                {/* Title */}
                                <div>
                                    <h3 className="mt-8 text-center text-2xl font-bold text-slate-900">
                                        {client.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <AnimatePresence mode="wait">
                                    {isExpanded ? (
                                        <motion.div
                                            key="description"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden text-center"
                                        >
                                            <p className="mt-4 leading-7 text-slate-600">
                                                {client.description}
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="service"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden text-center"
                                        >
                                            <p className="mt-4 leading-7 font-bold text-slate-900">
                                                {client.service}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Button */}
                                <button
                                    onClick={() => toggleCard(index)}
                                    className="mt-8 flex items-center justify-center gap-3 font-semibold text-sky-600"
                                >
                                    <span>
                                        {isExpanded ? "Read less" : "Read more"}
                                    </span>

                                    <motion.div
                                        animate={{
                                            rotate: isExpanded ? 90 : 0,
                                        }}
                                        transition={{
                                            duration: 0.25,
                                        }}
                                    >
                                        <FaArrowRightLong />
                                    </motion.div>
                                </button>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;