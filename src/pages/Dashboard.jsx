import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("heroes");
  return (
    <div className="border p-[10px]">
      <h1>Dashboard</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et animi
        aliquam officia error porro, labore adipisci laboriosam saepe iste
        voluptatum ipsa totam quos eveniet, vitae numquam necessitatibus tenetur
        minus explicabo?
      </p>
      <div className="flex gap-4 mb-4 border-b">
        <button
          onClick={() => setActiveTab("heroes")}
          className={activeTab === "heroes" ? "border-b-2 border-blue-500" : ""}
        >
          Герои
        </button>
        <button onClick={() => setActiveTab('comments')} className={activeTab === 'comments' ? 'border-b-2 border-blue-500' : ''} >
          Коментарии
        </button>
        <button onClick={() => setActiveTab('similar')} className={activeTab === 'similar' ? 'border-b-2 border-blue-500' : ''}>
          Похожие фильмы 
        </button>
      </div>

      <div>
        {activeTab === 'heroes' && (
          <div>
            <h2>Герои фильма</h2>
            <p>Содержимое вкладки Герои...</p>
          </div>
        )}
        {activeTab === 'comments' && (
          <div>
            <h2>Комментарии</h2>
            <p>Содержимое вкладки Комментарии...</p>
          </div>
        )}
        {activeTab === 'similar' && (
          <div>
            <h2>Похожие фильмы</h2>
            <p>Содержимое вкладки Похожие фильмы...</p>
          </div>
        )}
      </div>
    </div>
  );
}
