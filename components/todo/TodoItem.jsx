// import "./TodoItem.css";
import styled from "styled-components";
import Image from "next/image";
import { useLocalStorageState } from "../../utils/localStorage";
import deleteIcon from "../../public/icons/delete.svg";

export const TodoItem = ({ name, id }) => {
  const [isDone, setIsDone] = useLocalStorageState(
    `todo-id-done : ${id}`,
    false
  );
  const [todos, setTodos] = useLocalStorageState("todos", []);
  const toggleClick = () => {
    setIsDone(!isDone);
  };
  const deleteTodo = (event) => {
    event.preventDefault();
    const updatedTodos = todos.filter((todo) => todo.name != name); // new array consists of undeleted todos
    setTodos(updatedTodos);
  };
  const listClassName = isDone ? "TodoItem TodoItem--is-done" : "TodoItem";

  return (
    <FormStyle>
      <TodoWrapper>
        <span onClick={toggleClick}>
          <input type="checkbox" id="name" name="name" />
        </span>
        <span onClick={toggleClick} className={listClassName}>
          <LabelStyle htmlFor="name">{name}</LabelStyle>
        </span>
        <ButtonStyle onClick={deleteTodo}>
          <Image src={deleteIcon} alt="delete" width={15} height={15} />
        </ButtonStyle>
      </TodoWrapper>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin-left: 30px;
`;

const TodoWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2.5fr 1fr;
`;
const LabelStyle = styled.label`
  font-size: 14px;
`;
const ButtonStyle = styled.button`
  all: unset;
  padding: 3px;
  border-radius: 3px;
`;
