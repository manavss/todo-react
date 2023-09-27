export function filterTodo(filter, todos) {
  return todos.filter((item) => {
    if (filter === "All") {
      return true;
    } else if (filter === "Active") {
      return !item.isCompleted;
    } else if (filter === "Completed") {
      return item.isCompleted;
    }
    return true;
  });
}
