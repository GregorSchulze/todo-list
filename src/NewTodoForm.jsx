import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  // Submit
  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="">
        <div className="">
          <div className="">
            <input
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              type="text"
              id="item"
              placeholder="Enter an activity..."
              className=""
            />
            <button className="" type="submit">
              <IoIosAddCircleOutline className="" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
