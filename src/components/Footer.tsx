import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      {/* Top divider */}
      <div className="divider-copper" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-copper flex items-center justify-center text-cream font-bold text-xl shadow-md shadow-copper/20">
                E
              </div>
              <div>
                <div className="font-bold text-lg leading-tight tracking-wide">
                  Elgin Public House
                </div>
                <div className="text-cream/40 text-xs tracking-wider uppercase">
                  Better Than Average Pub Grub
                </div>
              </div>
            </div>
            <p className="text-cream/55 text-sm leading-relaxed mb-5">
              Elgin&apos;s neighborhood pub — great food from Chef Greg, craft
              drinks, and community spirit in the heart of downtown since day
              one.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/eph219"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-cream/10 hover:bg-blue-600 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.yelp.com/biz/elgin-public-house-elgin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-cream/10 hover:bg-red-600 flex items-center justify-center transition-colors"
                aria-label="Yelp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.16 12.73l-4.916 1.585c-.8.257-1.638-.4-1.545-1.23l.604-5.398c.09-.826.975-1.25 1.672-.826l4.31 2.614c.777.47.774 1.585-.125 2.255zM12.16 3.26l-.604 5.398c-.09.826.743 1.483 1.545 1.23l4.916-1.585c.9-.29 1.232-1.4.458-1.998L14.165 3.69c-.774-.598-1.914-.083-2.004.57zM8.4 16.5l4.24-3.08c.69-.5.69-1.52 0-2.02l-4.24-3.08C7.71 7.82 6.75 8.19 6.75 9.02v6.46c0 .83.96 1.2 1.65.72z" />
                </svg>
              </a>
              <a
                href="tel:8474688810"
                className="w-9 h-9 rounded-full bg-cream/10 hover:bg-copper flex items-center justify-center transition-colors"
                aria-label="Call us"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-copper font-semibold text-xs uppercase tracking-widest mb-5">
              Explore
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Full Menu" },
                { href: "/about", label: "Our Story" },
                { href: "/contact", label: "Contact" },
                { href: "https://www.facebook.com/eph219", label: "Facebook", external: true },
              ].map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream/55 hover:text-copper text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-cream/55 hover:text-copper text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-copper font-semibold text-xs uppercase tracking-widest mb-5">
              Hours
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li className="text-cream/55">Open Daily</li>
              <li className="text-cream font-semibold">11:00 AM – 1:00 AM</li>
              <li className="mt-3 text-cream/55">Kitchen Open</li>
              <li className="text-copper font-bold">Until Midnight · Every Night</li>
              <li className="mt-4">
                <span className="inline-flex items-center gap-1.5 text-cream/40 text-xs border border-cream/15 px-3 py-1.5 rounded-full">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Walk-ins always welcome
                </span>
              </li>
            </ul>
          </div>

          {/* Contact & Address */}
          <div>
            <h3 className="text-copper font-semibold text-xs uppercase tracking-widest mb-5">
              Visit Us
            </h3>
            <ul className="space-y-2.5 text-sm text-cream/55">
              <li>219 E Chicago St</li>
              <li>Elgin, IL 60120</li>
              <li className="pt-2">
                <a
                  href="tel:8474688810"
                  className="text-copper hover:text-copper-light transition-colors font-bold text-base"
                >
                  (847) 468-8810
                </a>
              </li>
              <li className="pt-3">
                <a
                  href="https://www.google.com/maps/search/219+E+Chicago+St+Elgin+IL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-cream/55 hover:text-copper transition-colors text-xs"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream/35 text-xs">
            &copy; {new Date().getFullYear()} Elgin Public House · 219 E Chicago
            St, Elgin, IL · All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-cream/35 text-xs">#4 in Elgin on TripAdvisor</span>
            <span className="text-cream/20 text-xs">·</span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  className={`w-3 h-3 ${i <= 4 ? "text-copper" : "text-copper/35"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-cream/35 text-xs">631 Yelp reviews</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
