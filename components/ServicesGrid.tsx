import { LayoutGrid, Workflow, Code2, LineChart } from "lucide-react";

const services = [
  { icon: LayoutGrid, title: "Websites", desc: "High-converting marketing sites and portals." },
  { icon: Workflow, title: "Automations", desc: "Automate repetitive tasks with AI and focus on what matters." },
  { icon: Code2, title: "CRMs", desc: "Pipeline clarity and automated follow-ups." },
  { icon: LineChart, title: "Lead Generation", desc: "Attract Clients Faster with AI-Powered Lead Gen." },
];

export default function ServicesGrid() {
  return (
    <section className="container py-16">
      <h2 className="text-3xl md:text-4xl font-semibold">What we build</h2>
      <p className="mt-2 text-white/70 max-w-2xl">AI-powered systems that turn operations into growth.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.title} className="card p-6">
              <Icon className="h-8 w-8 text-accent" />
              <div className="mt-1 text-xl font-semibold">{s.title}</div>
              <div className="mt-1 text-white/70 text-sm">{s.desc}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
