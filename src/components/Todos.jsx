import { useSelector } from "react-redux";
// method that gives you access to the state

import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-2">
      <div>Todos</div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex justify-between gap-10 bg-gray-800 items-center px-20 rounded"
        >
          <span className="text-white py-2">{todo.text}</span>
          <button
            className="text-white bg-red-500 border-0 py-0 px-2 focus:outline-none hover:bg-red-600 rounded text-sm"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
