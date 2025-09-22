import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="bg-gray-800/70 backdrop-blur-md shadow-xl rounded-2xl p-8 w-110 text-center">
        <h2 className="text-xl font-semibold mb-2">Счетчик:</h2>
        <h1 className="text-5xl font-bold mb-6">{count}</h1>
        <div className="flex gap-3 justify-center">
          <button
            className="text-white px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 active:scale-95 transition"
            onClick={() => setCount(count - 1)}
          >
            - Минус
          </button>
          <button
            className="text-white px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 active:scale-95 transition"
            onClick={() => setCount(0)}
          >
            Сбросить
          </button>
          <button
            className="text-white px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 active:scale-95 transition"
            onClick={() => setCount(count + 1)}
          >
            Плюс +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
