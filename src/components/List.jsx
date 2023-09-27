/* eslint-disable react/prop-types */
import Delete from "../assets/images/icon-cross.svg";
import Edit from "../assets/images/editIcon.svg";

export default function List({ item, setTodo, setIsUpdating, setUpdateInput }) {
  const handleDelete = (id) => {
    setTodo((todo) => todo.filter((t) => t.id !== id));
  };
  const handleChange = () => {
    setTodo((todo) =>
      todo.map((t) => {
        if (t.id === item.id) {
          return { ...t, isCompleted: !t.isCompleted };
        }
        return t;
      }),
    );
  };
  const handleUpdate = (id) => {
    setUpdateInput(id);
    setIsUpdating((prev) => !prev);
  };

  return (
    <li className="flex h-14 w-full cursor-pointer items-center justify-between border-b border-light-light-grayish-blue bg-white pl-5   dark:border-dark-very-dark-grayish-blue  dark:bg-dark-very-dark-desaturated-blue dark:text-dark-light-grayish-blue">
      <div className=" flex items-center gap-x-8">
        <input
          className="h-5 w-5 cursor-pointer  rounded-full focus:ring-transparent dark:bg-transparent   dark:checked:bg-primary-bright-blue dark:focus:ring-0 "
          checked={item.isCompleted}
          onChange={handleChange}
          type="checkbox"
        />
        <p className={item.isCompleted ? "line-through opacity-30" : ""}>
          {item.title}
        </p>
      </div>
      {!item.isCompleted && (
        <div className=" hide-buttons  flex h-full  items-center gap-x-4  pr-3">
          <button
            className=" h-full w-full "
            onClick={() => handleDelete(item.id)}
          >
            <img className=" h-4" src={Delete} alt="delete" />
          </button>
          <button
            className=" h-full w-full"
            onClick={() => handleUpdate(item.id)}
          >
            <img className=" h-5" src={Edit} alt="edit" />
          </button>
        </div>
      )}
    </li>
  );
}
