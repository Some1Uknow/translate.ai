import { ChatMistralAI } from "@langchain/mistralai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

interface SubmitProps {
  input: string;
  outputLanguage: string;
  setOutput: (value: string) => void;
  setOutputHeading: (value: string) => void;
}

export default function Submit({
  input,
  outputLanguage,
  setOutput,
  setOutputHeading,
}: SubmitProps) {
  async function translateText(
    input: string,
    outputLanguage: string
  ): Promise<string> {
    setOutputHeading("Generating Text...");
    const model = new ChatMistralAI({
      apiKey: process.env.NEXT_PUBLIC_MISTRAL_API_KEY,
      model: "mistral-large-latest",
      temperature: 0,
    });

    const messages = [
      new SystemMessage(
        `Translate the given text:
Instructions:
1. Automatically identify the source language.
2. Translate the text into ${outputLanguage}.
3. If the message is informal, then translate it to its formal counterpart.
4. Provide ONLY the translated text in your response.
5. Maintain the original formatting, including line breaks and punctuation.
6. If there are any untranslatable elements (e.g., names, specialized terms), keep them in their original form.
7. Ensure the translation captures the tone and context of the original text.


Return only the translated text, with no additional explanations or metadata.`
      ),
      new HumanMessage(input),
    ];

    const response = await model.invoke(messages);

    // Handle different types of MessageContent
    if (typeof response.content === "string") {
      return response.content;
    } else if (Array.isArray(response.content)) {
      // If it's an array, join all string elements
      return response.content
        .filter((item) => typeof item === "string")
        .join(" ");
    } else {
      // If it's an object or any other type, convert to string
      return JSON.stringify(response.content);
    }
  }

  const handleTranslate = async () => {
    try {
      const translatedText = await translateText(input, outputLanguage);
      setOutput(translatedText);
      setOutputHeading(`Translated your text to ${outputLanguage}`);
    } catch (error) {
      console.error("Translation error:", error);
      setOutput("An error occurred during translation.");
    }
  };

  const isInputEmpty = !input || input.trim() === "";

  return (
    <button
      type="button"
      onClick={handleTranslate}
      disabled={isInputEmpty}
      className={`
        text-black bg-white rounded-md font-semibold 
        text-sm sm:text-base md:text-xl 
        p-2 
        text-center
        transition-colors
        ${isInputEmpty ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}
      `}
    >
      Translate
    </button>
  );
}
