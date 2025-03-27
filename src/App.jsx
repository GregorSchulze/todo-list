import { useState, useEffect } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [editingValue, setEditingValue] = useState("");
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
        { id: crypto.randomUUID(), title, completed: false, isEditing: false },
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
  function toggleEdit(id, currentTitle) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isEditing: true };
        }
        return todo;
      })
    );
    setEditingValue(currentTitle);
  }

  // Save Edited Title
  function saveEdit(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: editingValue, isEditing: false };
        }
        return todo;
      })
    );
    setEditingValue("");
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
        editingValue={editingValue}
        setEditingValue={setEditingValue}
      />
    </>
  );
}
