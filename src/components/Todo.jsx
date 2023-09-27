/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import List from "./List";
import TaskForm from "./TaskForm";
import { filterTodo } from "../filterTodo";
import FilterButtons from "./FilterButtons";
import Header from "./Header";
import { memo } from "react";

function Todo({ handleThemeSwitch, theme }) {
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todo")) || [],
  );
  const [filter, setFilter] = useState("All");
  const [updateInput, setUpdateInput] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const handleAddTask = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
      isCompleted: false,
    };
    setTodo([...todo, newTodo]);
  };

  const handleUpdateTask = (title) => {
    setTodo((todo) =>
      todo.map((item) => {
        if (item.id === updateInput) {
          item.title = title;
        }
        return item;
      }),
    );
    setIsUpdating(!isUpdating);
  };

  const handleClearCompleted = () => {
    const updatedTodos = todo.filter((item) => {
      return item.isCompleted === false;
    });
    setTodo(updatedTodos);
  };

  const filteredTodos = filterTodo(filter, todo);

  const itemsLeft = filteredTodos.filter((item) => {
    return !item.isCompleted;
  });

  return (
    <div className="absolute flex h-fit w-[19rem] flex-col gap-y-5 text-center  sm:w-[25rem] md:top-12 md:w-[32rem]">
      <Header theme={theme} handleThemeSwitch={handleThemeSwitch} />
      <div className="w-full">
        {!isUpdating && (
          <TaskForm onSubmit={handleAddTask} isUpdating={false} />
        )}

        {isUpdating && (
          <TaskForm onSubmit={handleUpdateTask} isUpdating={true} />
        )}

        <ul className="overflow-hidden rounded-md  shadow-md">
          {filteredTodos &&
            filteredTodos.map((item, i) => {
              return (
                <List
                  key={i}
                  setTodo={setTodo}
                  item={item}
                  setIsUpdating={setIsUpdating}
                  setUpdateInput={setUpdateInput}
                />
              );
            })}
        </ul>

        <ul>
          <li className=" flex h-14 items-center justify-between  rounded-b-md  bg-white px-5 text-light-dark-grayish-blue dark:bg-dark-very-dark-desaturated-blue dark:text-dark-light-grayish-blue">
            <p>{itemsLeft.length} items left</p>
            <div className=" hidden md:inline">
              <FilterButtons filter={filter} setFilter={setFilter} />
            </div>
            <button onClick={handleClearCompleted}>Clear completed</button>
          </li>
        </ul>

        <div className=" mt-8 flex h-14 items-center justify-center gap-x-3 rounded-md  bg-white shadow-md dark:bg-dark-very-dark-desaturated-blue  dark:text-dark-light-grayish-blue md:hidden">
          <FilterButtons filter={filter} setFilter={setFilter} />
        </div>
      </div>
    </div>
  );
}
export default memo(Todo);
