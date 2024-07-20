interface InputBoxProps {
  input: string;
  setInput: (value: string) => void;
}

export default function InputBox({ input, setInput }: InputBoxProps) {
  return (
    <div className="w-full md:w-2/5 h-full flex flex-col items-center border-gray-600 border rounded-xl">
      <p className="bg-gray-950 w-full p-3 md:p-5 text-sm md:text-base rounded-t-xl">
        Enter your text here in any language
      </p>
      <input
        aria-label="input-text"
        className="w-full flex-grow bg-inherit focus:outline-none p-2 text-sm md:text-base"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}