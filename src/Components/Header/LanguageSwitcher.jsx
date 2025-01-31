import { useState } from "react";
import { MdOutlineLanguage } from "react-icons/md";

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  const languages = [
    { code: "ar", name: "AR" },
    { code: "en", name: "EN" },
    { code: "fr", name: "FN" },
  ];

  const handleSelect = (lange) => {
    setSelectedLang(lange.name);
    setIsOpen(false);
    // هنا يمكنك إضافة منطق تغيير اللغة الفعلي
    console.log("تم التغيير إلى:", lange.code);
  };

  return (
    <div className="relative inline-block text-center">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-slate-200 border
         border-gray-300 rounded-md shadow-sm
         hover:bg-gray-50 cursor-pointer transition-colors"
      >
        <span>
          <MdOutlineLanguage />
        </span>
        {selectedLang}
      </div>

      {isOpen && (
        <div
          className="absolute right-0 w-fit mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1
           ring-black ring-opacity-5 focus:outline-none z-50"
        >
          <div className="py-1">
            {languages.map((lang) => (
              <div
                key={lang.code}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelect(lang);
                }}
                className={`block px-4 py-2 text-sm cursor-pointer ${
                  selectedLang === lang.name
                    ? " text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {lang.name}
                {selectedLang === lang.name && (
                  <span className="ml-2 text-blue-500">✓</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
