import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import Counter from "@/components/Counter";
import StarRating from "@/components/StarRating";
import TiltCard from "@/components/TiltCard";

const reviews = [
  {
    name: "Sarah M.",
    text: "We go to the pub at least once a month — love the food, service and atmosphere! Our favorite go-to place for relaxing atmosphere and amazing service and always great food!",
    source: "TripAdvisor",
    color: "bg-green-600",
    stars: 5,
  },
  {
    name: "James K.",
    text: "Greg has put together a fantastic menu for all to enjoy. Great Drinks. Extensive beer list, specialty martinis, wide variety of whiskeys, vodkas, wines, and ports. Friendly knowledgeable staff.",
    source: "Yelp",
    color: "bg-red-600",
    stars: 5,
  },
  {
    name: "Maria T.",
    text: "Best burgers in town! Great bar to get drinks and watch sports. The Quad Burger is unlike anything else — four meats, one incredible experience. Won't go anywhere else.",
    source: "Google",
    color: "bg-blue-600",
    stars: 5,
  },
  {
    name: "David R.",
    text: "Kitchen open till midnight? A game changer. Great late night spot with full menu — not just wings and fries. Real food, real atmosphere, real neighborhood pub vibes.",
    source: "Yelp",
    color: "bg-red-600",
    stars: 5,
  },
  {
    name: "Lisa P.",
    text: "Stumbled in on a Thursday and stayed for three hours. The whiskey selection alone is worth the trip. Staff actually knows their stuff. This place has serious personality.",
    source: "TripAdvisor",
    color: "bg-green-600",
    stars: 5,
  },
  {
    name: "Tom W.",
    text: "If you haven't tried the Triple Grilled Cheese yet, you're doing Elgin wrong. Three cheeses, bacon, perfectly crispy. I dream about this sandwich.",
    source: "Google",
    color: "bg-blue-600",
    stars: 5,
  },
];

