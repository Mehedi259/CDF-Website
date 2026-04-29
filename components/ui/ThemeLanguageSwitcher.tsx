"use client";

import { motion } from "framer-motion";
import { Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "@/lib/context/ThemeContext";
import { useLanguage } from "@/lib/context/LanguageContext";
import { useState } from "react";

export default function ThemeLanguageSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);

  return (
    <div className="flex items-center gap-2">
      {/* Theme Toggle */}
      <motion.button
        onClick={toggleTheme}
        className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle theme"
      >
        <motion.div
          initial={false}
          animate={{ rotate: theme === "dark" ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5 text-slate-700" />
          ) : (
            <Sun className="w-5 h-5 text-yellow-400" />
          )}
        </motion.div>
      </motion.button>

      {/* Language Switcher */}
      <div className="relative">
        <motion.button
          onClick={() => setShowLangMenu(!showLangMenu)}
          className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Globe className="w-5 h-5 text-slate-700 dark:text-slate-300" />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300 uppercase">
            {language}
          </span>
        </motion.button>

        {/* Language Dropdown */}
        {showLangMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-32 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden z-50"
          >
            <button
              onClick={() => {
                setLanguage("en");
                setShowLangMenu(false);
              }}
              className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors ${
                language === "en"
                  ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
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
                  ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
              }`}
            >
              🇳🇱 Nederlands
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
