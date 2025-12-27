import React from 'react'

export default function Settings() {
  return (
     <div>
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      <form className="bg-white rounded-xl shadow p-6 max-w-lg space-y-4">
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full border rounded-lg p-2"
            placeholder="Введите email"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Пароль</label>
          <input
            type="password"
            className="w-full border rounded-lg p-2"
            placeholder="Введите новый пароль"
          />
        </div>
        <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 cursor-pointer">
          Сохранить
        </button>
      </form>
    </div>
  )
}
