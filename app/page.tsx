export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Prompt Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
          Stop Wasting Tokens.<br />Cut Your AI Costs.
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Paste any AI prompt and instantly detect redundant instructions, bloated context, and token-wasting patterns — with optimized rewrites and real cost savings estimates.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Saving — $29/mo
        </a>
        <p className="text-[#8b949e] text-xs mt-3">No credit card required for free analysis. Cancel anytime.</p>

        {/* Demo box */}
        <div className="mt-12 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <p className="text-xs text-[#8b949e] uppercase tracking-widest mb-3 font-semibold">Example Analysis</p>
          <div className="bg-[#0d1117] rounded-lg p-4 mb-4 text-sm font-mono text-[#c9d1d9] border border-[#21262d]">
            <span className="text-[#f85149] line-through opacity-70">Please make sure to always remember to</span>{" "}
            <span className="text-[#3fb950]">Summarize</span> the following text in bullet points.
          </div>
          <div className="flex flex-wrap gap-3 text-xs">
            <span className="bg-[#f8514920] text-[#f85149] border border-[#f8514940] px-3 py-1 rounded-full">⚠ Redundant filler: 6 tokens removed</span>
            <span className="bg-[#3fb95020] text-[#3fb950] border border-[#3fb95040] px-3 py-1 rounded-full">✓ Optimized version ready</span>
            <span className="bg-[#58a6ff20] text-[#58a6ff] border border-[#58a6ff40] px-3 py-1 rounded-full">💰 ~$0.0012 saved per call</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$29</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited prompt analyses",
              "Token count & cost estimates",
              "Optimized prompt rewrites",
              "Pattern library (50+ waste patterns)",
              "Bulk prompt upload (CSV)",
              "API access for CI/CD pipelines",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the token analysis work?",
              a: "We use pattern matching against a library of 50+ known token-wasting patterns (filler phrases, redundant instructions, excessive context) combined with tiktoken-compatible counting to give you exact token and cost breakdowns."
            },
            {
              q: "Which AI models are supported?",
              a: "We support GPT-3.5, GPT-4, Claude, Gemini, and Llama token formats. Cost estimates are calculated using current public API pricing for each model."
            },
            {
              q: "Can I use this in my CI/CD pipeline?",
              a: "Yes. Pro subscribers get API access to run prompt analysis automatically before deployment, so token-wasting prompts never reach production."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} AI Prompt Token Leak Preventer. All rights reserved.
      </footer>
    </main>
  );
}
