import { CreateTodo } from "./CreateTodo";
import { TodoItem } from "./TodoItem";
import { useLocalStorageState } from "../../utils/localStorage";
import { v4 as uuidv4 } from "uuid";

export const TodoList = () => {
  //useLocalStorageState >> custom Hook function
  const [todos, setTodos] = useLocalStorageState("todos", []);
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id != id); // new array consists of undeleted todos
    setTodos(updatedTodos);
  };

  // const todoCounter = () => {
  //   const todoIsDone = todos.filter((todo) => todo.isDone); // new array consists of undeleted todos
  //   console.log(todoIsDone);
  // };

  const todoItems = todos.map(({ id, name }) => {
    return <TodoItem key={id} name={name} id={id} deleteTodo={deleteTodo} />;
  });

  return (
    <>
      <div>{todoItems}</div>
      <CreateTodo
        onCreate={(name) => {
          setTodos([...todos, { id: uuidv4(), name }]);
        }}
      />
      {/* <div>{todoCounter}</div> */}
    </>
  );
};
