import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-copper flex items-center justify-center text-cream font-bold text-lg">
                E
              </div>
              <span className="font-bold text-lg tracking-wide">
                Elgin Public House
              </span>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed">
              Elgin&apos;s neighborhood pub — great food, craft drinks, and
              community spirit in the heart of downtown.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-copper font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Menu" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/60 hover:text-copper text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-copper font-semibold text-sm uppercase tracking-wider mb-4">
              Hours
            </h3>
            <ul className="space-y-2 text-sm text-cream/60">
              <li>Open Daily</li>
              <li className="text-cream font-medium">11:00 AM &ndash; 1:00 AM</li>
              <li className="mt-3">Kitchen Open</li>
              <li className="text-cream font-medium">Until Midnight Every Night</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-copper font-semibold text-sm uppercase tracking-wider mb-4">
              Visit Us
            </h3>
            <ul className="space-y-2 text-sm text-cream/60">
              <li>219 E Chicago St</li>
              <li>Elgin, IL 60120</li>
              <li className="pt-2">
                <a
                  href="tel:8474688810"
                  className="text-copper hover:text-copper-light transition-colors font-medium"
                >
                  (847) 468-8810
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-xs">
            &copy; {new Date().getFullYear()} Elgin Public House. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-cream/30 text-xs">4.3</span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4].map((i) => (
                <svg
                  key={i}
                  className="w-3 h-3 text-copper"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <svg
                className="w-3 h-3 text-copper/40"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="text-cream/30 text-xs">on Google</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
