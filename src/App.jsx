import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button className="cursor-pointer px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition" onClick={() => setOpen(!open)}>Открыть окно</button>
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 relative">
            <button className="text-[22px] absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={() => setOpen(false)}>
              <i class="ri-close-line"></i>
            </button>
            <div className="flex flex-col items-center mb-6">
              <img className="w-20 h-20 rounded-full object-cover mb-3 shadow-md" src="/ava2.jpg" alt="" />
              <h3 className="text-lg font-semibold">Fronted Developer</h3>
              <p className="text-gray-500 text-sm">Ukraine, Kyiv</p>
            </div>
            <h1 className="text-xl font-bold text-gray-800 mb-3 text-center">
              Why Branches in Git Are Perfect for Managing Different Projects
            </h1>
            <p className="text-gray-600 leading-relaxed text-center">
              Branches in Git are a powerful way to separate different versions
              of your code. You can keep one project in the main branch and
              start a completely new one in another branch. This makes it easy
              to switch between projects, experiment safely, and keep your
              GitHub repository clean.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
