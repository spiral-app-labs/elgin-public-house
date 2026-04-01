import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Elgin Public House — a warm community pub in downtown Elgin, IL. Brass fixtures, glass bar back, live events upstairs, and the best burgers in town.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden">
        <div
          className="parallax-hero absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <AnimatedSection>
            <p className="text-copper text-sm tracking-[0.2em] uppercase mb-3">
              Our Story
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6">
              More Than a Pub
            </h1>
            <p className="text-cream/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Elgin Public House is where community, craft, and comfort come
              together in the heart of downtown Elgin.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=800&q=80"
                  alt="Warm pub interior with brass fixtures"
                  className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-4 -right-4 bg-copper text-cream px-5 py-3 rounded shadow-lg">
                  <span className="font-bold text-sm">Est. Downtown Elgin</span>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="animate-slide-in-right">
              <p className="text-copper text-sm tracking-[0.2em] uppercase mb-3">
                The Heart of Elgin
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
                A Community Gathering Place
              </h2>
              <div className="space-y-4 text-navy/70 leading-relaxed">
                <p>
                  Elgin Public House isn&apos;t your cookie-cutter chain
                  restaurant. From the brass fixtures and glass bar back to the
                  live performances hosted upstairs, every detail reflects our
                  commitment to creating a genuine neighborhood gathering place.
                </p>
                <p>
                  We take pride in our elevated pub food — from 8oz Angus beef
                  burgers on Turano pretzel rolls to our legendary Quad Burger
                  blending Beef, Elk, Bison, and Wild Boar. Add a Wagyu upgrade
                  and you&apos;ve got something truly special.
                </p>
                <p>
                  Our bar features an extensive craft beer selection, specialty
                  martinis, and a curated collection of whiskeys, vodkas, wines,
                  and ports. Whether it&apos;s lunch, a late-night bite (kitchen
                  open &apos;til midnight!), or catching a show upstairs — EPH
                  is where Elgin comes together.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              The EPH Experience
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Craft Bar",
                desc: "100+ craft beers, specialty martinis, wide selection of whiskeys, vodkas, wines, and ports. Our knowledgeable bartenders love matching you with your new favorite drink.",
                img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",
              },
              {
                title: "Live Events",
                desc: "Our upstairs space hosts plays, performances, and community events. EPH is more than food and drinks — it's a cultural hub for downtown Elgin.",
                img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80",
              },
              {
                title: "Late Night Kitchen",
                desc: "Cravings don't clock out at 9 PM. Our full kitchen stays open until midnight every single night — burgers, wings, and everything in between.",
                img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
              },
            ].map((feature, i) => (
              <AnimatedSection
                key={feature.title}
                animation="animate-fade-up"
                delay={`delay-${(i + 1) * 100}`}
              >
                <div className="group overflow-hidden rounded-lg bg-cream h-full">
                  <div className="overflow-hidden aspect-[3/2]">
                    <img
                      src={feature.img}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-navy font-bold text-xl mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-navy/60 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-4">
              Come See for Yourself
            </h2>
            <p className="text-cream/60 text-base sm:text-lg mb-8">
              219 E Chicago St, Downtown Elgin. Open daily 11 AM &ndash; 1 AM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/menu"
                className="bg-copper hover:bg-copper-light text-cream px-8 py-4 rounded text-base font-semibold tracking-wide transition-all"
              >
                View Our Menu
              </Link>
              <a
                href="tel:8474688810"
                className="border-2 border-cream/30 hover:border-cream/60 text-cream px-8 py-4 rounded text-base font-semibold tracking-wide transition-all"
              >
                Call (847) 468-8810
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
