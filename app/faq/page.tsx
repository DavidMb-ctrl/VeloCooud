export const metadata = { title: "FAQ | VeloCloud AI" };
const faqs = [
  { q: "What industries do you serve?", a: "We’re industry-agnostic—any B2B looking to automate and grow." },
  { q: "How do you deliver leads?", a: "We send leads straight to your inbox or CRM, with optional alerts via Airtable and SendGrid. Simple, fast, and organized." },
  { q: "Do you offer support?", a: "Yes—ongoing support plans are available." },
];
export default function Page(){
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-semibold">FAQ</h1>
      <div className="mt-8 grid gap-4">
        {faqs.map(f => (
          <div key={f.q} className="card p-5">
            <div className="text-lg font-semibold">{f.q}</div>
            <div className="text-white/80 mt-1">{f.a}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
