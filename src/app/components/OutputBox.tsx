import React from "react";

interface OutputBoxProps {
  output: string;
  outputHeading: string;
}

export default function OutputBox({ output, outputHeading }: OutputBoxProps) {
  return (
    <div className="w-full md:w-2/5 h-full flex flex-col items-center border-gray-600 border rounded-xl">
      <p className="bg-gray-950 w-full p-3 md:p-5 text-sm md:text-base rounded-t-xl">{outputHeading}</p>
      <textarea
        value={output}
        aria-label="output-text"
        className="w-full bg-inherit focus:outline-none p-2 h-max text-sm md:text-base"
        readOnly
      />
    </div>
  );
}