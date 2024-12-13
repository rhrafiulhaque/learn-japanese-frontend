import React from "react";
import { AiFillSound } from "react-icons/ai";
const Vocabulary = ({
  vocabulary,
  onNext,
  onPrevious,
  isFirstVocabulary,
  isLastVocabulary,
  onComplete,
}) => {
  const { word, pronunciation, meaning, whenToSay } = vocabulary;

  // Function to pronounce the word
  const pronounceWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "ja-JP";
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="lg:col-span-2 bg-white p-6 rounded-md shadow-md">
      <div className="flex gap-5" onClick={() => pronounceWord(word)}>
        <h2 className="text-3xl font-bold mb-4">{word}</h2>
        <p className="text-3xl cursor-pointer text-black hover:text-gray-500">
          <AiFillSound />
        </p>
      </div>
      <p className="text-sm text-red-500">
        [You can listen to the perfect pronunciation of the Japanese word by
        clicking on the word or the soundbar icon. After pressing the soundbar
        icon, please wait for 2-3 seconds. You will then hear the perfect
        pronunciation ]
      </p>
      <p className="text-xl text-gray-600 mb-2">
        <strong>Pronunciation:</strong> {pronunciation}
      </p>
      <p className="text-xl text-gray-600 mb-2">
        <strong>Meaning:</strong> {meaning}
      </p>
      <p className="text-xl text-gray-600">
        <strong>When to Say:</strong> {whenToSay}
      </p>
      <div className="flex justify-between mt-8">
        <button
          onClick={onPrevious}
          disabled={isFirstVocabulary}
          className={`w-1/3 bg-primary text-white py-2 px-4 rounded-md hover:bg-indigo-800 focus:outline-none ${
            isFirstVocabulary ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Previous
        </button>
        {!isLastVocabulary ? (
          <button
            onClick={onNext}
            className="w-1/3 bg-primary text-white py-2 px-4 rounded-md hover:bg-indigo-800 focus:outline-none"
          >
            Next
          </button>
        ) : (
          <button
            onClick={onComplete}
            className="w-1/3 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none"
          >
            Complete
          </button>
        )}
      </div>
    </div>
  );
};

export default Vocabulary;
