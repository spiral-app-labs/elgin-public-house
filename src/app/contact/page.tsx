import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact & Directions",
  description:
    "Visit Elgin Public House at 219 E Chicago St, Elgin, IL 60120. Open daily 11 AM – 1 AM. Kitchen open until midnight. Call (847) 468-8810.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden">
        <div
          className="parallax-hero absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <AnimatedSection>
            <p className="text-copper text-sm tracking-[0.2em] uppercase mb-3">
              Find Us
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6">
              Visit Us Downtown
            </h1>
            <p className="text-cream/80 text-base sm:text-lg max-w-2xl mx-auto">
              Walk-ins always welcome. No reservations needed — just come
              hungry.
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
                  <p className="text-navy/70 text-lg">219 E Chicago St</p>
                  <p className="text-navy/70 text-lg">Elgin, IL 60120</p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=219+E+Chicago+St+Elgin+IL+60120"
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
                      <span className="text-navy/70">Monday &ndash; Sunday</span>
                      <span className="text-navy font-semibold">
                        11:00 AM &ndash; 1:00 AM
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
                    href="tel:8474688810"
                    className="text-2xl sm:text-3xl font-bold text-copper hover:text-copper-light transition-colors"
                  >
                    (847) 468-8810
                  </a>
                  <p className="text-navy/50 text-sm mt-2">
                    Walk-ins welcome &mdash; no reservations needed
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="animate-fade-up" delay="delay-300">
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
                    Get EPH delivered to your door
                  </p>
                  <a
                    href="https://www.ubereats.com/store/elgin-public-house/rIZ-rYlNTjygkE4VfUyv7g"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-forest hover:bg-forest-light text-cream px-6 py-3 rounded text-sm font-semibold transition-colors"
                  >
                    Order on Uber Eats
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Map */}
            <AnimatedSection animation="animate-slide-in-right">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full min-h-[400px] lg:min-h-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.8!2d-88.284!3d42.037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f0e3c4d4e9b1d%3A0x1234567890abcdef!2s219%20E%20Chicago%20St%2C%20Elgin%2C%20IL%2060120!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 400 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Elgin Public House location"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
