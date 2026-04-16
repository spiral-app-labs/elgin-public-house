import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Directions",
  description:
    "Visit Elgin Public House at 219 E Chicago St, Elgin, IL 60120. Call (847) 468-8810, email info@elginpublichouse.com, and find ordering and private-event details.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(203,144,87,0.22),_transparent_35%),linear-gradient(180deg,_#112235_0%,_#08131f_100%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <AnimatedSection>
            <p className="text-copper text-sm tracking-[0.2em] uppercase mb-3">
              Find Us
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6">
              Visit Us Downtown
            </h1>
            <p className="text-cream/80 text-base sm:text-lg max-w-2xl mx-auto">
              Walk in for dinner, order direct for pickup, or use the same call
              and email paths the live business already depends on.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-8">
              <AnimatedSection>
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
                  <h2 className="text-navy font-bold text-xl mb-4 flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-copper"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Address
                  </h2>
                  <p className="text-navy/70 text-lg">{site.address.street}</p>
                  <p className="text-navy/70 text-lg">
                    {site.address.city}, {site.address.region} {site.address.postalCode}
                  </p>
                  <a
                    href={site.address.mapsDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-copper hover:text-copper-light font-semibold text-sm transition-colors"
                  >
                    Get Directions &rarr;
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="animate-fade-up" delay="delay-100">
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
                  <h2 className="text-navy font-bold text-xl mb-4 flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-copper"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Hours
                  </h2>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-navy/70">Sunday &ndash; Thursday</span>
                      <span className="text-navy font-semibold">
                        {site.hours.sundayThursday}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-navy/70">Friday &ndash; Saturday</span>
                      <span className="text-navy font-semibold">
                        {site.hours.fridaySaturday}
                      </span>
                    </div>
                    <div className="border-t border-cream-dark pt-3 flex justify-between items-center">
                      <span className="text-navy/70">Kitchen</span>
                      <span className="text-copper font-semibold">
                        Open &apos;til Midnight
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="animate-fade-up" delay="delay-200">
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
                  <h2 className="text-navy font-bold text-xl mb-4 flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-copper"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Call Us
                  </h2>
                  <a
                    href={site.contact.phoneHref}
                    className="text-2xl sm:text-3xl font-bold text-copper hover:text-copper-light transition-colors"
                  >
                    {site.contact.phone}
                  </a>
                  <p className="text-navy/50 text-sm mt-2">
                    Walk-ins welcome and private-event questions encouraged
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="animate-fade-up" delay="delay-300">
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
                  <h2 className="text-navy font-bold text-xl mb-4">Email</h2>
                  <a
                    href={site.contact.emailHref}
                    className="text-copper hover:text-copper-light font-semibold transition-colors"
                  >
                    {site.contact.email}
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="animate-fade-up" delay="delay-400">
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
                  <h2 className="text-navy font-bold text-xl mb-4 flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-copper"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    Order Online
                  </h2>
                  <p className="text-navy/60 text-sm mb-4">
                    Order direct for pickup or use a delivery app
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={site.links.toast}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-copper hover:bg-copper-light text-cream px-6 py-3 rounded text-sm font-semibold transition-colors text-center"
                    >
                      Order Direct on Toast
                    </a>
                    <a
                      href={site.links.uberEats}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-forest hover:bg-forest-light text-cream px-6 py-3 rounded text-sm font-semibold transition-colors text-center"
                    >
                      Order on Uber Eats
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="animate-fade-up" delay="delay-500">
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
                  <h2 className="text-navy font-bold text-xl mb-4">
                    Private Events
                  </h2>
                  <p className="text-navy/60 text-sm mb-4">
                    Keep the upstairs booking path visible instead of making
                    owners hunt for it.
                  </p>
                  <a
                    href="/private-events"
                    className="inline-block border border-copper/30 text-copper hover:bg-copper hover:text-cream px-6 py-3 rounded text-sm font-semibold transition-colors"
                  >
                    View Private Events
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Map */}
            <AnimatedSection animation="animate-slide-in-right">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full min-h-[400px] lg:min-h-0">
                <a
                  href={site.address.mapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full min-h-[400px] flex-col items-center justify-center bg-navy text-center px-8"
                >
                  <svg className="w-12 h-12 text-copper mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-3xl font-bold text-cream mb-3">
                    {site.address.street}
                  </h3>
                  <p className="text-cream/70 text-lg mb-6">
                    {site.address.city}, {site.address.region} {site.address.postalCode}
                  </p>
                  <span className="inline-block border border-copper/40 text-copper px-5 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider">
                    Open in Google Maps
                  </span>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
