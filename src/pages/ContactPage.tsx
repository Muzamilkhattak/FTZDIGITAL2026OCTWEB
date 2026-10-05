import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

const services = [
  "Social Media Management",
  "Meta Ads (Facebook & Instagram)",
  "Google Ads (PPC)",
  "Web Design & Development",
  "Graphic Design",
  "SEO",
  "Content Marketing",
  "Email Marketing",
  "Video Production",
  "Brand Strategy",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", budget: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-[#0d1117] text-white py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-blue-400 font-semibold text-xs tracking-[0.25em] uppercase mb-4">
            Get In Touch
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Let's Start Your <span className="text-blue-400">Digital Journey</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg leading-relaxed">
            Reach out for a free consultation. We'll discuss your goals, answer your questions, and put together a personalised digital marketing plan.
          </motion.p>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* Left — Info */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Contact Information</h2>
                <p className="text-slate-500 leading-relaxed mb-8">
                  We're based in Islamabad and work with clients across Pakistan and internationally. Reach us through any channel below - we typically respond within a few hours.
                </p>

                {/* Info cards */}
                {[
                  {
                    icon: MapPin,
                    title: "Our Office",
                    lines: ["Plot 37, Midway Commercial,", " Bahria Town Phase 7 Islamabad, 46000"],
                  },
                  {
                    icon: Phone,
                    title: "Phone / WhatsApp",
                    lines: ["0306 3893891"],
                    href: "tel:03063893891",
                  },
                  {
                    icon: Mail,
                    title: "Email Address",
                    lines: ["ftzdigitalmedia@gmail.com"],
                    href: "mailto:ftzdigitalmedia@gmail.com",
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    lines: ["Mon – Sat: 10:00 AM – 7:00 PM", "Sunday: Closed"],
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                      className="flex gap-4 p-5 bg-white rounded-xl border border-slate-100 shadow-sm"
                      data-testid={`contact-info-${i}`}>
                      <div className="w-11 h-11 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm mb-1">{item.title}</div>
                        {item.lines.map((line, j) =>
                          item.href ? (
                            <a key={j} href={item.href} className="block text-slate-500 text-sm hover:text-blue-600 transition-colors">
                              {line}
                            </a>
                          ) : (
                            <p key={j} className="text-slate-500 text-sm">{line}</p>
                          )
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Social */}
              <div>
                <p className="text-slate-700 font-semibold mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { label: "Instagram", href: "https://www.instagram.com/ftzdigital/" },
                    { label: "Facebook", href: "https://www.facebook.com/ftzdigitalagency" },
                    { label: "LinkedIn", href: "https://www.linkedin.com/company/ftzdigital" },
                    { label: "TikTok", href: "https://www.tiktok.com/@ftzdigital" },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="text-xs font-semibold bg-white border border-slate-200 hover:border-blue-400 hover:text-blue-600 px-4 py-2 rounded-md transition-colors">
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <motion.div className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-16" data-testid="form-success">
                    <CheckCircle2 className="w-16 h-16 text-blue-600 mx-auto mb-5" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Message Sent!</h3>
                    <p className="text-slate-500">Thank you for reaching out. The FTZ Digital team will get back to you within 24 hours.</p>
                    <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", budget: "", message: "" }); }}
                      className="mt-6 text-blue-600 font-semibold text-sm hover:underline">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">Send Us a Message</h3>
                      <p className="text-slate-500 text-sm">Fill in your details and we'll get back to you within 24 hours.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name *</label>
                        <input name="name" value={form.name} onChange={handleChange} required
                          placeholder="Your full name"
                          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                          data-testid="input-name" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address *</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} required
                          placeholder="your@email.com"
                          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                          data-testid="input-email" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone / WhatsApp</label>
                        <input name="phone" value={form.phone} onChange={handleChange}
                          placeholder="03XX XXXXXXX"
                          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                          data-testid="input-phone" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service Interested In</label>
                        <select name="service" value={form.service} onChange={handleChange}
                          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                          data-testid="select-service">
                          <option value="">Select a service</option>
                          {services.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                  
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Tell Us About Your Project *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                        placeholder="Briefly describe your business, your goals, and what you'd like help with..."
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                        data-testid="input-message" />
                    </div>

                    <button type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-base"
                      data-testid="button-submit">
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>

                    <p className="text-xs text-slate-400 text-center">
                      We respect your privacy. Your information will never be shared with third parties.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="h-96 relative overflow-hidden" data-testid="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.181688834707!2d73.110598!3d33.52266149999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfed3e7fdb365d%3A0xc54ff8780d16f120!2sFTZ%20Digital!5e0!3m2!1sen!2s!4v1782381749165!5m2!1sen!2s" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="FTZ Digital Location"
        />
      </section>

      <Footer />
    </div>
  );
}
