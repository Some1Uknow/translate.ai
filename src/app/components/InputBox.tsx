interface InputBoxProps {
  input: string;
  setInput: (value: string) => void;
}

export default function InputBox({ input, setInput }: InputBoxProps) {
  return (
    <div className="w-2/5 flex flex-col justify-center items-center border-gray-600 border rounded-xl">
      {" "}
      <p className="bg-gray-950 w-full p-5 rounded-t-xl sticky">
        Enter your text here in any language
      </p>
      <textarea
        aria-label="input-text"
        className="w-full bg-inherit focus:outline-none p-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
    </div>
  );
}
