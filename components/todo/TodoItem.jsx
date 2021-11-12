// import "./TodoItem.css";
import styled from "styled-components";
import Image from "next/image";
import deleteIcon from "../../public/icons/delete.svg";

export const TodoItem = ({ name, id, isDone, deleteTodo, toggleClick }) => {
  const handleClick = () => {
    deleteTodo(id);
  };
  const listClassName = isDone ? "TodoItem TodoItem--is-done" : "TodoItem";

  return (
    <FormStyled>
      <TodoWrapper>
        <span>
          <input
            onClick={() => toggleClick(id)}
            type="checkbox"
            id={id}
            checked={isDone}
            name={id}
          />
        </span>
        <span className={listClassName}>
          <LabelStyled htmlFor={id}>{name}</LabelStyled>
        </span>
        <ButtonStyled type="button" onClick={handleClick}>
          <Image src={deleteIcon} alt="delete" width={15} height={15} />
        </ButtonStyled>
      </TodoWrapper>
    </FormStyled>
  );
};

const FormStyled = styled.form`
  margin-left: 30px;
`;

const TodoWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2.5fr 1fr;
`;
const LabelStyled = styled.label`
  font-size: 14px;
`;
const ButtonStyled = styled.button`
  all: unset;
  padding: 3px;
  border-radius: 3px;
`;
