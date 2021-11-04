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
    <FormStyle>
      <div onClick={toggleClick} className={listClassName}>
        {" "}
        <input type="checkbox" id="name" name="name" />
        <label for="name">{name}</label>
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin-left: 30px;
`;