const featuredDishes = [
  {
    title: "The Quad Burger",
    desc: "Beef, Elk, Bison & Wild Boar — four exotic meats blended into one legendary patty on a Turano pretzel roll.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    tag: "House Legend",
  },
  {
    title: "Triple Grilled Cheese",
    desc: "Provolone, American & Chihuahua cheeses with tomatoes and bacon. Add a fried egg and thank us later.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80",
    tag: "Staff Favorite",
  },
  {
    title: "Wagyu Upgrade",
    desc: "Elevate any burger with premium Wagyu beef — rich, marbled, impossibly tender. Once you go Wagyu, you don't go back.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80",
    tag: "Premium",
  },
  {
    title: "Late Night Bites",
    desc: "Full kitchen menu until midnight. Because great food shouldn't have a curfew. Every single night.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    tag: "Kitchen 'til Midnight",
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
        <div
          className="parallax-hero absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&q=80')",
          }}
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/40 via-transparent to-navy/40" />

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
              Downtown Elgin, Illinois · Est. EPH
            </p>
          </AnimatedSection>

          <AnimatedSection animation="animate-fade-up" delay="delay-200">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-cream leading-[1.05] mb-3 sm:mb-5">
              Better Than
              <br />
              <span className="text-shimmer">Average.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="animate-fade-up" delay="delay-400">
            <p className="text-cream/75 text-base sm:text-xl max-w-2xl mx-auto mb-3 leading-relaxed font-light">
              Craft burgers. Specialty martinis. 100+ beers. A whiskey program
              worth staying for. And a kitchen that never sleeps.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="animate-fade-up" delay="delay-500">
            <p className="text-copper font-bold text-lg sm:text-2xl tracking-wide mb-8 sm:mb-10 uppercase">
              Kitchen Open &apos;til Midnight · Every Night
            </p>
          </AnimatedSection>

          <AnimatedSection animation="animate-fade-up" delay="delay-600">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/menu"
                className="bg-copper hover:bg-copper-light text-cream px-10 py-4 rounded text-base font-bold tracking-wide transition-all hover:shadow-xl hover:shadow-copper/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                View Full Menu
              </Link>
              <a
                href="https://www.google.com/maps/search/219+E+Chicago+St+Elgin+IL"
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
              <span className="text-copper font-bold">#4</span> in Elgin on TripAdvisor
            </span>
            <span className="text-cream/20 hidden sm:inline">·</span>
            <span className="text-cream/50 text-sm">
              <span className="text-copper font-bold">631</span> Yelp Reviews
            </span>
            <span className="text-cream/20 hidden sm:inline">·</span>
            <span className="text-cream/50 text-sm">
              <span className="text-copper font-bold">10K+</span> Facebook Fans
            </span>
          </div>
          <Link
            href="/menu"
            className="bg-copper/10 hover:bg-copper text-copper hover:text-cream border border-copper/30 hover:border-copper text-sm font-bold uppercase tracking-wider px-6 py-2 rounded transition-all whitespace-nowrap"
          >
            View Full Menu →
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
                10K<span className="text-copper">+</span>
              </div>
              <div className="text-cream/50 text-xs sm:text-sm mt-2 uppercase tracking-wider">Facebook Fans</div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="animate-fade-up" delay="delay-300">
            <div>
              <div className="text-copper text-4xl sm:text-5xl font-bold tabular-nums">
                #<Counter end={4} />
              </div>
              <div className="text-cream/50 text-xs sm:text-sm mt-2 uppercase tracking-wider">In Elgin · TripAdvisor</div>
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
      <section className="relative py-28 sm:py-40 overflow-hidden">
        <div
          className="parallax-hero absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/75 via-navy/65 to-navy/85" />

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
              Elgin&apos;s gathering place. Great food from a chef who actually gives a damn,
              drinks that go beyond the expected, and an atmosphere that makes
              strangers into regulars.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="animate-fade-up" delay="delay-200">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {["Craft Beer", "Specialty Martinis", "Whiskey Bar", "Kitchen 'til Midnight", "Live Events", "Sports on TV"].map((tag) => (
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
              Food Worth Coming Back For
            </h2>
            <p className="text-navy/55 text-base sm:text-lg max-w-2xl mx-auto">
              Not your average pub grub — and that&apos;s entirely the point.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish, i) => (
              <AnimatedSection
                key={dish.title}
                animation="animate-fade-up"
                delay={`delay-${(i + 1) * 100}`}
              >
                <TiltCard className="bg-white rounded-xl overflow-hidden shadow-md h-full flex flex-col">
                  <div className="img-zoom relative">
                    <img
                      src={dish.image}
                      alt={dish.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-copper text-cream text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                      {dish.tag}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-navy font-bold text-lg mb-2">{dish.title}</h3>
                    <p className="text-navy/60 text-sm leading-relaxed flex-1">{dish.desc}</p>
                  </div>
                </TiltCard>
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
              <div className="relative">
                <div className="img-zoom rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80"
                    alt="Elgin Public House interior"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-5 -right-5 bg-copper text-cream rounded-xl p-5 shadow-xl">
                  <div className="text-3xl font-bold leading-none">31K+</div>
                  <div className="text-cream/80 text-xs uppercase tracking-wider mt-1">Check-ins</div>
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
                631 Yelp reviews. 292 TripAdvisor reviews. #4 in all of Elgin. Over 31,000
                Facebook check-ins from real people who just wanted a great night out and
                found exactly that at 219 E Chicago St.
              </p>
              <p className="text-navy/65 text-base sm:text-lg leading-relaxed mb-8">
                We&apos;re not trying to be fancy. We&apos;re trying to be your favorite pub.
                There&apos;s a difference — and we&apos;d like to think we&apos;ve nailed it.
              </p>
              <div className="flex gap-6">
                <Link
                  href="/about"
                  className="inline-block bg-navy hover:bg-navy-light text-cream px-8 py-4 rounded text-base font-bold tracking-wide transition-all"
                >
                  Our Full Story
                </Link>
                <a
                  href="https://www.facebook.com/eph219"
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
              Loved by Elgin
            </h2>
            <div className="flex items-center justify-center gap-3 mb-2">
              <StarRating rating={5} size="w-5 h-5" />
              <span className="text-navy/60 text-sm font-medium">
                631 Yelp reviews &middot; 292 TripAdvisor reviews
              </span>
            </div>
            <p className="text-navy/40 text-sm">Real reviews from real regulars.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <AnimatedSection
                key={i}
                animation="animate-fade-up"
                delay={`delay-${Math.min((i + 1) * 100, 600)}`}
              >
                <div className="menu-item bg-cream rounded-xl p-6 sm:p-7 h-full flex flex-col border border-cream-dark">
                  <div className="flex items-center justify-between mb-4">
                    <StarRating rating={review.stars} size="w-4 h-4" />
                    <span
                      className={`${review.color} text-white text-xs font-bold px-3 py-1 rounded-full`}
                    >
                      {review.source}
                    </span>
                  </div>
                  <p className="text-navy/70 text-sm leading-relaxed flex-1 mb-4">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <p className="text-navy font-semibold text-sm">{review.name}</p>
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
              10,302 People Can&apos;t Be Wrong
            </h2>
            <p className="text-cream/60 text-base sm:text-lg max-w-xl mx-auto mb-8">
              Follow us on Facebook for daily specials, event announcements, and
              the occasional behind-the-scenes peek at Chef Greg&apos;s kitchen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.facebook.com/eph219"
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
                href="tel:8474688810"
                className="inline-flex items-center justify-center gap-2 border-2 border-cream/30 hover:border-copper hover:text-copper text-cream px-8 py-4 rounded text-base font-bold tracking-wide transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (847) 468-8810
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
                href="https://www.google.com/maps/search/219+E+Chicago+St+Elgin+IL"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-xl overflow-hidden shadow-lg group h-full min-h-[260px] bg-navy"
              >
                <div className="absolute inset-0 bg-navy flex flex-col items-center justify-center text-center p-8">
                  <svg className="w-10 h-10 text-copper mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-cream text-2xl font-bold mb-2">219 E Chicago St</h3>
                  <p className="text-cream/70 text-lg mb-1">Elgin, IL 60120</p>
                  <p className="text-copper font-bold text-lg mt-1">(847) 468-8810</p>
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
                      <span className="text-cream font-semibold text-lg">Monday – Sunday</span>
                      <span className="text-copper font-bold text-lg">11 AM – 1 AM</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-cream/10">
                      <span className="text-cream/70">Kitchen Hours</span>
                      <span className="text-cream font-medium">Until Midnight</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-cream/70">Bar</span>
                      <span className="text-cream font-medium">Until Close</span>
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
                    href="tel:8474688810"
                    className="flex-1 bg-copper hover:bg-copper-light text-cream text-center px-6 py-3.5 rounded font-bold tracking-wide transition-all text-sm"
                  >
                    Call (847) 468-8810
                  </a>
                  <a
                    href="https://www.facebook.com/eph219"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border-2 border-cream/20 hover:border-copper text-cream hover:text-copper text-center px-6 py-3.5 rounded font-bold tracking-wide transition-all text-sm"
                  >
                    Follow on Facebook
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div
          className="parallax-hero absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-navy/85" />
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
              Open daily 11 AM – 1 AM. Kitchen &apos;til midnight. Walk-ins always welcome.
              <br className="hidden sm:block" />
              219 E Chicago St, Elgin, IL · <a href="tel:8474688810" className="text-copper hover:text-copper-light transition-colors">(847) 468-8810</a>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/menu"
                className="bg-copper hover:bg-copper-light text-cream px-10 py-4 rounded text-base font-bold tracking-wide transition-all hover:shadow-xl hover:shadow-copper/30 hover:-translate-y-0.5"
              >
                View Our Menu
              </Link>
              <a
                href="https://www.google.com/maps/search/219+E+Chicago+St+Elgin+IL"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-cream/30 hover:border-copper hover:text-copper text-cream px-10 py-4 rounded text-base font-bold tracking-wide transition-all"
              >
                Get Directions
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
