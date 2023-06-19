import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import EditTodo from "./EditTodo";

export default function TodoList({ todos, setTodos, filterTodo }) {
  const [editTodo, setEditTodo] = useState(null);

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>STATUS</th>
              <th>TODOS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {filterTodo.map((todo) => (
              <tr key={todo.id}>
                <th>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox"
                      onClick={() => handleComplete(todo)}
                    />
                  </label>
                </th>
                <td
                  className={`w-full ${todo.completed ? "line-through" : ""} `}
                >
                  <div className="collapse bg-base-200 collapse-arrow">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                      {todo.title}
                    </div>
                    <div className="collapse-content">
                      <p>{todo.description}</p>
                    </div>
                  </div>
                </td>
                <td className=" h-full flex gap-5">
                  <label htmlFor="edit_modal">
                    <FiEdit
                      onClick={() => handleEdit(todo)}
                      cursor="pointer"
                      className="text-blue-500"
                      size={25}
                    />
                  </label>
                  <EditTodo
                    todos={todos}
                    setTodos={setTodos}
                    editTodo={editTodo}
                    setEditTodo={setEditTodo}
                  />
                  <FiTrash2
                    onClick={() => handleDelete(todo)}
                    cursor="pointer"
                    className="text-red-500"
                    size={25}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
