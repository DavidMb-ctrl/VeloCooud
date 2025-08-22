import ServicesGrid from "../../components/ServicesGrid";
import WhatYouGet from "../../components/WhatYouGet";


export const metadata = { title: "Services | VeloCloud AI" };

export default function Page() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-semibold">Services</h1>
      <p className="mt-2 text-white/70 max-w-2xl">
        We build systems that scale—CRMs, automations, websites, and Lead generations.
      </p>

      <div className="mt-10">
        <ServicesGrid />
      </div>

      <div className="mt-16">
        <WhatYouGet />
      </div>
    </div>
  );
}
