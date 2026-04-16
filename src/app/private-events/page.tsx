import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Private Events",
  description:
    "Book private events at Elgin Public House and download the current room and party-pricing PDFs for Pub 217 upstairs and group dining.",
};

export default function PrivateEventsPage() {
  return (
    <>
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(203,144,87,0.22),_transparent_35%),linear-gradient(180deg,_#112235_0%,_#08131f_100%)]" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <AnimatedSection>
            <p className="text-copper text-sm tracking-[0.2em] uppercase mb-3">
              Private Events
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6">
              Upstairs Gatherings With Real Pricing
            </h1>
            <p className="text-cream/80 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              {site.privateEvents.roomName} is part of the real Elgin Public
              House business, and this page keeps that lead path intact with
              direct download access to the live pricing PDFs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14">
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-10 h-full">
                <p className="text-copper text-sm tracking-[0.22em] uppercase mb-3 font-semibold">
                  Pub 217 Upstairs
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-5">
                  Built for birthday dinners, office hangs, rehearsal nights,
                  and downtown celebrations.
                </h2>
                <div className="space-y-4 text-navy/70 leading-relaxed">
                  <p>
                    The live site already treats private events as a real
                    revenue path, so this redesign preserves it instead of
                    burying it.
                  </p>
                  <p>
                    Use the downloadable pricing PDFs below to review the main
                    restaurant room rates, mingle menu pricing, and the pasta
                    and salad party options before you reach out.
                  </p>
                  <p>
                    For booking questions, call{" "}
                    <a
                      href={site.contact.phoneHref}
                      className="text-copper hover:text-copper-light transition-colors font-semibold"
                    >
                      {site.contact.phone}
                    </a>{" "}
                    or email{" "}
                    <a
                      href={site.contact.emailHref}
                      className="text-copper hover:text-copper-light transition-colors font-semibold"
                    >
                      {site.contact.email}
                    </a>
                    .
                  </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href={site.contact.phoneHref}
                    className="bg-copper hover:bg-copper-light text-cream px-7 py-3.5 rounded text-sm font-semibold tracking-wide transition-all text-center"
                  >
                    Call About Events
                  </a>
                  <a
                    href={site.contact.emailHref}
                    className="border-2 border-navy/15 hover:border-copper text-navy hover:text-copper px-7 py-3.5 rounded text-sm font-semibold tracking-wide transition-all text-center"
                  >
                    Email Event Inquiry
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="animate-fade-up" delay="delay-100">
              <div className="bg-navy rounded-2xl p-8 sm:p-10 text-cream h-full">
                <p className="text-copper text-sm tracking-[0.22em] uppercase mb-5 font-semibold">
                  Download Pricing PDFs
                </p>
                <div className="space-y-4">
                  {site.privateEvents.pdfs.map((pdf) => (
                    <a
                      key={pdf.href}
                      href={pdf.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl border border-copper/20 bg-navy-light hover:border-copper hover:-translate-y-0.5 transition-all p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-bold text-cream mb-1">
                            {pdf.title}
                          </h3>
                          <p className="text-cream/55 text-sm">
                            Open the original pricing PDF from the live site.
                          </p>
                        </div>
                        <span className="text-copper text-sm font-semibold whitespace-nowrap">
                          Download PDF
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
