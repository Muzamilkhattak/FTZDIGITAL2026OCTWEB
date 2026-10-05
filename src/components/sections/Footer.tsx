import { useState } from "react";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Facebook, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSubscribed(true);
      setIsLoading(false);
      setEmail("");
      // Reset success message after 5 seconds
      setTimeout(() => setSubscribed(false), 5000);
    }, 800);
  };

  return (
    <footer id="contact" className="bg-slate-900 pt-20 pb-8 text-slate-300 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at center, #ffffff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-12 border-b border-white/10 gap-8">
          <div>
            <div className="text-white font-extrabold text-3xl tracking-tight mb-1">
              <span className="text-blue-400">FTZ</span> Digital
            </div>
            <p className="text-slate-400 text-sm">Transforming brands through strategy and creativity.</p>
          </div>
          <div className="flex w-full md:w-auto items-center max-w-md">
            {subscribed ? (
              <div className="bg-green-50 border border-green-200 text-green-800 text-sm font-medium px-6 py-3 rounded-md w-full text-center">
                ✓ Successfully subscribed!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex w-full">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="bg-slate-800 border-white/20 text-white rounded-r-none h-12 focus-visible:ring-1 focus-visible:ring-blue-400 placeholder:text-slate-500"
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="rounded-l-none h-12 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold px-6 rounded-r-md transition-colors text-sm"
                >
                  {isLoading ? "..." : "Subscribe"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Columns — 3 columns now */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Blog", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-blue-400 transition-colors text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/services/social-media-management" className="hover:text-blue-400 transition-colors">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link href="/services/meta-ads" className="hover:text-blue-400 transition-colors">
                  Meta & Google Ads
                </Link>
              </li>
              <li>
                <Link href="/services/web-design-development" className="hover:text-blue-400 transition-colors">
                  Web Design & Development
                </Link>
              </li>
              <li>
                <Link href="/services/graphic-design" className="hover:text-blue-400 transition-colors">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="hover:text-blue-400 transition-colors">
                  SEO & Content Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/email-marketing" className="hover:text-blue-400 transition-colors">
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/video-production" className="hover:text-blue-400 transition-colors">
                  Video Production
                </Link>
              </li>
              <li>
                <Link href="/services/brand-strategy" className="hover:text-blue-400 transition-colors">
                  Brand Strategy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <a 
                  href="https://www.google.com/maps/place/FTZ+Digital/@33.5226615,73.110598,17z/data=!3m1!4b1!4m6!3m5!1s0x38dfed3e7fdb365d:0xc54ff8780d16f120!8m2!3d33.5226615!4d73.110598!16s%2Fg%2F11y3l5zxt_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Plot 37, Midway Commercial,<br /> Bahria Town Phase 7 Islamabad, 46000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                <a href="tel:+ 92 3063893891" className="hover:text-blue-400 transition-colors">
                  +92 306 3893891
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <a href="mailto:ftzdigitalmedia@gmail.com" className="hover:text-blue-400 transition-colors break-all">
                  ftzdigitalmedia@gmail.com
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-8">
              <a 
                href="https://www.facebook.com/ftzdigitalagency" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit FTZ Digital on Facebook"
                className="bg-slate-800 hover:bg-blue-600 p-2.5 rounded-full text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/ftzdigital/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow FTZ Digital on Instagram"
                className="bg-slate-800 hover:bg-pink-600 p-2.5 rounded-full text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/company/ftzdigital" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Connect with FTZ Digital on LinkedIn"
                className="bg-slate-800 hover:bg-blue-700 p-2.5 rounded-full text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://www.tiktok.com/@ftzdigital" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow FTZ Digital on TikTok"
                title="TikTok"
                className="bg-slate-800 hover:bg-black p-2.5 rounded-full text-white transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} FTZ Digital. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
