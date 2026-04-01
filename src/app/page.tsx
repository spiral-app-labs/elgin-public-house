import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import Counter from "@/components/Counter";
import StarRating from "@/components/StarRating";

const reviews = [
  {
    text: "We go to the pub at least once a month — love the food, service and atmosphere! Our favorite go-to place for relaxing atmosphere and amazing service and always great food!",
    source: "TripAdvisor",
    color: "bg-green-600",
  },
  {
    text: "Greg has put together a fantastic menu for all to enjoy. Great Drinks. Extensive beer list, specialty martinis, wide variety of whiskeys, vodkas, wines, and ports. Friendly knowledgeable staff.",
    source: "Yelp",
    color: "bg-red-600",
  },
  {
    text: "Best burgers in town! Great bar to get drinks and watch sports. The chicken sandwich was pretty good too.",
    source: "Google",
    color: "bg-blue-600",
  },
];

const highlights = [
  {
    title: "The Quad Burger",
    desc: "Beef, Elk, Bison & Wild Boar — an exotic blend you won't find anywhere else in Elgin.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Wagyu Upgrade",
    desc: "Elevate any burger with premium Wagyu beef — rich, marbled, unforgettable.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Kitchen 'Til Midnight",
    desc: "Full menu served until midnight, every single night. Late-night cravings, covered.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Live Events Upstairs",
    desc: "Plays, performances, and community events — EPH is more than a pub, it's a gathering place.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="parallax-hero absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <AnimatedSection animation="animate-fade-in">
            <p className="text-copper text-sm sm:text-base tracking-[0.3em] uppercase mb-4 sm:mb-6 font-medium">
              Downtown Elgin, Illinois
            </p>
          </AnimatedSection>
          <AnimatedSection animation="animate-fade-up" delay="delay-200">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-cream leading-tight mb-4 sm:mb-6">
              Where Elgin
              <br />
              <span className="text-copper">Comes Together</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="animate-fade-up" delay="delay-400">
            <p className="text-cream/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
              Craft burgers, specialty martinis, and 100+ beers on tap — in the
              heart of downtown since day one. Kitchen open &apos;til midnight,
              every night.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="animate-fade-up" delay="delay-500">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/menu"
                className="bg-copper hover:bg-copper-light text-cream px-8 py-4 rounded text-base font-semibold tracking-wide transition-all hover:shadow-lg hover:shadow-copper/20"
              >
                View Our Menu
              </Link>
              <a
                href="tel:8474688810"
                className="border-2 border-cream/30 hover:border-cream/60 text-cream px-8 py-4 rounded text-base font-semibold tracking-wide transition-all"
              >
                Call to Reserve
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-cream/50"
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

      {/* Kitchen Open til Midnight Banner */}
      <section className="bg-copper py-3 sm:py-4">
        <div className="mx-auto max-w-5xl px-4 flex items-center justify-center gap-3">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-cream font-bold text-sm sm:text-base tracking-wide uppercase">
            Kitchen Open &apos;til Midnight — Every Single Night
          </span>
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy py-8 sm:py-10">
        <div className="mx-auto max-w-5xl px-4 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div>
            <div className="text-copper text-3xl sm:text-4xl font-bold">
              <Counter end={4} suffix=".4" />
            </div>
            <div className="text-cream/50 text-xs sm:text-sm mt-1">Google Rating</div>
          </div>
          <div>
            <div className="text-copper text-3xl sm:text-4xl font-bold">
              <Counter end={2157} suffix="+" />
            </div>
            <div className="text-cream/50 text-xs sm:text-sm mt-1">Yelp Reviews</div>
          </div>
          <div>
            <div className="text-copper text-3xl sm:text-4xl font-bold">
              #<Counter end={4} />
            </div>
            <div className="text-cream/50 text-xs sm:text-sm mt-1">in Elgin on TripAdvisor</div>
          </div>
          <div>
            <div className="text-copper text-3xl sm:text-4xl font-bold">
              <Counter end={127} suffix="+" />
            </div>
            <div className="text-cream/50 text-xs sm:text-sm mt-1">Restaurants Ranked</div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <p className="text-copper text-sm tracking-[0.2em] uppercase mb-3">
              Not Your Average Pub
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy">
              What Makes EPH Special
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {highlights.map((item, i) => (
              <AnimatedSection
                key={item.title}
                animation="animate-fade-up"
                delay={`delay-${(i + 1) * 100}`}
              >
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="w-14 h-14 rounded-full bg-copper/10 flex items-center justify-center text-copper mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-navy font-bold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-navy/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div
          className="parallax-hero absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <AnimatedSection>
            <p className="text-copper text-sm tracking-[0.2em] uppercase mb-3">
              Signature
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-6">
              The Legendary Quad Burger
            </h2>
            <p className="text-cream/80 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Beef, Elk, Bison &amp; Wild Boar — four premium meats blended
              into one extraordinary patty. Served on a Turano pretzel roll with
              your choice of toppings. This isn&apos;t just a burger — it&apos;s an
              experience.
            </p>
            <Link
              href="/menu"
              className="inline-block bg-copper hover:bg-copper-light text-cream px-8 py-4 rounded text-base font-semibold tracking-wide transition-all hover:shadow-lg hover:shadow-copper/20"
            >
              Explore Full Menu
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Staff Favorite */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimatedSection>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&q=80"
                  alt="Triple Grilled Cheese — Staff Favorite"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute top-4 left-4 bg-copper text-cream text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded">
                  Staff Favorite
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="animate-slide-in-right">
              <p className="text-copper text-sm tracking-[0.2em] uppercase mb-3">
                You Have to Try This
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                The Triple Grilled Cheese
              </h2>
              <p className="text-navy/70 text-base sm:text-lg leading-relaxed mb-6">
                Provolone, American, and chihuahua cheeses with tomatoes and
                bacon — our staff&apos;s go-to order. Add a fried egg and thank
                us later. This isn&apos;t your childhood grilled cheese.
              </p>
              <Link
                href="/menu"
                className="inline-block bg-navy hover:bg-navy-light text-cream px-8 py-4 rounded text-base font-semibold tracking-wide transition-all"
              >
                See Full Menu
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <p className="text-copper text-sm tracking-[0.2em] uppercase mb-3">
              What People Say
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
              Loved by the Community
            </h2>
            <div className="flex items-center justify-center gap-3">
              <StarRating rating={4.4} size="w-6 h-6" />
              <span className="text-navy/60 text-sm">
                4.4 stars &middot; 2,157+ reviews
              </span>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {reviews.map((review, i) => (
              <AnimatedSection
                key={i}
                animation="animate-fade-up"
                delay={`delay-${(i + 1) * 100}`}
              >
                <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm h-full flex flex-col">
                  <StarRating rating={5} size="w-4 h-4" />
                  <p className="text-navy/70 text-sm leading-relaxed mt-4 flex-1">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-4 pt-4 border-t border-cream-dark">
                    <span
                      className={`${review.color} text-white text-xs font-bold px-3 py-1 rounded-full`}
                    >
                      {review.source}
                    </span>
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
              Ready for a Great Time?
            </h2>
            <p className="text-cream/60 text-base sm:text-lg mb-8">
              Open daily 11 AM &ndash; 1 AM. Kitchen &apos;til midnight.
              Walk-ins always welcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8474688810"
                className="bg-copper hover:bg-copper-light text-cream px-8 py-4 rounded text-base font-semibold tracking-wide transition-all"
              >
                Call (847) 468-8810
              </a>
              <Link
                href="/contact"
                className="border-2 border-cream/30 hover:border-cream/60 text-cream px-8 py-4 rounded text-base font-semibold tracking-wide transition-all"
              >
                Get Directions
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
