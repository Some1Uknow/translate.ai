import React from "react";

interface OutputBoxProps {
  output: string;
  outputHeading: string;

  setOutput: (value: string) => void;
  setOutputHeading: (value: string) => void;
}

export default function OutputBox({
  output,
  setOutput,
  outputHeading,
  setOutputHeading,
}: OutputBoxProps) {
  return (
    <div className="w-2/5 flex flex-col justify-center items-center border-gray-600 border rounded-xl">
      {" "}
      <p className="bg-gray-950 w-full p-5 rounded-t-xl sticky">
        Generating Text...
      </p>
      <textarea
        aria-label="input-text"
        className="w-full bg-inherit focus:outline-none"
      ></textarea>
    </div>
  );
}
