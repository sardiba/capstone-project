import { CreateTodo } from "./CreateTodo";
import { TodoItem } from "./TodoItem";
import { useLocalStorageState } from "../../utils/localStorage";
import { v4 as uuidv4 } from "uuid";

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
          console.log("**add new id**", name);
          setTodos([...todos, { id: uuidv4(), name }]);
        }}
      />
    </>
  );
};