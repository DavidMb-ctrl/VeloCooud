export const metadata = { title: "About | VeloCloud AI" };

export default function Page() {
  return (
    <div className="container py-16 space-y-6">
      <h1 className="text-4xl font-semibold">About</h1>
      <p className="text-white/80 max-w-3xl text-lg">
        VeloCloud AI is all about helping your business take the next step in its journey.
        Whether you're looking to scale faster, save time, or streamline your operations,
        we build automation, CRMs, and lead generation systems that simplify your workflow and drive results.
        Our goal is to make your life easier—so you can focus on what matters most.
      </p>
      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-2">Our Principles</h2>
        <ul className="list-disc list-inside text-white/80 space-y-1">
          <li>Clarity beats complexity.</li>
          <li>Speed and reliability first.</li>
          <li>Design that earns trust.</li>
        </ul>
      </div>
    </div>
  );
}
