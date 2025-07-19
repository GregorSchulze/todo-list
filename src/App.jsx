import { useState, useEffect } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS"); // Überprüft den LocalStorage. Existiert ein Wert, wird dieser gespeichert
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  // Local Storage
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  // New ToDo
  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
          isEditing: false,
          editTitle: title,
        },
      ];
    });
    setNewItem("");
  }

  // Toggle
  function toggleToDo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  // Delete
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  // Toggle Edit
  function toggleEdit(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isEditing: true, editTitle: todo.title };
        }
        return todo;
      })
    );
  }

  function onEditTitleChange(id, newTitle) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, editTitle: newTitle };
        }
        return todo;
      })
    );
  }

  // Save Edited Title
  function saveEdit(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: todo.editTitle,
            isEditing: false,
          };
        }
        return todo;
      })
    );
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <TodoList
        todos={todos}
        toggleToDo={toggleToDo}
        deleteTodo={deleteTodo}
        saveEdit={saveEdit}
        toggleEdit={toggleEdit}
        onEditTitleChange={onEditTitleChange}
      />
    </>
  );
}
