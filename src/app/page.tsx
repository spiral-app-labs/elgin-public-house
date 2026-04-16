import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import Counter from "@/components/Counter";
import { site } from "@/lib/site";

const proofCards = [
  {
    label: "Yelp",
    stat: "600+",
    detail: "Verified public review volume for the downtown pub experience, burgers, and late-night kitchen.",
  },
  {
    label: "TripAdvisor",
    stat: "292",
    detail: "Strong local proof for a place people recommend when downtown Elgin needs a reliable dinner and drinks option.",
  },
  {
    label: "Pub 217",
    stat: "3",
    detail: "Downloadable party-pricing PDFs keep upstairs events visible as a real revenue path, not a buried add-on.",
  },
];

const featuredDishes = [
  {
    title: "Mac Attack",
    desc: "8oz Angus beef topped with crispy pork belly, creamy mac and cheese, and fried jalapenos.",
    price: "$18.99",
    tag: "Toast Best Seller",
  },
  {
    title: "Kentucky",
    desc: "Angus beef, cheddar, and Sweet Whiskey sauce with bacon, caramelized onions, and mushrooms.",
    price: "$18.99",
    tag: "Signature Burger",
  },
  {
    title: "Ale House Grilled Cheese",
    desc: "Provolone, American, and Chihuahua cheeses with tomatoes and bacon on thick sourdough.",
    price: "$15.99",
    tag: "Staff Favorite",
  },
  {
    title: "Fish Tacos",
    desc: "East Coast cod with cabbage, pico, avocado, corn-black bean salsa, and jalapeno vinaigrette.",
    price: "$18.99",
    tag: "Direct Menu Price",
  },
];

