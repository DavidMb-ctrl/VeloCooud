export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary/70 mt-16">
      <div className="container grid gap-6 md:grid-cols-3 py-10">
        <div>
          <div className="text-lg font-semibold">VeloCloud AI</div>
          <div className="text-white/70">Intelligence in Every Cloud</div>
        </div>
        <div className="text-white/70">
          <div>Email: <a className="underline" href="mailto:david@velocloudai.com">david@velocloudai.com</a></div>
          <div>Phone: <a className="underline" href="tel:+13254330449">325-433-0449</a></div>
          <div>Address: 325 S Mesquite St, Arlington, TX</div>
        </div>
        <div className="text-white/60">© {new Date().getFullYear()} VeloCloud AI</div>
      </div>
    </footer>
  )
}
