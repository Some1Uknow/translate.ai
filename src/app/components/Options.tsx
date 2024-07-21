import { useState, useEffect, useRef } from "react";
import Submit from "./Submit";

interface OptionsProps {
  input: string;
  outputLanguage: string;
  setOutputLanguage: (value: string) => void;
  setOutput: (value: string) => void;
  setOutputHeading: (value: string) => void;
}

const languages = [
  "Afrikaans", "Albanian", "Arabic", "Armenian", "Azerbaijani", "Basque", "Belarusian", "Bengali",
  "Bosnian", "Bulgarian", "Catalan", "Cebuano", "Chinese (Simplified)", "Chinese (Traditional)",
  "Croatian", "Czech", "Danish", "Dutch", "English", "Esperanto", "Estonian", "Filipino", "Finnish",
  "French", "Galician", "Georgian", "German", "Greek", "Gujarati", "Haitian Creole", "Hausa",
  "Hebrew", "Hindi", "Hungarian", "Icelandic", "Indonesian", "Irish", "Italian", "Japanese",
  "Javanese", "Kannada", "Kazakh", "Korean", "Latin", "Latvian", "Lithuanian", "Macedonian",
  "Malay", "Maltese", "Maori", "Marathi", "Mongolian", "Nepali", "Norwegian", "Persian", "Polish",
  "Portuguese", "Punjabi", "Romanian", "Russian", "Serbian", "Slovak", "Slovenian", "Somali",
  "Spanish", "Swahili", "Swedish", "Tamil", "Telugu", "Thai", "Turkish", "Ukrainian", "Urdu",
  "Uzbek", "Vietnamese", "Welsh", "Yiddish", "Yoruba", "Zulu"
];


export default function Options({
  input,
  setOutput,
  outputLanguage,
  setOutputLanguage,
  setOutputHeading,
}: OptionsProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredLanguages, setFilteredLanguages] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const optionsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      const filtered = languages.filter(lang =>
        lang.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredLanguages(filtered);
    } else {
      setFilteredLanguages([]);
    }
    setSelectedIndex(-1);
  }, [searchTerm]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(prev => (prev < filteredLanguages.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      selectLanguage(filteredLanguages[selectedIndex]);
    }
  };

  useEffect(() => {
    if (selectedIndex >= 0 && optionsRef.current) {
      const selectedOption = optionsRef.current.children[selectedIndex] as HTMLLIElement;
      selectedOption.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  const selectLanguage = (lang: string) => {
    setOutputLanguage(lang);
    setSearchTerm(lang);
    setFilteredLanguages([]);
    setSelectedIndex(-1);
    inputRef.current?.focus();
  };

  return (
    <div className="w-full md:w-auto flex flex-row-reverse justify-center gap-2 items-center">
      <Submit
        input={input}
        setOutput={setOutput}
        outputLanguage={outputLanguage}
        setOutputHeading={setOutputHeading}
      />
      <div className="relative w-3/5 md:w-64">
        <input
          ref={inputRef}
          type="text"
          placeholder="Select a language..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {filteredLanguages.length > 0 && (
          <ul 
            ref={optionsRef}
            className="absolute z-10 w-full mt-1 bg-gray-950 border border-gray-700 rounded-md shadow-lg max-h-60 overflow-auto scrollbar"
          >
            {filteredLanguages.map((lang, index) => (
              <li 
                key={index} 
                className={`p-2 hover:bg-gray-800 cursor-pointer text-sm md:text-base ${
                  index === selectedIndex ? "bg-gray-700" : ""
                }`}
                onClick={() => selectLanguage(lang)}
              >
                {lang}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}