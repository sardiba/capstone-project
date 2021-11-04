import { CreateTodo } from "./CreateTodo";
import { TodoItem } from "./TodoItem";
import { useLocalStorageState } from "../../utils/localStorage";

export const TodoList = () => {
  const [todos, setTodos] = useLocalStorageState("todos", [
    //useLocalStorageState >> custom Hook function
    { id: 0, name: "Survey location" },
    { id: 1, name: "30% down payment" },
    { id: 2, name: "Full payment" },
  ]);

  const todoItems = todos.map(({ id, name }) => {
    return <TodoItem key={id} name={name} id={id} />;
  });

  return (
    <>
      <div>{todoItems}</div>
      <CreateTodo
        onCreate={(name) => {
          setTodos([...todos, { id: todos.length, name }]);
        }}
      />
    </>
  );
};
