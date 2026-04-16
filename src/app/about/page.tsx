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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(203,144,87,0.22),_transparent_35%),linear-gradient(180deg,_#112235_0%,_#08131f_100%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <AnimatedSection>
            <p className="text-copper text-sm tracking-[0.2em] uppercase mb-3">
              Our Story
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cream mb-6">
              More Than a Pub
            </h1>
            <p className="text-cream/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              A downtown Elgin tavern with a late-night kitchen, a serious bar
              program, and an upstairs room that keeps private events part of
              the real business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <div className="rounded-2xl bg-navy text-cream p-8 sm:p-10 shadow-xl">
                <p className="text-copper text-sm tracking-[0.22em] uppercase mb-4 font-semibold">
                  What Matters Here
                </p>
                <div className="space-y-5">
                  {[
                    "Historic downtown address with a kitchen open 'til midnight every night.",
                    "Burger-forward menu anchored by house signatures like the Quad, Mac Attack, and Ale House Grilled Cheese.",
                    "Pub 217 upstairs keeps private dinners and group nights part of the sales story.",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-copper flex-shrink-0" />
                      <p className="text-cream/75 leading-relaxed">{point}</p>
                    </div>
                  ))}
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
                  Elgin Public House earns its keep as a downtown tavern first:
                  late-night kitchen hours, a strong burger-and-sandwich lineup,
                  and a bar program that makes dinner turn into another round.
                </p>
                <p>
                  We take pride in our elevated pub food — from 8oz Angus beef
                  burgers on Turano pretzel rolls to our legendary Quad Burger
                  blending Beef, Elk, Bison, and Wild Boar. Add a Wagyu upgrade
                  and you&apos;ve got something truly special.
                </p>
                <p>
                  Upstairs events, direct Toast ordering, and the downtown
                  address are part of what make the business feel complete.
                  This redesign keeps those paths visible instead of hiding them
                  behind generic pub copy.
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
                desc: "Craft beer, martinis, whiskey, wine, and ports all stay part of the identity instead of getting buried under burger-only positioning.",
              },
              {
                title: "Pub 217 Upstairs",
                desc: "Private events remain a real booking path with pricing PDFs, call/email contact, and a clearer homepage presence.",
              },
              {
                title: "Late Night Kitchen",
                desc: "The midnight kitchen hook now shows up across the site because it is one of the strongest reasons the business stands out in Elgin.",
              },
            ].map((feature, i) => (
              <AnimatedSection
                key={feature.title}
                animation="animate-fade-up"
                delay={`delay-${(i + 1) * 100}`}
              >
                <div className="overflow-hidden rounded-lg bg-cream h-full border border-navy/10 p-6">
                  <div className="mb-4 h-1.5 w-16 rounded-full bg-copper/70" />
                  <div>
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
