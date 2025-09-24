import React from "react";

export default function TodoItems({
  text,
  id,
  isComplete,
  deleteTodo,
  toggle,
}) {
  return (
    <div className="flex items-center my-3 gap-2">
      <div className="flex flex-1 items-center cursor-pointer">
        <span>
          {isComplete ? (
            <i onClick={() => toggle(id)} className="ri-checkbox-circle-fill text-orange-600 text-xl"></i>
          ) : (
            <i
              onClick={() => {
                toggle(id);
              }}
              className="ri-checkbox-blank-circle-line text-orange-600 text-xl"
            ></i>
          )}
        </span>
        <p className={`text-slate-700 ml-3 text-[17px] decoration-slate-500 ${isComplete ? 'line-through' : ''}`}>{text}</p>
      </div>
      <span>
        <i
          onClick={() => {
            deleteTodo(id);
          }}
          className="ri-delete-bin-6-line text-xl"
        ></i>
      </span>
    </div>
  );
}
