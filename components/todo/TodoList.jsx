import { CreateTodo } from "./CreateTodo";
import { TodoItem } from "./TodoItem";
import { useLocalStorageState } from "../../utils/localStorage";

export const TodoList = () => {
  //useLocalStorageState >> custom Hook function
  const [todos, setTodos] = useLocalStorageState("todos", []);

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
