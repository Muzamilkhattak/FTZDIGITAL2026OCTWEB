import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Shield, Lock, Eye, FileText, Mail, Calendar } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#0d1117] text-white py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-6 h-6 text-blue-400" />
            <p className="text-blue-400 font-semibold text-xs tracking-[0.25em] uppercase">
              Privacy Policy
            </p>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Your Privacy <span className="text-blue-400">Matters</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg leading-relaxed">
            Last updated: January 2024
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 lg:p-12">
            
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                At FTZ Digital, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-slate-600 leading-relaxed">
                By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with the terms, please do not access the site or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Information We Collect</h2>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">Personal Information</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6 ml-4">
                <li>Fill out contact forms or request a quote</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Create an account or log in to our client portal</li>
                <li>Engage with us on social media platforms</li>
                <li>Participate in surveys, contests, or promotions</li>
              </ul>

              <p className="text-slate-600 mb-4 leading-relaxed">
                This information may include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6 ml-4">
                <li>Name and contact details (email address, phone number, mailing address)</li>
                <li>Company name and job title</li>
                <li>Billing and payment information</li>
                <li>Marketing preferences and communication history</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-8">Automatically Collected Information</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                When you visit our website, we automatically collect certain information about your device and browsing activity, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                <li>IP address and browser type</li>
                <li>Operating system and device information</li>
                <li>Pages visited, time spent on pages, and clickstream data</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">How We Use Your Information</h2>
              </div>

              <p className="text-slate-600 mb-4 leading-relaxed">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                <li><strong>Service Delivery:</strong> To provide, operate, and maintain our digital marketing services</li>
                <li><strong>Communication:</strong> To respond to your inquiries, send service updates, and provide customer support</li>
                <li><strong>Marketing:</strong> To send you promotional materials, newsletters, and relevant marketing content (with your consent)</li>
                <li><strong>Analytics:</strong> To analyze website usage, improve our services, and enhance user experience</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
                <li><strong>Security:</strong> To protect against fraud, unauthorized access, and other security threats</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Lock className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Information Sharing and Disclosure</h2>
              </div>

              <p className="text-slate-600 mb-4 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6 ml-4">
                <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our website and delivering our services (e.g., hosting providers, payment processors, email marketing platforms)</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of company assets</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
              </ul>

              <p className="text-slate-600 leading-relaxed">
                All third-party service providers are contractually obligated to maintain the confidentiality and security of your information.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. Cookies are small text files stored on your device.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                You can control cookie preferences through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                <li>Secure Socket Layer (SSL) encryption for data transmission</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication protocols</li>
                <li>Employee training on data protection best practices</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights and Choices</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request transfer of your data to another service provider</li>
              </ul>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Websites</h2>
              <p className="text-slate-600 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Children's Privacy</h2>
              <p className="text-slate-600 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Changes to This Privacy Policy</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a revised "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900">Contact Us</h2>
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-slate-700">
                <p><strong>Email:</strong> <a href="mailto:ftzdigitalmedia@gmail.com" className="text-blue-600 hover:underline">ftzdigitalmedia@gmail.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:03063893891" className="text-blue-600 hover:underline">0306 3893891</a></p>
                <p><strong>Address:</strong> Plot 37, Midway Commercial, Phase 7 Islamabad, 46000</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