const drinks = [
  {
    category: "Craft Beer",
    icon: "🍺",
    desc: "100+ options. Local craft, imported classics, seasonal rotations. Whatever your style, we've got it on draft or in the bottle.",
    highlight: "Extensive rotating tap list",
  },
  {
    category: "Specialty Martinis",
    icon: "🍸",
    desc: "Hand-crafted signature martinis that go way beyond the basics. Creative, balanced, beautiful — bartenders who actually care.",
    highlight: "Signature house creations",
  },
  {
    category: "Whiskey Selection",
    icon: "🥃",
    desc: "A serious whiskey program. Bourbon, Scotch, Irish, Japanese — curated for depth. Your new favorite dram is waiting.",
    highlight: "Curated premium selection",
  },
  {
    category: "Wines & Ports",
    icon: "🍷",
    desc: "From approachable house pours to something worth savoring. A rotating wine selection and real ports for the discerning.",
    highlight: "Thoughtfully curated",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(203,144,87,0.25),_transparent_38%),linear-gradient(180deg,_#112235_0%,_#091521_60%,_#07111c_100%)]" />
        <div className="absolute inset-x-0 top-24 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-copper/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-24 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-copper/20 to-transparent" />

        {/* Midnight badge */}
        <div className="absolute top-24 right-6 sm:top-28 sm:right-10 z-20">
          <AnimatedSection animation="animate-fade-in" delay="delay-600">
            <div className="bg-copper text-cream text-xs sm:text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg shadow-copper/30 animate-float">
              🕛 Kitchen Open &apos;til Midnight
            </div>
          </AnimatedSection>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <AnimatedSection animation="animate-fade-in">
            <p className="text-copper text-xs sm:text-sm tracking-[0.4em] uppercase mb-5 font-semibold">
              Downtown Elgin Tavern · Bramble Route
            </p>
          </AnimatedSection>

          <AnimatedSection animation="animate-fade-up" delay="delay-200">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-cream leading-[1.05] mb-3 sm:mb-5">
              Late-Night Food.
              <br />
              <span className="text-shimmer">Upstairs Parties.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="animate-fade-up" delay="delay-400">
            <p className="text-cream/75 text-base sm:text-xl max-w-2xl mx-auto mb-3 leading-relaxed font-light">
              Quad burgers, serious whiskey, cold beer, and a kitchen that
              stays open while downtown Elgin is still out for the night.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="animate-fade-up" delay="delay-500">
            <p className="text-copper font-bold text-lg sm:text-2xl tracking-wide mb-8 sm:mb-10 uppercase">
              Kitchen Open &apos;til Midnight · Every Night
            </p>
          </AnimatedSection>

          <AnimatedSection animation="animate-fade-up" delay="delay-600">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={site.links.toast}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-copper hover:bg-copper-light text-cream px-10 py-4 rounded text-base font-bold tracking-wide transition-all hover:shadow-xl hover:shadow-copper/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                Order Direct on Toast
              </a>
              <Link
                href="/private-events"
                className="border-2 border-copper/40 hover:border-copper hover:text-copper text-cream px-10 py-4 rounded text-base font-bold tracking-wide transition-all"
              >
                Private Events
              </Link>
              <a
                href={site.address.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-cream/40 hover:border-copper hover:text-copper text-cream px-10 py-4 rounded text-base font-bold tracking-wide transition-all"
              >
                Get Directions
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-cream/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* ── QUICK MENU CTA BAR ── */}
      <section className="bg-navy border-b border-cream/10 py-3.5">
        <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
            <span className="text-cream/50 text-sm">
              <span className="text-copper font-bold">292</span> TripAdvisor reviews
            </span>
            <span className="text-cream/20 hidden sm:inline">·</span>
            <span className="text-cream/50 text-sm">
              <span className="text-copper font-bold">600+</span> Yelp reviews
            </span>
            <span className="text-cream/20 hidden sm:inline">·</span>
            <span className="text-cream/50 text-sm">
              <span className="text-copper font-bold">Pub 217</span> Upstairs events
            </span>
          </div>
          <Link
            href="/private-events"
            className="bg-copper/10 hover:bg-copper text-copper hover:text-cream border border-copper/30 hover:border-copper text-sm font-bold uppercase tracking-wider px-6 py-2 rounded transition-all whitespace-nowrap"
          >
            Private Events →
          </Link>
        </div>
      </section>

      {/* ── MIDNIGHT BANNER ── */}
      <section className="bg-copper py-4">
        <div className="mx-auto max-w-5xl px-4 flex items-center justify-center gap-4">
          <svg className="w-5 h-5 text-cream flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-cream font-bold text-sm sm:text-base tracking-widest uppercase">
            Kitchen Open &apos;til Midnight — Every Single Night
          </span>
          <svg className="w-5 h-5 text-cream flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-navy-light py-10 sm:py-14">
        <div className="mx-auto max-w-5xl px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <AnimatedSection animation="animate-fade-up" delay="delay-100">
            <div>
              <div className="text-copper text-4xl sm:text-5xl font-bold tabular-nums">
                <Counter end={631} suffix="+" />
              </div>
              <div className="text-cream/50 text-xs sm:text-sm mt-2 uppercase tracking-wider">Yelp Reviews</div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="animate-fade-up" delay="delay-200">
            <div>
              <div className="text-copper text-4xl sm:text-5xl font-bold tabular-nums">
                <Counter end={292} />
              </div>
              <div className="text-cream/50 text-xs sm:text-sm mt-2 uppercase tracking-wider">TripAdvisor Reviews</div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="animate-fade-up" delay="delay-300">
            <div>
              <div className="text-copper text-4xl sm:text-5xl font-bold tabular-nums">
                Pub<span className="text-copper-light text-3xl">217</span>
              </div>
              <div className="text-cream/50 text-xs sm:text-sm mt-2 uppercase tracking-wider">Upstairs Events Room</div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="animate-fade-up" delay="delay-400">
            <div>
              <div className="text-copper text-4xl sm:text-5xl font-bold">
                12<span className="text-copper-light text-3xl">am</span>
              </div>
              <div className="text-cream/50 text-xs sm:text-sm mt-2 uppercase tracking-wider">Kitchen Closes</div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PUB EXPERIENCE (Full-width atmospheric) ── */}
      <section className="relative py-28 sm:py-40 overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(203,144,87,0.09),_transparent_32%,_transparent_68%,_rgba(203,144,87,0.09))]" />
        <div className="absolute inset-y-0 left-[10%] w-px bg-copper/10" />
        <div className="absolute inset-y-0 right-[10%] w-px bg-copper/10" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <AnimatedSection animation="animate-fade-up">
            <p className="text-copper text-xs sm:text-sm tracking-[0.4em] uppercase mb-5 font-semibold">
              The EPH Experience
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-cream leading-tight mb-6">
              Craft Beer &bull; Late Night Kitchen
              <br />
              <span className="text-copper">Neighborhood Pub</span>
            </h2>
            <p className="text-cream/70 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
              Great food from a chef who actually gives a damn, a bar worth
              staying at, and an upstairs room that makes the whole place feel
              bigger than a standard neighborhood pub.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="animate-fade-up" delay="delay-200">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {["Craft Beer", "Specialty Martinis", "Whiskey Bar", "Kitchen 'til Midnight", "Pub 217 Upstairs", "Historic Downtown"].map((tag) => (
                <span
                  key={tag}
                  className="border border-copper/50 text-copper text-xs sm:text-sm font-semibold uppercase tracking-wider px-4 py-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FEATURED DISHES ── */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <p className="text-copper text-sm tracking-[0.25em] uppercase mb-3 font-semibold">
              Chef Greg&apos;s Kitchen
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
              Direct-Order Best Sellers
            </h2>
            <p className="text-navy/55 text-base sm:text-lg max-w-2xl mx-auto">
              Key dishes now carry current first-party Toast pricing so the menu
              feels like a real sales tool instead of a mood board.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish, i) => (
              <AnimatedSection
                key={dish.title}
                animation="animate-fade-up"
                delay={`delay-${(i + 1) * 100}`}
              >
                <div className="bg-white rounded-xl border border-navy/10 shadow-md h-full flex flex-col p-6">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="bg-copper/10 text-copper text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                      {dish.tag}
                    </div>
                    <div className="text-navy font-bold text-lg">{dish.price}</div>
                  </div>
                  <h3 className="text-navy font-bold text-lg mb-2">{dish.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed flex-1">{dish.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-block bg-navy hover:bg-navy-light text-cream px-10 py-4 rounded text-base font-bold tracking-wide transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              View Full Menu
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PRIVATE EVENTS ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-8 lg:gap-12 items-stretch">
            <AnimatedSection animation="animate-slide-in-left">
              <div className="bg-navy rounded-2xl p-8 sm:p-10 h-full">
                <p className="text-copper text-sm tracking-[0.25em] uppercase mb-3 font-semibold">
                  Private Events
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-5">
                  Upstairs dinners and downtown party nights deserve a real
                  sales path.
                </h2>
            <p className="text-cream/60 text-base leading-relaxed mb-6">
                  Pub 217 is a real upstairs business path, and this pass keeps
                  it visible with downloadable pricing PDFs, direct contact
                  routes, and a stronger homepage position.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/private-events"
                    className="bg-copper hover:bg-copper-light text-cream px-7 py-3.5 rounded text-sm font-semibold tracking-wide transition-all text-center"
                  >
                    View Private Events
                  </Link>
                  <a
                    href={site.contact.emailHref}
                    className="border-2 border-cream/20 hover:border-copper text-cream hover:text-copper px-7 py-3.5 rounded text-sm font-semibold tracking-wide transition-all text-center"
                  >
                    Email Event Inquiry
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="animate-slide-in-right">
              <div className="grid gap-4">
                {site.privateEvents.pdfs.map((pdf) => (
                  <a
                    key={pdf.href}
                    href={pdf.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl border border-navy/10 bg-cream hover:border-copper hover:-translate-y-0.5 transition-all p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-copper text-xs uppercase tracking-[0.2em] mb-2">
                          Live-Site PDF
                        </p>
                        <h3 className="text-navy text-xl font-bold">
                          {pdf.title}
                        </h3>
                      </div>
                      <span className="text-copper font-semibold text-sm whitespace-nowrap">
                        Download
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── DRINK MENU SPOTLIGHT ── */}
      <section className="py-16 sm:py-24 bg-navy">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <p className="text-copper text-sm tracking-[0.25em] uppercase mb-3 font-semibold">
              The Bar Program
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-4">
              Drinks That Actually Impress
            </h2>
            <p className="text-cream/55 text-base sm:text-lg max-w-2xl mx-auto">
              Extensive beer list. Specialty martinis. A whiskey selection that
              takes this pub seriously. Wines, ports, and more.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {drinks.map((drink, i) => (
              <AnimatedSection
                key={drink.category}
                animation="animate-fade-up"
                delay={`delay-${(i + 1) * 100}`}
              >
                <div className="drink-card bg-navy-light border border-cream/10 rounded-xl p-6 sm:p-7 h-full flex flex-col">
                  <div className="text-4xl mb-4">{drink.icon}</div>
                  <h3 className="text-copper font-bold text-lg mb-2">{drink.category}</h3>
                  <p className="text-cream/60 text-sm leading-relaxed flex-1 mb-4">{drink.desc}</p>
                  <span className="text-copper/70 text-xs font-semibold uppercase tracking-wider border border-copper/20 px-3 py-1 rounded-full self-start">
                    {drink.highlight}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-block border-2 border-copper text-copper hover:bg-copper hover:text-cream px-10 py-4 rounded text-base font-bold tracking-wide transition-all"
            >
              Full Drink Menu
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection animation="animate-slide-in-left">
              <div className="rounded-2xl bg-navy text-cream p-8 sm:p-10 shadow-xl">
                <p className="text-copper text-sm tracking-[0.25em] uppercase mb-4 font-semibold">
                  Why It Sells
                </p>
                <div className="space-y-5">
                  {[
                    "Kitchen open 'til midnight every night",
                    "Downtown Elgin address with direct directions and call paths",
                    "Private-events PDFs restored instead of hidden",
                    "Direct Toast ordering placed ahead of delivery apps",
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
              <p className="text-copper text-sm tracking-[0.25em] uppercase mb-4 font-semibold">
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6 leading-tight">
                &ldquo;Better Than Average
                <br />
                Pub Grub.&rdquo;
              </h2>
              <p className="text-navy/65 text-base sm:text-lg leading-relaxed mb-5">
                That&apos;s our tagline, and we mean it with a certain humble confidence. Chef Greg
                didn&apos;t build this menu to compete with fine dining. He built it to be
                the best pub food in Elgin — and people noticed.
              </p>
              <p className="text-navy/65 text-base sm:text-lg leading-relaxed mb-5">
                More than 600 Yelp reviews and 292 TripAdvisor reviews are
                enough proof on their own. This pass stops overselling and lets
                the real tavern utility do the convincing.
              </p>
              <p className="text-navy/65 text-base sm:text-lg leading-relaxed mb-8">
                We&apos;re not trying to be precious. We&apos;re trying to be the
                pub you recommend when someone asks where to eat late in Elgin.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link
                  href="/about"
                  className="inline-block bg-navy hover:bg-navy-light text-cream px-8 py-4 rounded text-base font-bold tracking-wide transition-all"
                >
                  Our Full Story
                </Link>
                <a
                  href={site.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-copper hover:text-copper-light font-bold transition-colors py-4"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Follow Us
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <p className="text-copper text-sm tracking-[0.25em] uppercase mb-3 font-semibold">
              What People Say
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
              Verified Local Proof
            </h2>
            <p className="text-navy/50 text-sm max-w-2xl mx-auto">
              Cleaner proof beats decorative testimonials here. These are the
              business facts that make the preview feel trustworthy on a call.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {proofCards.map((card, i) => (
              <AnimatedSection
                key={card.label}
                animation="animate-fade-up"
                delay={`delay-${Math.min((i + 1) * 100, 600)}`}
              >
                <div className="bg-cream rounded-xl p-6 sm:p-7 h-full border border-cream-dark">
                  <p className="text-copper text-xs font-bold uppercase tracking-[0.22em] mb-3">
                    {card.label}
                  </p>
                  <p className="text-navy text-4xl font-bold mb-3">{card.stat}</p>
                  <p className="text-navy/65 text-sm leading-relaxed">
                    {card.detail}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL FEED / FACEBOOK ── */}
      <section className="py-16 sm:py-20 bg-navy-light">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <AnimatedSection animation="animate-fade-up">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <p className="text-copper text-sm tracking-[0.25em] uppercase mb-3 font-semibold">
              Join the Community
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-4">
              Follow the Tavern in Real Time
            </h2>
            <p className="text-cream/60 text-base sm:text-lg max-w-xl mx-auto mb-8">
              Specials, live-event reminders, and upstairs happenings belong on
              a real channel, so the site now pushes Facebook as the live feed
              instead of dressing it up as a fake social wall.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={site.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded text-base font-bold tracking-wide transition-all hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Like Us on Facebook
              </a>
              <a
                href={site.contact.phoneHref}
                className="inline-flex items-center justify-center gap-2 border-2 border-cream/30 hover:border-copper hover:text-copper text-cream px-8 py-4 rounded text-base font-bold tracking-wide transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {site.contact.phone}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── LOCATION & HOURS ── */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12">
            <p className="text-copper text-sm tracking-[0.25em] uppercase mb-3 font-semibold">
              Find Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Come See Us Tonight
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Map placeholder / address card */}
            <AnimatedSection animation="animate-slide-in-left">
              <a
                href={site.address.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-xl overflow-hidden shadow-lg group h-full min-h-[260px] bg-navy"
              >
                <div className="absolute inset-0 bg-navy flex flex-col items-center justify-center text-center p-8">
                  <svg className="w-10 h-10 text-copper mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-cream text-2xl font-bold mb-2">{site.address.street}</h3>
                  <p className="text-cream/70 text-lg mb-1">{site.address.city}, {site.address.region} {site.address.postalCode}</p>
                  <p className="text-copper font-bold text-lg mt-1">{site.contact.phone}</p>
                  <span className="mt-5 inline-block border border-copper/50 text-copper text-sm font-semibold uppercase tracking-wider px-4 py-2 rounded-full group-hover:bg-copper group-hover:text-cream transition-all">
                    Get Directions →
                  </span>
                </div>
              </a>
            </AnimatedSection>

            {/* Hours */}
            <AnimatedSection animation="animate-slide-in-right">
              <div className="bg-navy rounded-xl p-8 sm:p-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-copper font-bold text-xl uppercase tracking-wider mb-6">
                    Hours
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-cream/10">
                      <span className="text-cream font-semibold text-lg">Sunday – Thursday</span>
                      <span className="text-copper font-bold text-lg">{site.hours.sundayThursday}</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-cream/10">
                      <span className="text-cream/70">Friday – Saturday</span>
                      <span className="text-cream font-medium">{site.hours.fridaySaturday}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-cream/70">Kitchen</span>
                      <span className="text-cream font-medium">Until Midnight</span>
                    </div>
                  </div>
                </div>

                {/* Midnight badge */}
                <div className="mt-8 bg-copper/15 border border-copper/30 rounded-lg px-5 py-4 flex items-center gap-4">
                  <svg className="w-8 h-8 text-copper flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="text-copper font-bold uppercase tracking-wide text-sm">Kitchen Open &apos;til Midnight</div>
                    <div className="text-cream/60 text-xs mt-0.5">Full menu. Every night. No exceptions.</div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href={site.contact.phoneHref}
                    className="flex-1 bg-copper hover:bg-copper-light text-cream text-center px-6 py-3.5 rounded font-bold tracking-wide transition-all text-sm"
                  >
                    Call {site.contact.phone}
                  </a>
                  <a
                    href="/private-events"
                    className="flex-1 border-2 border-cream/20 hover:border-copper text-cream hover:text-copper text-center px-6 py-3.5 rounded font-bold tracking-wide transition-all text-sm"
                  >
                    Private Events
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── ORDER ONLINE ── */}
      <section className="py-16 sm:py-20 bg-navy border-y border-copper/20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <AnimatedSection animation="animate-fade-up">
            <p className="text-copper text-sm tracking-[0.25em] uppercase mb-3 font-semibold">Can&apos;t Make It In?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-4">Order Online</h2>
            <p className="text-cream/60 text-base mb-8 max-w-lg mx-auto">Keep first-party takeout visible, then layer delivery apps underneath it.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={site.links.toast} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-copper hover:bg-copper-light text-cream px-8 py-4 rounded text-base font-bold tracking-wide transition-all hover:-translate-y-0.5">
                🥡 Order Direct on Toast
              </a>
              <a href={site.links.uberEats} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#06C167] hover:bg-green-600 text-white px-8 py-4 rounded text-base font-bold tracking-wide transition-all hover:-translate-y-0.5">
                🛵 Order on Uber Eats
              </a>
              <a href={site.links.doorDash} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-copper/40 hover:border-copper text-cream hover:text-copper px-8 py-4 rounded text-base font-bold tracking-wide transition-all">
                🚗 Order on DoorDash
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── EVENTS & SPECIALS ── */}
      <section className="py-16 sm:py-24 bg-navy-light">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12">
            <p className="text-copper text-sm tracking-[0.25em] uppercase mb-3 font-semibold">What&apos;s On</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-4">Events &amp; Weekly Specials</h2>
            <p className="text-cream/60 text-base max-w-xl mx-auto">Built around the real Facebook/event rhythm and the upstairs room, not filler nightlife copy.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { day: "Tonight", title: "Kitchen 'til Midnight", desc: "Keep the late-night dining hook visible above the fold and again near close so the owner sees the money angle.", emoji: "🕛" },
              { day: "Upstairs", title: "Pub 217 Events", desc: "Private dinners, office gatherings, and party nights are surfaced as a real booking path with downloadable pricing.", emoji: "🥂" },
              { day: "Direct", title: "Toast First", desc: "Pickup ordering now leads with the commission-free Toast flow before marketplace apps.", emoji: "🥡" },
              { day: "Weekly", title: "Facebook Updates", desc: "Use the live Facebook feed for specials and event reminders instead of hard-coding offers that can drift out of date.", emoji: "📣" },
            ].map((e) => (
              <AnimatedSection key={e.day} animation="animate-fade-up">
                <div className="bg-navy rounded-xl p-6 border border-copper/15 h-full">
                  <div className="text-3xl mb-3">{e.emoji}</div>
                  <div className="text-copper text-xs font-bold uppercase tracking-widest mb-2">{e.day}</div>
                  <h3 className="text-cream font-bold text-lg mb-2">{e.title}</h3>
                  <p className="text-cream/55 text-sm leading-relaxed">{e.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(203,144,87,0.2),_transparent_30%),linear-gradient(180deg,_rgba(203,144,87,0.08),_transparent_55%)]" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <AnimatedSection>
            <p className="text-copper text-sm tracking-[0.25em] uppercase mb-4 font-semibold">
              Tonight&apos;s the Night
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-4 leading-tight">
              Walk In. Sit Down.
              <br />
              <span className="text-copper">Eat Something Great.</span>
            </h2>
            <p className="text-cream/60 text-base sm:text-lg mb-10">
              Sun-Thu {site.hours.sundayThursday}. Fri-Sat {site.hours.fridaySaturday}. Kitchen &apos;til midnight.
              <br className="hidden sm:block" />
              {site.address.street}, {site.address.city}, {site.address.region} · <a href={site.contact.phoneHref} className="text-copper hover:text-copper-light transition-colors">{site.contact.phone}</a>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={site.links.toast}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-copper hover:bg-copper-light text-cream px-10 py-4 rounded text-base font-bold tracking-wide transition-all hover:shadow-xl hover:shadow-copper/30 hover:-translate-y-0.5"
              >
                Order Direct on Toast
              </a>
              <Link
                href="/private-events"
                className="border-2 border-cream/30 hover:border-copper hover:text-copper text-cream px-10 py-4 rounded text-base font-bold tracking-wide transition-all"
              >
                Private Events
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
