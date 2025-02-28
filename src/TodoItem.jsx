export function TodoItem({
  completed,
  id,
  title,
  toggleToDo,
  deleteTodo,
  isEditing,
  setEditingValue,
  saveEdit,
  toggleEdit,
}) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleToDo(id, e.target.checked)}
        />

        {title}
      </label>
      {todo.isEditing ? (
        <input
          className="edit-input"
          type="text"
          value={editingValue}
          onChange={(e) => setEditingValue(e.target.value)}
        />
      ) : (
        <span>{todo.title}</span>
      )}

      <div className="button-group">
        {todo.isEditing ? (
          <button onClick={() => saveEdit(todo.id)} className="btn btn-save">
            Save
          </button>
        ) : (
          <button
            onClick={() => toggleEdit(todo.id, todo.title)}
            className="btn btn-edit"
          >
            Edit
          </button>
        )}
        <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  );
}
