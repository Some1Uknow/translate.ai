"use client";
import { useState } from "react";
import InputBox from "./InputBox";
import OutputBox from "./OutputBox";
import Options from "./Options";

export default function MainContainer() {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [outputHeading, setOutputHeading] = useState<string>("Translated Text will appear in this box");
  const [outputLanguage, setOutputLanguage] = useState<string>("");
  return (
    <main className="flex flex-col md:flex-row mt-10 md:mt-20 justify-around px-4 md:px-0 space-y-4 md:space-y-0 md:space-x-4">
      <InputBox input={input} setInput={setInput} />
      <Options
        input={input}
        setOutput={setOutput}
        outputLanguage={outputLanguage}
        setOutputLanguage={setOutputLanguage}
        setOutputHeading={setOutputHeading}
      />
      <OutputBox
        output={output}
        outputHeading={outputHeading}
      />
    </main>
  );
}