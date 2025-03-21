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
    <li className="">
      <div className="">
        <div className="">
          <input
            className=""
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleToDo(id, e.target.checked)}
            id={`todo-${id}`}
          />
          <label className="" htmlFor={`todo-${id}`}>
            {!isEditing && <span>{title}</span>}
          </label>
        </div>
        {isEditing && (
          <input
            className=""
            type="text"
            value={editingValue}
            onChange={(e) => setEditingValue(e.target.value)}
          />
        )}
      </div>

      <div>
        {isEditing ? (
          <button
            onClick={() => saveEdit(id)}
            className="btn btn-success btn-sm me-2"
          >
            <FaRegSave className="icon" />
          </button>
        ) : (
          <button
            onClick={() => toggleEdit(id, title)}
            className="btn btn-primary btn-sm me-2"
          >
            <FaEdit className="icon" />
          </button>
        )}
        <button
          onClick={() => deleteTodo(id)}
          className="btn btn-danger btn-sm"
        >
          <FaRegTrashAlt className="icon" />
        </button>
      </div>
    </li>
  );
}
