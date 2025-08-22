import Link from "next/link";
export default function CTA(){
  return (
    <section className="container py-16">
      <div className="card p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-2xl font-semibold">Ready to make the smart choice?</div>
          <div className="text-white/70">Tell us what you need. We’ll reply fast.</div>
        </div>
        <Link href="/contact" className="btn-primary">Contact Us</Link>
      </div>
    </section>
  )
}
