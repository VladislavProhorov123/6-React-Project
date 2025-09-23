import { useEffect, useMemo, useState } from "react";

function App() {
  const [searchTern, setSearchTern] = useState("");
  const items = ["apple", "banana", "grape", "orange", "mango"];

  const handleChange = (e) => {
    setSearchTern(e.target.value);
  };

  const filteredItem = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(searchTern.toLowerCase())
    );
  }, [searchTern]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700">
        <div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-8 w-full max-w-md text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">
            🍓Fruits Filter
          </h2>
          <input
            type="search"
            placeholder="Search fruit..."
            value={searchTern}
            onChange={handleChange}
            className="w-full p-3 mb-6 rounded-lg border border-white/30 bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <ul className="space-y-3">
            {filteredItem.map((item, index) => (
              <li
                classNamep-3
                rounded-lg
                bg-gradient-to-r
                from-indigo-600
                to-pink-500
                shadow-md
                text-center
                font-medium
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
