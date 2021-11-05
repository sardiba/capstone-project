// import "./TodoItem.css";
import styled from "styled-components";
import Image from "next/image";
import { useLocalStorageState } from "../../utils/localStorage";
import deleteIcon from "../../public/icons/delete.svg";

export const TodoItem = ({ name, id }) => {
  const [isDone, setDone] = useLocalStorageState(`todo-id-done : ${id}`, false);
  const [todos, setTodos] = useLocalStorageState("todos", []);
  const toggleClick = () => {
    setDone(!isDone);
  };
  const deleteTodo = () => {
    const updatedTodos = todos.filter((todo) => todo.name != name); // new array consists of undeleted todos
    setTodos(updatedTodos);
  };
  const listClassName = isDone ? "TodoItem TodoItem--is-done" : "TodoItem";
  return (
    <FormStyle>
      <div onClick={toggleClick} className={listClassName}>
        <input type="checkbox" id="name" name="name" />
        <LabelStyle for="name">{name}</LabelStyle>
        <ButtonStyle onClick={deleteTodo}>
          <Image src={deleteIcon} alt="delete" width={15} height={15} />
        </ButtonStyle>
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin-left: 30px;
`;
const LabelStyle = styled.label`
  font-size: 14px;
`;
const ButtonStyle = styled.button`
  all: unset;
  padding: 3px;
  border-radius: 3px;
`;
