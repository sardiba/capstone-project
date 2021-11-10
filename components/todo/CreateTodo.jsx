import { useState } from "react";
import styled from "styled-components";

export const CreateTodo = ({ onCreate }) => {
  const [newTodoItemValue, setNewTodoItemValue] = useState("");
  return (
    <FormStyle
      value={newTodoItemValue}
      onSubmit={(event) => {
        event.preventDefault();
        setNewTodoItemValue("");

        const newTodo = event.target.elements.newTodo.value; //event.target >> always the place where event take place!

        onCreate(newTodo);
      }}
    >
      <TextInputStyle type="text" name="newTodo" />
      <SubmitButtonStyle type="submit" value="add" />
    </FormStyle>
  );
};

const FormStyle = styled.form`
  font-size: 10px;
  font-family: "open sans", "roboto";
`;
const TextInputStyle = styled.input`
  font-size: 12px;
  width: 180px;
  margin: 10px;
  margin-left: 35px;
`;
const SubmitButtonStyle = styled.input`
  all: unset;
  text-align: center;
  width: 30px;
  padding: 5px;
  border-radius: 3px;
  background-color: #854848;
  color: #ffffff;
`;
