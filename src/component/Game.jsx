import React from "react";
import { QUESTIONS } from "../questions.data";

export default function Game({ question, onClickVariant, step }) {
    const percentage = Math.round(step / QUESTIONS.length * 100)

    // console.log(percentage)
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black p-4">
        <div className="bg-gray-800/80 rounded-2xl p-8 w-full max-w-lg text-white">
        <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
            <div className="h-3 bg-indigo-500 transition-all duration-500" style={{ width: `${percentage}%` }}></div>
        </div>
          <h1 className="text-2xl font-bold m-6 text-center">
            {question.title}
          </h1>
          <ul className="space-y-4">
            {question.variants.map((text, index) => (
              <li onClick={() => onClickVariant(index)} key={text} className="px-4 py-3 rounded-lg bg-gray-700 hover:bg-indigo-600 cursor-pointer transition">
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
