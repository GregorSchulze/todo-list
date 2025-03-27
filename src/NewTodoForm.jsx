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
    <div className="w-full p-4 sm:p-6 lg:p-8">
      <div className="m-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl">
          My Todo
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full rounded-lg max-w-md md:max-w-xl lg:max-w-2xl bg-white"
      >
        <div className="flex shadow-lg rounded-lg overflow-hidden">
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
            placeholder="Enter an activity..."
            className="flex-grow p-4 sm:px-5  text-base sm:text-lg border-0 focus:ring-2 focus:ring-sky-500 outline-none"
          />
          <button
            type="submit"
            className="bg-sky-600 hover:bg-sky-700 transition-colors px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-center"
            aria-label="Add todo"
          >
            <IoIosAddCircleOutline className="size-6 sm:size-7 fill-white" />
          </button>
        </div>
      </form>
    </div>
  );
}
