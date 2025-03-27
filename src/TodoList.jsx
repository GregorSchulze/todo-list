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
    <div className="p-4 sm:px-6 w-full">
      <ul className="mx-auto w-full max-w-md md:max-w-xl lg:max-w-2xl">
        {todos.length === 0 && (
          <p className="text-center text-gray-500 p-4">
            No todos yet. Add one!
          </p>
        )}
        {todos.map((todo) => (
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
        ))}
      </ul>
    </div>
  );
}
