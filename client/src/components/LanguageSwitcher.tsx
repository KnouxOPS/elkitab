import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "../contexts/LanguageContext";

const languages = [
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "ur", name: "اردو", flag: "🇵🇰" },
] as const;

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center space-x-2 rtl:space-x-reverse bg-emerald-50 dark:bg-gray-700 px-3 py-2 rounded-lg hover:bg-emerald-100 dark:hover:bg-gray-600 transition-colors"
        >
          <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400">
            language
          </span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {currentLanguage?.name}
          </span>
          <span className="material-symbols-outlined text-gray-500">
            {isOpen ? "expand_less" : "expand_more"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => {
              setLanguage(lang.code);
              setIsOpen(false);
            }}
            className={`flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 cursor-pointer hover:bg-emerald-50 dark:hover:bg-emerald-900/20 ${
              language === lang.code ? "bg-emerald-100 dark:bg-emerald-900/30" : ""
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="font-medium text-gray-900 dark:text-white">
              {lang.name}
            </span>
            {language === lang.code && (
              <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 mr-auto rtl:ml-auto">
                check
              </span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
