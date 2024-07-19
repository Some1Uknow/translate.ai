"use client";
import { useState } from "react";
import InputBox from "./InputBox";
import OutputBox from "./OutputBox";
import Options from "./Options";

export default function MainContainer() {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [outputHeading, setOutputHeading] = useState<string>("");
  const [outputLanguage, setOutputLanguage] = useState<string>("");
  return (
    <main className="flex flex-row mt-20 justify-around">
      <InputBox input={input} setInput={setInput} />
      <Options
        outputLanguage={outputLanguage}
        setOutputLanguage={setOutputLanguage}
      />
      <OutputBox
        output={output}
        setOutput={setOutput}
        outputHeading={outputHeading}
        setOutputHeading={setOutputHeading}
      />
    </main>
  );
}
