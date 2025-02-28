import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleToDo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleToDo={toggleToDo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
