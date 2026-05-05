"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { useState } from "react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);

  return (
    <div className="relative">
      <motion.button
        onClick={() => setShowLangMenu(!showLangMenu)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="w-4 h-4 text-slate-700 dark:text-slate-300" />
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 uppercase">
          {language}
        </span>
      </motion.button>

      {showLangMenu && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden z-50"
        >
          <button
            onClick={() => {
              setLanguage("en");
              setShowLangMenu(false);
            }}
            className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors ${
              language === "en"
                ? "bg-blue-50 text-blue-600"
                : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            🇬🇧 English
          </button>
          <button
            onClick={() => {
              setLanguage("nl");
              setShowLangMenu(false);
            }}
            className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors ${
              language === "nl"
                ? "bg-blue-50 text-blue-600"
                : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            🇳🇱 Nederlands
          </button>
        </motion.div>
      )}
    </div>
  );
}
