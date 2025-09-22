import React from "react";
import { QUESTIONS } from "../questions.data";

export default function Result({ correct }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black p-4">
      <div className="bg-gray-800/80 backdrop-blur-md shadow-2xl rounded-2xl w-full max-w-md p-8 text-white flex flex-col items-center">
        <img
          className="w-32 h-32 mb-6 rounded-full shadow-lg object-cover object-left"
          src="/123.png"
          alt=""
        />
        <h2 className="text-2xl font-bold mb-6 text-center">
          Вы отгадали {correct} ответа из {QUESTIONS.length}
        </h2>
        <a href="/">
          <button className="cursor-pointer px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition text-white font-semibold">
            Попробовать снова
          </button>
        </a>
      </div>
    </div>
  );
}
