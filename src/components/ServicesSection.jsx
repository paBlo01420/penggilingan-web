// src/components/ServicesSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaDrumstickBite, FaFish, FaConciergeBell } from "react-icons/fa";

const services = [
  {
    title: "Penggilingan Bakso",
    description: "Adonan bakso berkualitas dari daging sapi premium...",
    Icon: FaDrumstickBite,
    link: "#",
  },
  {
    title: "Model Bakso & Pempek",
    description: "Variasi bakso urat, bakso halus...",
    Icon: FaFish,
    link: "#",
  },
  {
    title: "Penggilingan Daging",
    description: "Layanan giling daging sapi, ayam...",
    Icon: FaConciergeBell,
    link: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServicesSection() {
  return (
    <section id="layanan" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Layanan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 text-center"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <svc.Icon className="mx-auto mb-4 w-12 h-12 text-green-600" />
              <h3 className="text-xl font-semibold mb-2">{svc.title}</h3>
              <p className="text-gray-600 mb-4">{svc.description}</p>
              <a href={svc.link} className="text-green-600 hover:underline">
                Selengkapnya
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
