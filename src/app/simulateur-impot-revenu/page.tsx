import IncomeTaxSimulator2026 from "../components/IncomeTaxSimulator2026";
import Footer from "../components/Footer";

export default function SimulateurImpotRevenuPage() {
  return (
    <>
      <main>
        {/* ── HERO ────────────────────────────────────────── */}
        <section className="bg-[#F1F8EA] pt-32 pb-12 md:pt-40 md:pb-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-4">
              Simulateur d&apos;impôt<br />
              <span className="text-turquoise-500">sur le revenu 2026</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Estimez votre impôt sur les revenus 2025 en quelques minutes —
              freelances, dirigeants de SASU/EURL, micro-entrepreneurs et LMNP.
            </p>
          </div>
        </section>

        {/* ── SIMULATEUR ──────────────────────────────────── */}
        <section className="bg-white py-10 md:py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <IncomeTaxSimulator2026 contactHref="/#contact" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
