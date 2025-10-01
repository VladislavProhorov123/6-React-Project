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
    { code: "+380", name: "Ukraine" },
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
    <div className=" px-[15px] py-[20px] mx-auto max-w-[600px] border">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4">
          <label className="flex-1 flex flex-col">
            Имя
            <input
              className="border"
              type="text"
              {...register("firstName", {
                required: "Обязательное поле",
                minLength: { value: 2, message: "Минимум 2 символа" },
                maxLength: { value: 30, message: "Максимум 30 символов" },
              })}
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}
          </label>
          <label htmlFor="">
            Фамилия
            <input
              className="border"
              type="text"
              {...register("lastName", {
                required: "Обязательное поле",
                minLength: { value: 2, message: "Минимум 2 символа" },
                maxLength: { value: 30, message: "Максимум 30 символов" },
              })}
            />
            {errors.lastName && <p>{errors.lastName.message}</p>}
          </label>
        </div>

        <div className="">
          <label>
            
            <select
              {...register("countryCode", { required: "Выберите страну" })}
            >
              <option value="">Выберите страну</option>
              {countries.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name} ({c.code})
                </option>
              ))}
            </select>
            <input
              type="tel"
              className="border"
              {...register("phone", { required: "Введите номер телефона" })}
            />
            {errors.countryCode && <p>{errors.countryCode.message}</p>}
            {errors.phone && <p>{errors.phone.message}</p>}
          </label>
        </div>

        <div className="">
          <label>
            Пароль
            <input
              className="border"
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
            {errors.password && <p>{errors.password.message}</p>}
            <input
              className="border"
              type="password"
              {...register("confirmPassword", {
                required: "Подтвердите пароль",
                validate: (value) =>
                  value === watch("password") || "Пароли не совпадают",
              })}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          </label>
        </div>
        <label>
          Email
          <input
            placeholder="Введите email"
            className="border"
            {...register("email", {
              required: "Введите email",
              maxLength: { value: 50, message: "Максимум 50 символов" },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Неверный формат email",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <label>
          Сообщение
          <textarea
            className="border"
            {...register("message", {
              required: "Введите сообщение",
              maxLength: { value: 500, message: "Максимум 500 символов" },
              minLength: { value: 10, message: "Минимум 10 символов" },
            })}
          ></textarea>
          {errors.message && <p>{errors.message.message}</p>}
        </label>

        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}
