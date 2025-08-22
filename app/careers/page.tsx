export const metadata = { title: "Careers | VeloCloud AI" };
export default function Page(){
  return (
    <div className="container py-16 space-y-6">
      <h1 className="text-4xl font-semibold">Careers</h1>
      <p className="text-white/80">No open roles yet—introduce yourself and we’ll keep you in the loop.</p>
      <div className="card p-6">
        <div className="text-xl font-semibold mb-2">General Application</div>
        <p className="text-white/80">Send your resume and a quick note to <a className="underline" href="mailto:david@velocloudai.com">david@velocloudai.com</a>.</p>
      </div>
    </div>
  )
}
