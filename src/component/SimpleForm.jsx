import { message } from "antd";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function SimpleForm() {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const countries = [
    { code: "+1", name: "USA" },
    { code: "+44", name: "UK" },
    { code: "+380", name: "Ukraine"},
  ];

  const selectedCode = watch("countryCode");

  useEffect(() => {
    if (selectedCode) {
      const currentPhone = watch("phone") || "";
      if (!currentPhone.startsWith(selectedCode)) {
        setValue("phone", selectedCode);
      }
    }
  }, [selectedCode, setValue, watch]);

  const onSubmit = (data) => console.log(data);
  return (
    <div className=" px-[15px] py-[20px] mx-auto max-w-[600px] border rounded-xl shadow-md bg-white">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4">
          <label className="flex-1 flex flex-col text-sm font-medium text-gray-700">
            Имя
            <input
              className="border border-gray-400  p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
              type="text"
              {...register("firstName", {
                required: "Обязательное поле",
                minLength: { value: 2, message: "Минимум 2 символа" },
                maxLength: { value: 30, message: "Максимум 30 символов" },
              })}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.firstName.message}
              </p>
            )}
          </label>
          <label className="flex-1 flex flex-col text-sm font-medium text-gray-700">
            Фамилия
            <input
              className="border border-gray-400  p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              {...register("lastName", {
                required: "Обязательное поле",
                minLength: { value: 2, message: "Минимум 2 символа" },
                maxLength: { value: 30, message: "Максимум 30 символов" },
              })}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.lastName.message}
              </p>
            )}
          </label>
        </div>

        <div className="flex">
          <label>
            <select
              className="border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mr-[10px]"
              {...register("countryCode", { required: "Выберите страну" })}
            >
              <option value="" disabled>Выберите страну</option>
              {countries.map((c) => (
                <option key={c.code} value={c.code}>
                   {c.name} ({c.code})
                </option>
              ))}
            </select>
            <input
              type="tel"
              className="border border-gray-400  p-2 flex-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("phone", { required: "Введите номер телефона" })}
            />
            {errors.countryCode && (
              <p className="text-red-500 text-xs">
                {errors.countryCode.message}
              </p>
            )}
            {errors.phone && (
              <p className="text-red-500 text-xs">{errors.phone.message}</p>
            )}
          </label>
        </div>

        <div className="flex gap-4">
          <label className="flex-1 flex flex-col text-sm font-medium text-gray-700">
            Пароль
            <input
              className="border border-gray-400  p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              {...register("password", {
                required: "Введите пароль",
                minLength: { value: 6, message: "Минимум 6 символов" },
                maxLength: { value: 20, message: "Максимум 20 символов" },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d).+$/,
                  message:
                    "Пароль должен содержать хотя бы одну цифру и заглавную букву",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </label>
          <label className="flex-1 flex flex-col text-sm font-medium text-gray-700">
            Подтверждение
            <input
              className="border border-gray-400  p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              {...register("confirmPassword", {
                required: "Подтвердите пароль",
                validate: (value) =>
                  value === watch("password") || "Пароли не совпадают",
              })}
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
          </label>
        </div>

        <label className="flex flex-col text-sm font-medium text-gray-700">
          Email
          <input
            placeholder="Введите email"
            className="border border-gray-400  p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email", {
              required: "Введите email",
              maxLength: { value: 50, message: "Максимум 50 символов" },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Неверный формат email",
              },
            })}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </label>
        <label className="flex flex-col text-sm font-medium text-gray-700">
          Сообщение
          <textarea
            className="border border-gray-400  p-2 rounded-md h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("message", {
              required: "Введите сообщение",
              maxLength: { value: 500, message: "Максимум 500 символов" },
              minLength: { value: 10, message: "Минимум 10 символов" },
            })}
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
        </label>

        <button className="w-full bg-blue-600 text-white font-semibold rounded-md py-3 hover:bg-blue-700 transition cursor-pointer" type="submit">Отправить</button>
      </form>
    </div>
  );
}
