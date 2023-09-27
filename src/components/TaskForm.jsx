/* eslint-disable react/prop-types */
import { memo } from "react";
import { useState } from "react";

function TaskForm({ onSubmit, isUpdating, initialValue }) {
  const [input, setInput] = useState(initialValue || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput("");
  };

  return (
    <form className=" mb-10 w-full" onSubmit={handleSubmit}>
      <input
        className="h-12 w-full rounded-md border-0 pl-10 text-lg shadow-md outline-none placeholder:text-light-dark-grayish-blue focus:ring-0 dark:bg-dark-very-dark-desaturated-blue dark:text-dark-light-grayish-blue"
        type="text"
        placeholder={
          isUpdating ? "Enter the updated task" : "Create a new todo..."
        }
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}

export default memo(TaskForm);
