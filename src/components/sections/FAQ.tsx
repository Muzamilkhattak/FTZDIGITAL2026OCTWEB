import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";

export function FAQ() {
  const faqs = [
    {
      q: "What digital marketing services does FTZ Digital offer?",
      a: "We provide a full suite of digital marketing services including social media management, Meta & Google Ads, SEO, web design, graphic design, content marketing, email marketing, and video production - all tailored for your business goals.",
    },
    {
      q: "How much do your digital marketing packages cost?",
      a: "Our packages are customised to your specific needs and budget. We offer flexible plans for startups, SMEs, and enterprises. Get in touch for a free consultation and personalised quote.",
    },
    {
      q: "How long does it take to see results from digital marketing?",
      a: "Paid ads (Meta & Google) can show results within days. SEO and organic social media growth typically take 3–6 months for significant, sustainable results. We set clear timelines and KPIs from day one.",
    },
    {
      q: "Do you work with businesses outside Islamabad?",
      a: "Absolutely. While we're headquartered in Islamabad, we work with clients across Pakistan and internationally. All our services are delivered remotely with regular reporting and communication.",
    },
    {
      q: "Will I get regular reports on campaign performance?",
      a: "Yes. Every client receives detailed monthly performance reports covering reach, engagement, conversions, ROAS, and other key metrics. We also offer weekly check-in calls for active campaigns.",
    },
    {
      q: "Can you help redesign our existing website?",
      a: "Yes - we handle complete website redesigns, landing page builds, and e-commerce development. Our web team works closely with our branding and content teams for a cohesive digital presence.",
    },
  ];

  return (
    <section className="py-24 bg-white" data-testid="section-faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Have questions about working with FTZ Digital? Find answers below - or reach out and our team will respond within 24 hours.
            </p>
            <Link href="/contact"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-md transition-colors"
              data-testid="button-faq-contact">
              Contact Our Team
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}
                  className="bg-slate-50 border border-slate-100 rounded-lg px-6 data-[state=open]:bg-white data-[state=open]:shadow-md transition-all"
                  data-testid={`faq-item-${i}`}>
                  <AccordionTrigger className="text-left font-semibold text-base text-slate-900 hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-sm leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
