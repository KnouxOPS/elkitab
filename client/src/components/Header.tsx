import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const { t, direction } = useLanguage();
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/quran", label: t("nav.quran") },
    { href: "/seerah", label: t("nav.seerah") },
    { href: "/islamic-knowledge", label: t("nav.knowledge") },
    { href: "/prayer-guide", label: t("nav.prayerGuide") },
    { href: "/daily-reminders", label: t("nav.reminders") },
    { href: "/calendar", label: t("nav.calendar") },
    { href: "/kids", label: t("nav.kids") },
    { href: "/ai-assistant", label: t("nav.assistant") },
  ];

  return (
    <header className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-b border-emerald-100 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="gradient-emerald p-2 rounded-xl shadow-lg">
                <span className="material-symbols-outlined text-white text-2xl">menu_book</span>
              </div>
              <div className={`${direction === "rtl" ? "text-right" : "text-left"}`}>
                <h1 className="text-xl font-amiri font-bold text-emerald-700 dark:text-emerald-400">
                  {t("app.name")}
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-inter">
                  {t("app.tagline")}
                </p>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            {navItems.slice(0, 5).map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={`font-inter font-medium transition-colors ${
                    location === item.href
                      ? "text-emerald-700 dark:text-emerald-300"
                      : "text-gray-600 dark:text-gray-300 hover:text-gold-600"
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">
                {theme === "dark" ? "light_mode" : "dark_mode"}
              </span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </Button>

            {/* Profile */}
            <div className="w-8 h-8 gradient-gold rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-sm">person</span>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className={`block px-3 py-2 rounded-md font-inter font-medium transition-colors ${
                      location === item.href
                        ? "bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
