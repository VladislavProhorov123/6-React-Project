import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Статистика</h2>
          <p>Здесь будет краткий обзор статистики.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Последние события</h2>
          <p>Здесь список последних событий.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Уведомления</h2>
          <p>Здесь можно вывести уведомления.</p>
        </div>
      </div>
    </div>
  )
}
