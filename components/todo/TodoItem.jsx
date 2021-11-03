// import "./TodoItem.css";
import styled from "styled-components";
import { useLocalStorageState } from "../../utils/localStorage";

export const TodoItem = ({ name, id }) => {
  const [isDone, setDone] = useLocalStorageState(`todo-id-done : ${id}`, false);
  const toggleClick = () => {
    setDone(!isDone);
  };
  const listClassName = isDone ? "TodoItem TodoItem--is-done" : "TodoItem";
  return (
    <li onClick={toggleClick} className={listClassName}>
      {name}
    </li>
  );
};

// const ListStyle = styled.li`
//   list-style-type: none;
// `;
