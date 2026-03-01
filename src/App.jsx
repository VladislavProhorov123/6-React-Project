import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import SimpleForm from "./component/SimpleForm";

export default function App() {

  return (
    <div className="">
      <h1 className="text-[32px] text-black font-bold flex justify-center mb-5">Form</h1>
      <SimpleForm  />
    </div>
  );
}
