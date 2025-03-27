import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaRegSave } from "react-icons/fa";

export function TodoItem({
  completed,
  id,
  title,
  toggleToDo,
  deleteTodo,
  isEditing,
  saveEdit,
  toggleEdit,
  editingValue,
  setEditingValue,
}) {
  return (
    <li className="bg-white m-8 p-4 rounded-xl shadow-lg border border-gray-200 flex justify-between items-center">
      <div className="min-w-0 flex items-center">
        <input
          className="mr-4 rounded cursor-pointer size-5"
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleToDo(id, e.target.checked)}
          id={`todo-${id}`}
        />
        <label
          className={`truncate ${completed ? "line-through text-gray-400" : "text-gray-800"}`}
          htmlFor={`todo-${id}`}
        >
          {!isEditing && <span>{title}</span>}
        </label>
        {isEditing && (
          <input
            className="truncate border border-gray-300 rounded-lg"
            type="text"
            value={editingValue}
            onChange={(e) => setEditingValue(e.target.value)}
          />
        )}
      </div>

      <div className="flex gap-2 self-end sm-self-auto">
        {isEditing ? (
          <button
            onClick={() => saveEdit(id)}
            className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
          >
            <FaRegSave />
          </button>
        ) : (
          <button
            onClick={() => toggleEdit(id, title)}
            className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            <FaEdit />
          </button>
        )}
        <button
          onClick={() => deleteTodo(id)}
          className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
        >
          <FaRegTrashAlt />
        </button>
      </div>
    </li>
  );
}
