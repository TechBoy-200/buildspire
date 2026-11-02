
"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Code2,
  GraduationCap,
  Users,
  Lightbulb,
  Globe2,
  Layers3,
  Sparkles,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Academy", href: "#academy" },
  { label: "Community", href: "#community" },
  { label: "Opportunities", href: "#opportunities" },
];

const pillars = [
  {
    number: "01",
    name: "Build",
    description:
      "We transform ideas into practical digital products and technology solutions that solve real-world problems.",
    detail: "Explore our solutions",
    href: "#solutions",
    icon: Code2,
  },
  {
    number: "02",
    name: "Learn",
    description:
      "We help young people develop valuable skills, discover their potential and prepare for meaningful careers.",
    detail: "Explore the academy",
    href: "#academy",
    icon: GraduationCap,
  },
  {
    number: "03",
    name: "Connect",
    description:
      "We connect ambitious people to communities, mentors and opportunities that help them move forward.",
    detail: "Join the community",
    href: "#community",
    icon: Users,
  },
];

const services = [
  {
    icon: Code2,
    title: "Software & Web Development",
    description:
      "Websites, applications and custom software built around real business needs.",
  },
  {
    icon: Lightbulb,
    title: "Digital Product Development",
    description: "Turning ideas into useful, scalable digital products.",
  },
  {
    icon: Layers3,
    title: "Technology Solutions",
    description:
      "Practical technology systems that improve how businesses operate.",
  },
  {
    icon: Globe2,
    title: "Engineering & Finance",
    description:
      "Developing solutions and services across our wider areas of focus.",
  },
];

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-[#0d0b12] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-[#716a7c] focus:border-[#8804E4]";

const initialForm = {
  full_name: "",
  email: "",
  phone: "",
  company_name: "",
  service_type: "",
  project_description: "",
  budget: "",
  timeline: "",
};

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav className="container-main mx-auto flex h-[62px] items-center justify-between rounded-2xl border border-white/[0.09] bg-[#0b0910]/95 px-3 shadow-[0_12px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:h-[72px] sm:px-7">
        <a
          href="#"
          onClick={() => setOpen(false)}
          className="group flex min-w-0 items-center gap-2 sm:gap-3"
          aria-label="Buildspire home"
        >
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-[#8804E4]/50 shadow-[0_0_24px_rgba(136,4,228,0.2)] sm:h-10 sm:w-10">
            <Image
              src="/images/buildspire-logo.png"
              alt="Buildspire logo"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </div>

          <span className="whitespace-nowrap text-[19px] font-extrabold tracking-[-1.3px] text-white sm:text-[22px]">
            BUILD<span className="text-[#8804E4]">SPIRE</span>
            <span className="text-[#8804E4]">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative py-2 text-[12px] font-medium text-[#aaa4b3] transition-colors duration-300 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#8804E4] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="group hidden items-center gap-3 rounded-full bg-[#8804E4] px-5 py-3 text-[11px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7200c4] hover:shadow-[0_8px_30px_rgba(136,4,228,0.3)] lg:flex"
        >
          Let's build together
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition hover:border-[#8804E4]/50 sm:h-11 sm:w-11 lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`container-main mx-auto overflow-hidden transition-all duration-300 lg:hidden ${
          open
            ? "mt-2 max-h-[420px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-2xl border border-white/[0.09] bg-[#100d17] p-4 shadow-2xl backdrop-blur-2xl sm:p-5">
          <div className="flex flex-col">
            {navigation.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[52px] items-center justify-between border-b border-white/[0.06] py-3 text-sm font-medium text-[#c9c3d2] transition hover:text-white"
              >
                <span>{item.label}</span>
                <span className="text-[10px] text-[#8804E4]">
                  0{index + 1}
                </span>
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#8804E4] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#7200c4]"
          >
            Let's build together
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-28 sm:pb-20 sm:pt-36 lg:flex lg:min-h-[760px] lg:items-center">
      <div className="grid-pattern absolute inset-0 opacity-70" />

      <div className="pointer-events-none absolute left-1/2 top-24 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[#8804E4]/15 blur-[100px] sm:top-24 sm:h-[550px] sm:w-[550px] sm:blur-[150px]" />

      <div className="container-main relative z-10 grid items-center gap-5 sm:gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <div className="mb-6 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-[#8804E4]/30 bg-[#8804E4]/10 px-3 py-2 sm:mb-8 sm:px-4">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#8804E4] sm:h-2 sm:w-2" />
            <span className="text-[9px] font-bold uppercase tracking-[.12em] text-[#d4aaff] sm:text-[10px] sm:tracking-[.16em]">
              Technology · Innovation · Opportunity
            </span>
          </div>

          <h1 className="max-w-[760px] text-[clamp(2.7rem,12vw,4.75rem)] font-extrabold leading-[0.94] tracking-[-2.5px] sm:text-[68px] sm:tracking-[-3px] lg:text-left lg:text-[76px]">
            BUILDING
            <span className="block text-gradient">THE FUTURE.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-[480px] text-[13px] leading-7 text-[#aaa4b3] sm:mt-8 sm:text-[16px] sm:leading-8 lg:mx-0">
            We build technology that moves businesses forward, develop the
            next generation of innovators, and connect people to opportunities
            that shape the future.
          </p>

          <div className="mt-7 flex w-full max-w-[330px] flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center lg:justify-start sm:gap-4">
            <a
              href="#contact"
              className="group flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-[#8804E4] px-6 py-3.5 text-sm font-bold transition hover:bg-[#7200c4] sm:px-7 sm:py-4"
            >
              Work with us
              <ArrowUpRight
                size={17}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#about"
              className="flex min-h-[52px] items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-sm font-bold text-white transition hover:border-[#8804E4] sm:px-7 sm:py-4"
            >
              Discover Buildspire
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-3 border-t border-white/10 pt-5 sm:mt-16 sm:justify-center sm:gap-x-8 sm:pt-7 lg:justify-start">
            {["Technology", "Engineering", "Finance"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8804E4]" />
                <span className="text-[10px] font-semibold tracking-wide text-[#aaa4b3] sm:text-[11px]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto flex aspect-square w-full max-w-[300px] items-center justify-center sm:max-w-[420px] lg:max-w-none"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border border-[#8804E4]/20"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 rounded-full border border-dashed border-[#8804E4]/30 sm:inset-10"
          />

          <div className="absolute inset-[52px] rounded-full border border-[#8804E4]/25 sm:inset-[76px]" />

          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.6, 0.35] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute h-[170px] w-[170px] rounded-full bg-[#8804E4]/30 blur-[60px] sm:h-[250px] sm:w-[250px] sm:blur-[80px]"
          />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 h-32 w-32 overflow-hidden rounded-full border border-[#8804E4]/50 shadow-[0_0_80px_rgba(136,4,228,.3)] sm:h-48 sm:w-48 sm:shadow-[0_0_100px_rgba(136,4,228,.3)]"
          >
            <Image
              src="/images/buildspire-logo.png"
              alt="Buildspire logo"
              fill
              priority
              sizes="(max-width: 640px) 128px, 192px"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-[20%] z-20 flex items-center gap-2 rounded-xl border border-white/10 bg-[#15111e]/95 p-2 shadow-xl sm:left-1 sm:gap-3 sm:p-4"
          >
            <div className="rounded-lg bg-[#8804E4]/20 p-1.5 text-[#d4aaff] sm:p-2">
              <Code2 size={16} className="sm:h-[19px] sm:w-[19px]" />
            </div>
            <div>
              <p className="text-[11px] font-bold sm:text-xs">Build</p>
              <p className="hidden text-[10px] text-[#9991a5] min-[380px]:block">
                Create solutions
              </p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 top-[22%] z-20 flex items-center gap-2 rounded-xl border border-white/10 bg-[#15111e]/95 p-2 shadow-xl sm:right-0 sm:gap-3 sm:p-4"
          >
            <div className="rounded-lg bg-[#8804E4]/20 p-1.5 text-[#d4aaff] sm:p-2">
              <GraduationCap size={16} className="sm:h-[19px] sm:w-[19px]" />
            </div>
            <div>
              <p className="text-[11px] font-bold sm:text-xs">Learn</p>
              <p className="hidden text-[10px] text-[#9991a5] min-[380px]:block">
                Develop skills
              </p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[8%] left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-xl border border-white/10 bg-[#15111e]/95 p-2 shadow-xl sm:bottom-[13%] sm:gap-3 sm:p-4"
          >
            <div className="rounded-lg bg-[#8804E4]/20 p-1.5 text-[#d4aaff] sm:p-2">
              <Users size={16} className="sm:h-[19px] sm:w-[19px]" />
            </div>
            <div>
              <p className="text-[11px] font-bold sm:text-xs">Connect</p>
              <p className="hidden text-[10px] text-[#9991a5] min-[380px]:block">
                Find opportunities
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#8804E4]/50 to-transparent" />
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 sm:py-28">
      <div className="container-main grid gap-6 text-center sm:gap-12 lg:grid-cols-2 lg:items-end lg:text-left">
        <div>
          <p className="section-label">01 / Who we are</p>
          <h2 className="mx-auto mt-5 max-w-[600px] text-[30px] font-extrabold leading-tight tracking-[-1.8px] sm:mt-6 sm:text-5xl sm:tracking-[-2px] lg:mx-0">
            More than a company.
            <span className="text-gradient"> A growing ecosystem.</span>
          </h2>
        </div>

        <p className="mx-auto max-w-[500px] text-[13px] leading-7 text-[#a7a1b0] sm:text-sm sm:leading-8 lg:mx-0">
          We believe the future belongs to people who can imagine, build and
          create. Buildspire brings technology, learning and opportunity
          together to help businesses grow and people reach their potential.
        </p>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="pb-16 sm:pb-28">
      <div className="container-main">
        <div className="mb-7 flex flex-col items-center gap-3 text-center sm:mb-10 lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <div>
            <p className="section-label">02 / The Buildspire ecosystem</p>
            <h2 className="mt-4 text-[29px] font-extrabold tracking-[-1.5px] sm:text-4xl">
              Three pillars. One vision.
            </h2>
          </div>
          <p className="max-w-[340px] text-xs leading-6 text-[#9992a2]">
            Different paths, one shared ambition: creating meaningful impact.
          </p>
        </div>

        <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <motion.a
                key={pillar.name}
                href={pillar.href}
                whileHover={{ y: -7 }}
                transition={{ duration: 0.25 }}
                className="group flex flex-col items-center rounded-2xl border border-white/[0.08] bg-[#100e16] p-5 text-center transition hover:border-[#8804E4]/50 hover:bg-[#15111f] sm:p-7 md:items-start md:text-left"
              >
                <div className="flex w-full items-center justify-between">
                  <span className="text-xs font-bold text-[#766e81]">
                    {pillar.number}
                  </span>
                  <div className="rounded-xl border border-[#8804E4]/25 bg-[#8804E4]/10 p-3 text-[#d4aaff]">
                    <Icon size={22} />
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-extrabold sm:mt-12">
                  {pillar.name}
                  <span className="text-[#8804E4]">.</span>
                </h3>

                <p className="mt-3 max-w-[310px] text-[13px] leading-7 text-[#9992a2] sm:mt-4 sm:text-sm">
                  {pillar.description}
                </p>

                <div className="mt-6 flex w-full items-center justify-between border-t border-white/[0.08] pt-5 text-xs font-bold sm:mt-8">
                  <span className="text-[#d4aaff]">{pillar.detail}</span>
                  <ArrowUpRight
                    size={17}
                    className="text-[#8804E4] transition group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section
      id="solutions"
      className="border-y border-white/[0.06] bg-[#0d0b12] py-16 sm:py-28"
    >
      <div className="container-main">
        <div className="grid gap-8 text-center lg:grid-cols-[.85fr_1.15fr] lg:gap-10 lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <p className="section-label">03 / Buildspire Solutions</p>
            <h2 className="mt-5 max-w-[500px] text-[30px] font-extrabold leading-tight tracking-[-1.8px] sm:text-5xl sm:tracking-[-2px]">
              Technology built around
              <span className="text-gradient"> real problems.</span>
            </h2>
            <p className="mt-5 max-w-[420px] text-[13px] leading-7 text-[#9992a2] sm:mt-6 sm:text-sm sm:leading-8">
              We work with businesses to turn challenges into practical
              solutions through technology, creativity and thoughtful execution.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex min-h-[48px] items-center gap-3 rounded-full bg-[#8804E4] px-6 py-3 text-xs font-bold transition hover:bg-[#7200c4] sm:mt-9 sm:py-4"
            >
              Discuss a project <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="flex flex-col items-center rounded-2xl border border-white/[0.07] bg-[#121019] p-5 text-center transition hover:border-[#8804E4]/40 sm:p-6 lg:items-start lg:text-left"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-[#8804E4]/10 p-3 text-[#d4aaff] sm:mb-7">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-sm font-bold">{service.title}</h3>
                  <p className="mt-3 max-w-[280px] text-xs leading-7 text-[#9992a2]">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Academy() {
  return (
    <section id="academy" className="py-16 sm:py-28">
      <div className="container-main">
        <div className="relative flex flex-col items-center overflow-hidden rounded-[24px] border border-[#8804E4]/25 bg-gradient-to-br from-[#210d35] via-[#130e1d] to-[#0e0c13] p-6 text-center sm:rounded-[28px] sm:p-14 lg:items-start lg:text-left">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#8804E4]/20 blur-[100px]" />

          <div className="relative z-10 flex w-full flex-col items-center lg:items-start">
            <p className="section-label">04 / Buildspire Academy</p>
            <h2 className="mt-5 max-w-[680px] text-[30px] font-extrabold leading-tight tracking-[-1.8px] sm:mt-6 sm:text-6xl sm:tracking-[-2px]">
              Your potential deserves
              <span className="text-gradient"> a platform.</span>
            </h2>
            <p className="mt-5 max-w-[530px] text-[13px] leading-7 text-[#b5aabd] sm:mt-6 sm:text-sm sm:leading-8">
              Explore practical learning paths, develop valuable skills and
              discover new directions across Technology, Engineering and Finance.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-2 sm:mt-10 sm:gap-3 lg:justify-start">
              {["Technology", "Engineering", "Finance"].map((track) => (
                <span
                  key={track}
                  className="rounded-full border border-white/15 px-4 py-2.5 text-[11px] font-semibold text-[#e2d7f3] sm:px-5 sm:py-3 sm:text-xs"
                >
                  {track}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-xs font-bold text-black transition hover:bg-[#ead6ff] sm:mt-10 sm:py-4"
            >
              Explore the Academy <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section
      id="community"
      className="border-y border-white/[0.06] bg-[#0d0b12] py-16 sm:py-28"
    >
      <div className="container-main grid gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <p className="section-label">05 / Buildspire Community</p>
          <h2 className="mt-5 max-w-[500px] text-[30px] font-extrabold leading-tight tracking-[-1.8px] sm:text-5xl sm:tracking-[-2px]">
            Better things happen
            <span className="text-gradient"> together.</span>
          </h2>
          <p className="mt-5 max-w-[480px] text-[13px] leading-7 text-[#9992a2] sm:mt-6 sm:text-sm sm:leading-8">
            A community for ambitious people to learn, share ideas, meet
            mentors and discover opportunities to grow.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex min-h-[44px] items-center justify-center gap-3 text-sm font-bold text-[#d4aaff] transition hover:text-white sm:mt-9"
          >
            Become part of the community <ArrowRight size={17} />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: Users, title: "Community", desc: "Find your people." },
            {
              icon: GraduationCap,
              title: "Mentorship",
              desc: "Learn from others.",
            },
            { icon: Globe2, title: "Networking", desc: "Build connections." },
            {
              icon: Sparkles,
              title: "Opportunities",
              desc: "Discover what's next.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex flex-col items-center rounded-2xl border border-white/[0.07] bg-[#131019] p-4 text-center transition hover:border-[#8804E4]/40 sm:p-6"
              >
                <Icon className="mb-4 text-[#d4aaff] sm:mb-7" size={23} />
                <h3 className="text-[13px] font-bold sm:text-sm">{item.title}</h3>
                <p className="mt-2 text-[11px] text-[#9992a2] sm:text-xs">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Opportunities() {
  return (
    <section id="opportunities" className="py-16 sm:py-28">
      <div className="container-main flex flex-col items-center text-center">
        <p className="section-label">06 / Opportunities</p>
        <h2 className="mt-5 max-w-[600px] text-[29px] font-extrabold tracking-[-1.5px] sm:text-4xl">
          Your next opportunity starts here.
        </h2>
        <p className="mt-4 text-[13px] text-[#9992a2] sm:text-sm">
          Discover opportunities to learn, compete and grow.
        </p>

        <span className="mt-5 rounded-full border border-[#8804E4]/30 bg-[#8804E4]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[#d4aaff]">
          Coming soon
        </span>

        <div className="mt-7 w-full rounded-2xl border border-dashed border-white/15 bg-[#100e16] px-5 py-10 text-center sm:mt-10 sm:px-6 sm:py-14">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8804E4]/10 text-[#d4aaff]">
            <Sparkles size={24} />
          </div>
          <h3 className="text-base font-bold sm:text-lg">
            Something exciting is taking shape.
          </h3>
          <p className="mx-auto mt-3 max-w-[420px] text-xs leading-7 text-[#9992a2]">
            We're preparing a space for grants, internships, hackathons,
            competitions and other opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((previous) => ({ ...previous, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("");
    setSuccess(false);

    const { error } = await supabase
      .from("client_enquiries")
      .insert([form]);

    setLoading(false);

    if (error) {
      console.error("Enquiry submission error:", error);
      setMessage("Something went wrong. Please try again.");
      return;
    }

    setSuccess(true);
    setMessage("Your enquiry has been received. We'll be in touch!");
    setForm(initialForm);
  }

  return (
    <section id="contact" className="pb-14 sm:pb-24">
      <div className="container-main">
        <div className="relative overflow-hidden rounded-[24px] border border-[#8804E4]/30 bg-[#171020] px-5 py-10 sm:rounded-[28px] sm:px-8 sm:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(136,4,228,.25),transparent_65%)]" />

          <div className="relative z-10 mx-auto grid max-w-5xl items-center gap-9 lg:grid-cols-[.85fr_1.15fr] lg:gap-12">
            <div className="text-center lg:text-left">
              <p className="section-label">
                Let's create something meaningful
              </p>

              <h2 className="mt-5 text-[30px] font-extrabold tracking-[-1.8px] sm:text-5xl sm:tracking-[-2px]">
                The future doesn't
                <span className="text-gradient"> build itself.</span>
              </h2>

              <p className="mt-5 text-[13px] leading-7 text-[#b0a6b9] sm:text-sm sm:leading-8">
                Have a business challenge, an idea or a project in mind?
                Tell us what you're working on. Let's explore how we can
                build something meaningful together.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3 text-[11px] font-semibold text-[#d4aaff] lg:justify-start">
                <span>Ideas</span>
                <span className="text-[#8804E4]">/</span>
                <span>Technology</span>
                <span className="text-[#8804E4]">/</span>
                <span>Solutions</span>
              </div>
            </div>

            <div className="w-full rounded-2xl border border-white/10 bg-[#100d16] p-5 text-left sm:p-7">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">
                  Tell us about your project.
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#9992a2]">
                  Share a little about what you're looking to build.
                  Our team will get back to you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-semibold text-[#d4cddd]">
                      Full name *
                    </label>
                    <input
                      required
                      maxLength={100}
                      autoComplete="name"
                      className={fieldClass}
                      placeholder="Your name"
                      value={form.full_name}
                      onChange={(e) =>
                        updateField("full_name", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold text-[#d4cddd]">
                      Email address *
                    </label>
                    <input
                      required
                      type="email"
                      maxLength={254}
                      autoComplete="email"
                      className={fieldClass}
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold text-[#d4cddd]">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      maxLength={30}
                      autoComplete="tel"
                      className={fieldClass}
                      placeholder="+234..."
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold text-[#d4cddd]">
                      Company / Organisation
                    </label>
                    <input
                      maxLength={150}
                      autoComplete="organization"
                      className={fieldClass}
                      placeholder="Company name"
                      value={form.company_name}
                      onChange={(e) =>
                        updateField("company_name", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-[#d4cddd]">
                    What do you need? *
                  </label>
                  <select
                    required
                    className={fieldClass}
                    value={form.service_type}
                    onChange={(e) =>
                      updateField("service_type", e.target.value)
                    }
                  >
                    <option value="">Select a service</option>
                    <option value="Website Development">
                      Website Development
                    </option>
                    <option value="Software Development">
                      Software Development
                    </option>
                    <option value="Mobile Application">
                      Mobile Application
                    </option>
                    <option value="Digital Product Development">
                      Digital Product Development
                    </option>
                    <option value="Custom Technology Solution">
                      Custom Technology Solution
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-[#d4cddd]">
                    Tell us about your project *
                  </label>
                  <textarea
                    required
                    minLength={10}
                    maxLength={5000}
                    rows={5}
                    className={`${fieldClass} resize-y`}
                    placeholder="What are you trying to build? What problem are you looking to solve?"
                    value={form.project_description}
                    onChange={(e) =>
                      updateField("project_description", e.target.value)
                    }
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-semibold text-[#d4cddd]">
                      Estimated budget
                    </label>
                    <select
                      className={fieldClass}
                      value={form.budget}
                      onChange={(e) => updateField("budget", e.target.value)}
                    >
                      <option value="">Select budget</option>
                      <option value="Below ₦100,000">Below ₦100,000</option>
                      <option value="₦100,000 – ₦300,000">
                        ₦100,000 – ₦300,000
                      </option>
                      <option value="₦300,000 – ₦500,000">
                        ₦300,000 – ₦500,000
                      </option>
                      <option value="₦500,000 – ₦1,000,000">
                        ₦500,000 – ₦1,000,000
                      </option>
                      <option value="Above ₦1,000,000">
                        Above ₦1,000,000
                      </option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold text-[#d4cddd]">
                      Expected timeline
                    </label>
                    <select
                      className={fieldClass}
                      value={form.timeline}
                      onChange={(e) => updateField("timeline", e.target.value)}
                    >
                      <option value="">Select timeline</option>
                      <option value="As soon as possible">
                        As soon as possible
                      </option>
                      <option value="Within 2 weeks">Within 2 weeks</option>
                      <option value="Within a month">Within a month</option>
                      <option value="1–3 months">1–3 months</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                {message && (
                  <div
                    role="status"
                    className={`flex items-start gap-2 rounded-xl border p-4 text-xs leading-6 ${
                      success
                        ? "border-green-500/20 bg-green-500/10 text-green-300"
                        : "border-red-500/20 bg-red-500/10 text-red-300"
                    }`}
                  >
                    {success && (
                      <CheckCircle2
                        size={17}
                        className="mt-1 shrink-0"
                      />
                    )}
                    {message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-[#8804E4] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#7200c4] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 size={17} className="animate-spin" />
                      Sending enquiry...
                    </>
                  ) : (
                    <>
                      Submit project enquiry
                      <ArrowUpRight size={17} />
                    </>
                  )}
                </button>

                <p className="text-center text-[10px] leading-5 text-[#77717f]">
                  Your information will only be used to respond to your enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#08070b] py-9 sm:py-12">
      <div className="container-main">
        <div className="flex flex-col items-center justify-between gap-8 text-center sm:flex-row sm:items-start sm:text-left">
          <div className="flex max-w-[300px] flex-col items-center sm:items-start">
            <a
              href="#"
              className="flex items-center gap-3 text-2xl font-extrabold tracking-[-1.5px]"
            >
              <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-[#8804E4]/40">
                <Image
                  src="/images/buildspire-logo.png"
                  alt=""
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </span>
              BUILD<span className="text-[#8804E4]">SPIRE.</span>
            </a>
            <p className="mt-4 text-xs leading-7 text-[#898291]">
              Technology. Innovation. Opportunity.
              <br />
              Building what matters. Creating what's next.
            </p>
          </div>

          <div className="grid w-full max-w-[360px] grid-cols-3 gap-4 text-left sm:w-auto sm:max-w-none sm:gap-10">
            <div>
              <p className="mb-4 text-xs font-bold">Explore</p>
              {navigation.slice(0, 3).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="mb-3 block min-h-[28px] text-[11px] text-[#898291] transition hover:text-white sm:text-xs"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div>
              <p className="mb-4 text-xs font-bold">Discover</p>
              {navigation.slice(3).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="mb-3 block min-h-[28px] text-[11px] text-[#898291] transition hover:text-white sm:text-xs"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div>
              <p className="mb-4 text-xs font-bold">Get in touch</p>
              <a
                href="#contact"
                className="inline-block min-h-[28px] text-[11px] text-[#898291] transition hover:text-white sm:text-xs"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/[0.08] pt-6 text-center text-[10px] text-[#77717f] sm:mt-12 sm:flex-row sm:pt-7">
          <p>© 2026 Buildspire. All rights reserved.</p>
          <p>Built for what's next.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pillars />
        <Solutions />
        <Academy />
        <Community />
        <Opportunities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
