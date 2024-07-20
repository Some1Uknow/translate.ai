import React from "react";

interface OutputBoxProps {
  output: string;
  outputHeading: string;
}

export default function OutputBox({ output, outputHeading }: OutputBoxProps) {
  return (
    <div className="w-2/5 h-full flex flex-col items-center border-gray-600 border rounded-xl">
      <p className="bg-gray-950 w-full p-5 rounded-t-xl">{outputHeading}</p>
      <textarea
        value={output}
        aria-label="output-text"
        className="w-full bg-inherit focus:outline-none p-2 h-max"
        readOnly
      />
    </div>
  );
}