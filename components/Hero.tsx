"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary to-primaryAlt"></div>
      <div className="container relative py-20 md:py-28">
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}
          className="text-4xl md:text-6xl font-semibold leading-tight">
          Intelligence in Every Cloud
        </motion.h1>
        <motion.p initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:0.1,duration:0.6}}
          className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl">
          CRMs, automations, websites, and lead generation—built to help your business grow, save time, and close more deals.
        </motion.p>
        <div className="mt-8 flex items-center gap-4">
          <Link href="/contact" className="btn-primary">Contact Us</Link>
          <Link href="/services" className="btn-outline">Explore Services</Link>
        </div>
        <div className="mt-14">
          <Image src="/velocloud-logo.png" alt="VeloCloud AI" width={840} height={420} className="opacity-90 mx-auto"/>
        </div>
      </div>
      <div className="pointer-events-none absolute -top-16 -left-16 h-96 w-96 rounded-full bg-accent/20 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-96 w-96 rounded-full bg-accent2/20 blur-3xl"></div>
    </section>
  )
}
