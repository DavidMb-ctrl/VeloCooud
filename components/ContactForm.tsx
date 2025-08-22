"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      company: { value: string };
      message: { value: string };
      reset: () => void;
    };

    const formData = {
      name: target.name.value.trim(),
      email: target.email.value.trim(),
      company: target.company.value.trim() || "N/A",
      message: target.message.value.trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        target.reset();
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={submit} className="card p-6 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm text-white/70">Name</label>
          <input
            name="name"
            required
            className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div>
          <label className="block text-sm text-white/70">Email</label>
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm text-white/70">Company</label>
          <input
            name="company"
            placeholder="(Optional)"
            className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm text-white/70">How can we help?</label>
          <textarea
            name="message"
            rows={5}
            required
            className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </div>
      <button className="btn-primary" type="submit">Send</button>
      {status && <div className="text-sm text-white/80">{status}</div>}
    </form>
  );
}
