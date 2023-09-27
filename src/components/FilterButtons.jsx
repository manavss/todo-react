/* eslint-disable react/prop-types */
function FilterButtons({ filter, setFilter }) {
  const buttons = ["All", "Active", "Completed"];
  return (
    <div className=" space-x-3">
      {buttons.map((button) => {
        return (
          <button
            key={button}
            className={`${
              filter === button ? "text-primary-bright-blue" : ""
            }  hover:text-light-very-dark-grayish-blue dark:hover:text-dark-light-grayish-blue-hover `}
            onClick={() => setFilter(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
}

export default FilterButtons;
