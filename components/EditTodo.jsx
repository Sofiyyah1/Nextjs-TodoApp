import { useState, useEffect } from "react";

export default function EditTodo({ todos, setTodos, editTodo, setEditTodo }) {
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  useEffect(() => {
    if (editTodo) {
      setUpdatedTitle(editTodo.title);
      setUpdatedDescription(editTodo.description);
    } else {
      setUpdatedTitle("");
      setUpdatedDescription("");
    }
  }, [setUpdatedTitle, setUpdatedDescription, editTodo]);

  const updateTodo = (title, description, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, description, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  const handleEditTodo = (e) => {
    e.preventDefault();
    updateTodo(
      updatedTitle,
      updatedDescription,
      editTodo.id,
      editTodo.completed
    );
  };

  return (
    <>
      <input type="checkbox" id="edit_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="modal-action">
            <label
              htmlFor="edit_modal"
              className="btn btn-sm btn-primary btn-circle absolute right-4 top-3"
            >
              ✕
            </label>
          </div>
          <h3 className="font-bold text-lg mt-4">Edit</h3>
          <form onSubmit={handleEditTodo}>
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered input-primary w-full my-4"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
              required
            />
            <textarea
              className="textarea textarea-lg textarea-primary w-full"
              placeholder="Description"
              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
              required
            ></textarea>
            <div className="modal-action">
              <button type="submit" className="btn btn-active btn-primary mt-3">
                <label htmlFor="edit_modal">Edit</label>
              </button>
            </div>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="edit_modal">
          Close
        </label>
      </div>
    </>
  );
}
