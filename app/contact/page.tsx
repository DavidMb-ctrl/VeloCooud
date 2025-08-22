import ContactForm from "../../components/ContactForm";
export const metadata = { title: "Contact | VeloCloud AI" };
export default function Page(){
  return (
    <div className="container py-16 space-y-6">
      <h1 className="text-4xl font-semibold">Contact</h1>
      <p className="text-white/80">Tell us what you need. We’ll be in touch as soon as possible.</p>
      <ContactForm />
    </div>
  )
}
