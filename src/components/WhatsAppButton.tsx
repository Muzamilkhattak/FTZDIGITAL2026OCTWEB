import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const PHONE = "923063893891"; // +92 Pakistan, drop leading 0
const MESSAGE = encodeURIComponent(
  "Hi FTZ Digital! I'm interested in your digital marketing services. Can you help me grow my business?"
);
const WA_URL = `https://wa.me/${PHONE}?text=${MESSAGE}`;

export function WhatsAppButton() {
  const [tooltip, setTooltip] = useState(true);

  return (
    <div className="fixed bottom-28 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip bubble */}
      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 8 }}
            transition={{ duration: 0.25 }}
            className="relative bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 max-w-[220px] text-right"
          >
            <button
              onClick={() => setTooltip(false)}
              className="absolute -top-2 -left-2 w-5 h-5 bg-slate-200 hover:bg-slate-300 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X className="w-3 h-3 text-slate-600" />
            </button>
            <p className="text-slate-900 font-bold text-sm leading-snug">
              Chat with us on WhatsApp!
            </p>
            <p className="text-slate-500 text-xs mt-0.5">
              Usually responds in minutes
            </p>
            {/* Arrow */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-slate-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp button */}
      <motion.a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center relative"
        style={{ backgroundColor: "#25D366" }}
        data-testid="whatsapp-button"
        onClick={() => setTooltip(false)}
      >
        {/* Ping ring */}
        <span className="absolute inset-0 rounded-full animate-ping opacity-25" style={{ backgroundColor: "#25D366" }} />

        {/* WhatsApp SVG icon */}
        <svg
          viewBox="0 0 32 32"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 relative z-10"
        >
          <path d="M16.002 3C9.37 3 4 8.373 4 15.002c0 2.195.597 4.252 1.638 6.022L4 29l8.188-1.614A11.93 11.93 0 0016.002 28C22.63 28 28 22.627 28 16S22.63 3 16.002 3zm0 21.8a9.74 9.74 0 01-4.97-1.36l-.356-.213-3.688.727.743-3.604-.234-.372A9.757 9.757 0 016.2 15.002C6.2 9.59 10.59 5.2 16.002 5.2 21.41 5.2 25.8 9.59 25.8 15.002c0 5.41-4.39 9.798-9.798 9.798zm5.378-7.317c-.293-.146-1.734-.858-2.002-.955-.268-.098-.464-.146-.66.146-.196.293-.76.955-.932 1.153-.17.195-.342.22-.634.073-.293-.146-1.237-.456-2.355-1.452-.87-.775-1.457-1.733-1.628-2.025-.17-.293-.018-.451.128-.596.13-.13.293-.342.44-.512.146-.17.195-.293.293-.488.098-.196.05-.366-.025-.512-.074-.146-.66-1.59-.904-2.176-.239-.572-.48-.494-.66-.503l-.561-.01c-.195 0-.512.073-.78.366-.268.293-1.024 1.001-1.024 2.44 0 1.44 1.048 2.83 1.194 3.026.147.195 2.06 3.149 4.994 4.415.698.302 1.243.483 1.668.618.701.223 1.34.192 1.843.117.562-.084 1.734-.71 1.978-1.394.244-.683.244-1.27.17-1.392-.073-.122-.268-.195-.561-.342z" />
        </svg>
      </motion.a>
    </div>
  );
}
