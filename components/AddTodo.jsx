"use client";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

export default function AddTodo({ todos, setTodos }) {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      title: newTitle,
      description: newDescription,
      completed: false,
    };
    setTodos([...todos, newTask]);
    setNewDescription("");
    setNewTitle("");
  };
  return (
    <div>
      <label className="btn btn-primary text-white ml-2" htmlFor="add_modal">
        Add new Todo <AiOutlinePlus size={20} />
      </label>
      <input type="checkbox" id="add_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="modal-action">
            <label
              htmlFor="add_modal"
              className="btn btn-sm btn-primary btn-circle absolute right-4 top-3"
            >
              ✕
            </label>
          </div>
          <h3 className="font-bold text-lg mt-4">Add new Todo</h3>
          <form onSubmit={handleSubmitTodo}>
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered input-primary w-full my-4"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              required
            />
            <textarea
              className="textarea textarea-lg textarea-primary w-full"
              placeholder="Description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              required
            ></textarea>
            <div className="modal-action">
              <button type="submit" className="btn btn-active btn-primary mt-3">
                <label htmlFor="add_modal">Add</label>
              </button>
            </div>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="add_modal">
          Close
        </label>
      </div>
    </div>
  );
}
