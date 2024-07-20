import "../globals.css";
import Submit from "./Submit";

interface OptionsProps {
  input: string;
  outputLanguage: string;
  setOutputLanguage: (value: string) => void;
  setOutput: (value: string) => void;

  setOutputHeading: (value: string) => void;
}

export default function Options({
  input,
  setOutput,
  outputLanguage,
  setOutputLanguage,
  setOutputHeading,
}: OptionsProps) {
  console.log(outputLanguage);
  return (
    <>
      <main>
        <Submit
          input={input}
          setOutput={setOutput}
          outputLanguage={outputLanguage}
          setOutputHeading={setOutputHeading}
        />
        <p className="mb-2">Select a language</p>
        <select
          name="language-selection"
          title="Select a Language"
          data-placeholder="Choose a Language..."
          className="bg-gray-950 scrollbar p-1"
          value={outputLanguage}
          onChange={(e) => setOutputLanguage(e.target.value)}
        >
          <option className="bg-gray-950" value="Afrikaans">
            Afrikaans
          </option>
          <option className="bg-gray-950" value="Albanian">
            Albanian
          </option>
          <option className="bg-gray-950" value="Arabic">
            Arabic
          </option>
          <option className="bg-gray-950" value="Armenian">
            Armenian
          </option>
          <option className="bg-gray-950" value="Basque">
            Basque
          </option>
          <option className="bg-gray-950" value="Bengali">
            Bengali
          </option>
          <option className="bg-gray-950" value="Bulgarian">
            Bulgarian
          </option>
          <option className="bg-gray-950" value="Catalan">
            Catalan
          </option>
          <option className="bg-gray-950" value="Cambodian">
            Cambodian
          </option>
          <option className="bg-gray-950" value="Chinese (Mandarin)">
            Chinese (Mandarin)
          </option>
          <option className="bg-gray-950" value="Croatian">
            Croatian
          </option>
          <option className="bg-gray-950" value="Czech">
            Czech
          </option>
          <option className="bg-gray-950" value="Danish">
            Danish
          </option>
          <option className="bg-gray-950" value="Dutch">
            Dutch
          </option>
          <option className="bg-gray-950" value="English">
            English
          </option>
          <option className="bg-gray-950" value="Estonian">
            Estonian
          </option>
          <option className="bg-gray-950" value="Fiji">
            Fiji
          </option>
          <option className="bg-gray-950" value="Finnish">
            Finnish
          </option>
          <option className="bg-gray-950" value="French">
            French
          </option>
          <option className="bg-gray-950" value="Georgian">
            Georgian
          </option>
          <option className="bg-gray-950" value="German">
            German
          </option>
          <option className="bg-gray-950" value="Greek">
            Greek
          </option>
          <option className="bg-gray-950" value="Gujarati">
            Gujarati
          </option>
          <option className="bg-gray-950" value="Hebrew">
            Hebrew
          </option>
          <option className="bg-gray-950" value="Hindi">
            Hindi
          </option>
          <option className="bg-gray-950" value="Hungarian">
            Hungarian
          </option>
          <option className="bg-gray-950" value="Icelandic">
            Icelandic
          </option>
          <option className="bg-gray-950" value="Indonesian">
            Indonesian
          </option>
          <option className="bg-gray-950" value="Irish">
            Irish
          </option>
          <option className="bg-gray-950" value="Italian">
            Italian
          </option>
          <option className="bg-gray-950" value="Japanese">
            Japanese
          </option>
          <option className="bg-gray-950" value="Javanese">
            Javanese
          </option>
          <option className="bg-gray-950" value="Korean">
            Korean
          </option>
          <option className="bg-gray-950" value="Latin">
            Latin
          </option>
          <option className="bg-gray-950" value="Latvian">
            Latvian
          </option>
          <option className="bg-gray-950" value="Lithuanian">
            Lithuanian
          </option>
          <option className="bg-gray-950" value="Macedonian">
            Macedonian
          </option>
          <option className="bg-gray-950" value="Malay">
            Malay
          </option>
          <option className="bg-gray-950" value="Malayalam">
            Malayalam
          </option>
          <option className="bg-gray-950" value="Maltese">
            Maltese
          </option>
          <option className="bg-gray-950" value="Maori">
            Maori
          </option>
          <option className="bg-gray-950" value="Marathi">
            Marathi
          </option>
          <option className="bg-gray-950" value="Mongolian">
            Mongolian
          </option>
          <option className="bg-gray-950" value="Nepali">
            Nepali
          </option>
          <option className="bg-gray-950" value="Norwegian">
            Norwegian
          </option>
          <option className="bg-gray-950" value="Persian">
            Persian
          </option>
          <option className="bg-gray-950" value="Polish">
            Polish
          </option>
          <option className="bg-gray-950" value="Portuguese">
            Portuguese
          </option>
          <option className="bg-gray-950" value="Punjabi">
            Punjabi
          </option>
          <option className="bg-gray-950" value="Quechua">
            Quechua
          </option>
          <option className="bg-gray-950" value="Romanian">
            Romanian
          </option>
          <option className="bg-gray-950" value="Russian">
            Russian
          </option>
          <option className="bg-gray-950" value="Samoan">
            Samoan
          </option>
          <option className="bg-gray-950" value="Serbian">
            Serbian
          </option>
          <option className="bg-gray-950" value="Slovak">
            Slovak
          </option>
          <option className="bg-gray-950" value="Slovenian">
            Slovenian
          </option>
          <option className="bg-gray-950" value="Spanish">
            Spanish
          </option>
          <option className="bg-gray-950" value="Swahili">
            Swahili
          </option>
          <option className="bg-gray-950" value="Swedish ">
            Swedish{" "}
          </option>
          <option className="bg-gray-950" value="Tamil">
            Tamil
          </option>
          <option className="bg-gray-950" value="Tatar">
            Tatar
          </option>
          <option className="bg-gray-950" value="Telugu">
            Telugu
          </option>
          <option className="bg-gray-950" value="Thai">
            Thai
          </option>
          <option className="bg-gray-950" value="Tibetan">
            Tibetan
          </option>
          <option className="bg-gray-950" value="Tonga">
            Tonga
          </option>
          <option className="bg-gray-950" value="Turkish">
            Turkish
          </option>
          <option className="bg-gray-950" value="Ukrainian">
            Ukrainian
          </option>
          <option className="bg-gray-950" value="Urdu">
            Urdu
          </option>
          <option className="bg-gray-950" value="Uzbek">
            Uzbek
          </option>
          <option className="bg-gray-950" value="Vietnamese">
            Vietnamese
          </option>
          <option className="bg-gray-950" value="Welsh">
            Welsh
          </option>
          <option className="bg-gray-950" value="Xhosa">
            Xhosa
          </option>
        </select>
      </main>
    </>
  );
}
