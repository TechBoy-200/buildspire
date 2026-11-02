"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  GraduationCap,
  Network,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-copy"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.13,
            },
          },
        }}
      >
        <motion.div className="eyebrow" variants={fadeUp}>
          <span className="eyebrow-line" />
          TECHNOLOGY. ENGINEERING. FINANCE.
        </motion.div>

        <motion.h1 className="hero-title" variants={fadeUp}>
          <span>BUILDING</span>
          <span className="purple-text">THE FUTURE.</span>
        </motion.h1>

        <motion.p className="hero-description" variants={fadeUp}>
          We build technology that moves businesses forward, develop the next
          generation of innovators, and create opportunities that shape
          tomorrow.
        </motion.p>

        <motion.div className="hero-actions" variants={fadeUp}>
          <a href="#contact" className="button-primary">
            Start a project
            <ArrowUpRight size={16} />
          </a>

          <a href="#pillars" className="button-secondary">
            Explore Buildspire
            <ArrowDown size={15} />
          </a>
        </motion.div>

        <motion.div className="hero-meta" variants={fadeUp}>
          <div className="hero-meta-item">
            <strong>BUILD</strong>
            <span>Solutions</span>
          </div>

          <div className="hero-meta-divider" />

          <div className="hero-meta-item">
            <strong>DEVELOP</strong>
            <span>Academy</span>
          </div>

          <div className="hero-meta-divider" />

          <div className="hero-meta-item">
            <strong>CONNECT</strong>
            <span>Community</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <div className="visual-glow" />

        <div className="visual-orbit" />
        <div className="visual-orbit visual-orbit-two" />

        <div className="visual-core">
          <div className="visual-core-inner">
            <span>B</span>
          </div>
        </div>

        <div className="visual-label visual-label-one">
          <Code2 size={15} />
          TECHNOLOGY
        </div>

        <div className="visual-label visual-label-two">
          <GraduationCap size={15} />
          DEVELOPMENT
        </div>

        <div className="visual-label visual-label-three">
          <Network size={15} />
          CONNECTION
        </div>

        <div className="visual-index">BS / 001</div>
      </motion.div>
    </section>
  );
}