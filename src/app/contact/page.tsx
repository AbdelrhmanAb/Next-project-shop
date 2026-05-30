export default function Contact() {
  return (
    <main className="min-h-screen bg-base-100 font-sans">

      {/* Hero */}
      <section className="py-20 text-center border-b border-base-300 px-4">
        <div className="inline-flex items-center gap-2 bg-base-200 border border-base-300 rounded-full px-4 py-1 text-xs text-base-content/50 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/><path d="m3 7 9 6 9-6"/></svg>
          Contact us
        </div>
        <h1 className="text-4xl md:text-5xl font-medium leading-tight mb-3">
          We'd love to hear<br />from you
        </h1>
        <p className="text-base text-base-content/50 max-w-md mx-auto leading-relaxed">
          Questions about Alpha? Our team usually responds within a few hours.
        </p>
      </section>

      {/* Body */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 px-6 py-12">

        {/* Form */}
        <div className="md:pr-10 md:border-r border-base-300 space-y-5">
          <p className="text-[11px] tracking-widest uppercase text-base-content/30">Send a message</p>

          <div className="space-y-1">
            <label className="text-sm text-base-content/60">Your name</label>
            <input type="text" placeholder="Ahmed Ali" className="input input-bordered w-full bg-base-200 focus:outline-none text-sm" />
          </div>
          <div className="space-y-1">
            <label className="text-sm text-base-content/60">Email address</label>
            <input type="email" placeholder="ahmed@example.com" className="input input-bordered w-full bg-base-200 focus:outline-none text-sm" />
          </div>
          <div className="space-y-1">
            <label className="text-sm text-base-content/60">Subject</label>
            <input type="text" placeholder="What's this about?" className="input input-bordered w-full bg-base-200 focus:outline-none text-sm" />
          </div>
          <div className="space-y-1">
            <label className="text-sm text-base-content/60">Message</label>
            <textarea rows={5} placeholder="Write your message..." className="textarea textarea-bordered w-full bg-base-200 focus:outline-none text-sm resize-none" />
          </div>

          <button className="btn btn-neutral btn-block gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2 11 13"/><path d="M22 2 15 22 11 13 2 9l20-7z"/></svg>
            Send message
          </button>
        </div>

        {/* Info */}
        <div className="md:pl-10 mt-10 md:mt-0 space-y-0">
          <p className="text-[11px] tracking-widest uppercase text-base-content/30 mb-5">Contact info</p>

          {[
            { icon: "✉", label: "Email", value: "support@alpha.com", sub: "For support & general inquiries" },
            { icon: "📞", label: "Phone", value: "+1 (234) 567-890", sub: "Mon – Fri, 9am to 6pm" },
            { icon: "📍", label: "Office", value: "123 Alpha Street", sub: "New York, USA" },
            { icon: "⏱", label: "Response time", value: "Within a few hours", sub: "On business days" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-4 py-4 border-b border-base-300 last:border-none">
              <div className="w-9 h-9 rounded-lg bg-base-200 border border-base-300 flex items-center justify-center text-base shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-xs text-base-content/40 mb-0.5">{item.label}</p>
                <p className="text-sm font-medium">{item.value}</p>
                <p className="text-xs text-base-content/50 mt-0.5">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}