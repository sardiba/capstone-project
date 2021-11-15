import { useLocalStorageState } from "../../utils/localStorage";

export const TodoOverview = () => {
  const [todos, setTodos] = useLocalStorageState("todos", []);
  console.log("**TODOS**", todos);
  return <div>Hello World</div>;
};
