// components/WhatYouGet.tsx
export default function WhatYouGet() {
    const data = [
      {
        title: "Lead Generation",
        items: ["AI Cold Email Systems", "Application Systems", "Content Systems"],
      },
      {
        title: "Project Management",
        items: ["AI Automated Fulfillment", "AI Onboarding Systems", "PM Systems"],
      },
      {
        title: "Hiring Systems",
        items: ["Intake Systems", "AI Scoring Systems", "Trial Systems"],
      },
      {
        title: "Sales Administration",
        items: ["Customized CRMs", "AI Asset Generators", "AI Nurture Systems"],
      },
    ];
  
    return (
      <section className="container py-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">What you get</h2>
        <div className="space-y-6">
          {data.map((section) => (
            <div key={section.title} className="grid md:grid-cols-4 bg-white/5 rounded-xl p-6 gap-4">
              <h3 className="font-bold col-span-1">{section.title}</h3>
              {section.items.map((item) => (
                <div key={item} className="col-span-1 text-white/90">{item}</div>
              ))}
            </div>
          ))}
        </div>
      </section>
    );
  }
  