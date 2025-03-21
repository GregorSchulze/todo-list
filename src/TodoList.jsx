import { TodoItem } from "./TodoItem";

export function TodoList({
  todos,
  toggleToDo,
  deleteTodo,
  saveEdit,
  toggleEdit,
  editingValue,
  setEditingValue,
}) {
  return (
    <ul className="">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleToDo={toggleToDo}
            deleteTodo={deleteTodo}
            saveEdit={saveEdit}
            toggleEdit={toggleEdit}
            editingValue={editingValue}
            setEditingValue={setEditingValue}
          />
        );
      })}
    </ul>
  );
}
