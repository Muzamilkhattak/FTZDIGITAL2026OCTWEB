import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { allServices } from "@/data/servicesData";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 select-none flex-shrink-0">
          <span className="text-blue-600 font-extrabold text-2xl tracking-tight">FTZ</span>
          <span className="text-slate-900 font-extrabold text-2xl tracking-tight">Digital</span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 ml-0.5 mb-0.5 inline-block" />
        </Link>

        {/* Desktop nav — pill-shaped active indicator */}
        <nav className="hidden md:flex items-center gap-1" data-testid="nav-links">
          {navLinks.map((item) => {
            const active = isActive(item.href);
            
            if (item.hasDropdown) {
              return (
                <div 
                  key={item.label} 
                  className="relative" 
                  ref={dropdownRef}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-1 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                      active
                        ? "bg-white border border-slate-200 text-slate-900 shadow-sm"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                    data-testid="nav-link-services"
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 opacity-50 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </Link>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden z-50"
                      >
                        <div className="p-3">
                          <div className="px-3 py-2 mb-1">
                            <Link
                              href="/services"
                              className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                            >
                              View All Services
                            </Link>
                          </div>
                          <div className="space-y-1 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                            {allServices.map((service) => {
                              const Icon = service.icon;
                              return (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                                >
                                  <div className="mt-0.5 flex-shrink-0">
                                    <Icon className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                      {service.title}
                                    </div>
                                    <div className="text-xs text-slate-500 line-clamp-2 mt-0.5">
                                      {service.tagline}
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }
            
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative flex items-center gap-1 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                  active
                    ? "bg-white border border-slate-200 text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
                data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA — outlined pill with arrow */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 border border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-200 group"
            data-testid="button-nav-get-started"
          >
            Get Free Proposal
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-full text-slate-700 hover:bg-slate-100 transition border border-slate-200"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white border-t border-slate-100"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((item) => {
                const active = isActive(item.href);
                
                if (item.hasDropdown) {
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className={`w-full text-left text-sm font-semibold py-3 px-4 rounded-full transition-all flex items-center justify-between ${
                          active
                            ? "bg-slate-50 border border-slate-200 text-slate-900"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden ml-4 mt-1 space-y-1"
                          >
                            <Link
                              href="/services"
                              onClick={() => {
                                setServicesOpen(false);
                                setOpen(false);
                              }}
                              className="block text-sm font-semibold py-2 px-4 text-blue-600 hover:bg-slate-50 rounded-lg"
                            >
                              View All →
                            </Link>
                            {allServices.map((service) => {
                              const Icon = service.icon;
                              return (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  onClick={() => {
                                    setServicesOpen(false);
                                    setOpen(false);
                                  }}
                                  className="flex items-center gap-2 text-sm py-2 px-4 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg"
                                >
                                  <Icon className="w-4 h-4" />
                                  {service.title}
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`text-sm font-semibold py-3 px-4 rounded-full transition-all ${
                      active
                        ? "bg-slate-50 border border-slate-200 text-slate-900"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                    data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 border border-slate-900 text-slate-900 font-semibold px-6 py-3 rounded-full text-sm text-center transition-colors flex items-center justify-center gap-2"
              >
                Get Free Proposal <ArrowRight className="w-4 h-4" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
