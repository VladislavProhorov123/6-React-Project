import React from 'react'

export default function Profile() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <div className="bg-white rounded-xl shadow p-6 max-w-md">
        <img
          className="w-24 h-24 rounded-full mx-auto mb-4"
          src="/Men.jpg"
          alt="avatar"
        />
        <h2 className="text-xl font-semibold text-center mb-2">Имя Фамилия</h2>
        <p className="text-gray-600 text-center mb-4">
          Здесь краткая информация о пользователе.
        </p>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
          Редактировать профиль
        </button>
      </div>
    </div>
  )
}

