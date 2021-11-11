// import "./TodoItem.css";
import styled from "styled-components";
import Image from "next/image";
import { useLocalStorageState } from "../../utils/localStorage";
import deleteIcon from "../../public/icons/delete.svg";
import { useEffect, useState } from "react";

export const TodoItem = ({ name, id, isDone, deleteTodo, toggleClick }) => {
  const handleClick = () => {
    deleteTodo(id);
  };
  const listClassName = isDone ? "TodoItem TodoItem--is-done" : "TodoItem";

  return (
    <FormStyled>
      <TodoWrapper>
        <span onClick={() => toggleClick(id)}>
          <input type="checkbox" id="name" name="name" checked={isDone} />
        </span>
        <span onClick={() => toggleClick(id)} className={listClassName}>
          <LabelStyled htmlFor="name">{name}</LabelStyled>
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
