import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./features/todoSlice";

function App() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (!todo.trim()) return;

    dispatch(addTodo(todo.trim()));
    setTodo("");
  };

  const handleDeleteTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-5">
      <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-2xl sm:p-10">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-3xl text-white shadow-lg">
            ✓
          </div>

          <h1 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
            My Todo List
          </h1>

          <p className="mt-2 text-gray-500">
            Organize your day, one task at a time.
          </p>
        </div>


        <form onSubmit={handleAddTodo} className="mb-8 flex gap-3">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="What needs to be done?"
            className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          />

          <button
            type="submit"
            className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-indigo-700 active:scale-95"
          >
            + Add
          </button>
        </form>

        {/* Todo Counter */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-bold text-gray-700">Your Tasks</h2>

          <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
            {todos.length} {todos.length === 1 ? "task" : "tasks"}
          </span>
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          {todos.length === 0 ? (
            <div className="rounded-2xl border-2 border-dashed border-gray-200 px-4 py-10 text-center">
              <div className="mb-3 text-4xl">📝</div>
              <p className="font-semibold text-gray-600">
                No tasks yet!
              </p>
              <p className="mt-1 text-sm text-gray-400">
                Add your first task above to get started.
              </p>
            </div>
          ) : (
            todos.map((todoItem) => (
              <div
                key={todoItem.id}
                className="group flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4 transition hover:border-indigo-200 hover:bg-indigo-50"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-100 font-bold text-indigo-600">
                  ✓
                </div>

                <span className="min-w-0 flex-1 break-words font-medium text-gray-700">
                  {todoItem.text}
                </span>

                <button
                  onClick={() => handleDeleteTodo(todoItem.id)}
                  className="shrink-0 rounded-lg bg-red-100 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-600 hover:text-white"
                  aria-label={`Delete ${todoItem.text}`}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 border-t border-gray-100 pt-5 text-center text-sm text-gray-400">
          Made with React & Redux Toolkit 💜
        </div>
      </div>
    </div>
  );
}

export default App;