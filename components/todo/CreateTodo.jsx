import styled from "styled-components";

export const CreateTodo = ({ onCreate }) => {
  return (
    <FormStyle
      onSubmit={(event) => {
        event.preventDefault();
        const newTodo = event.target.elements.newTodo.value; //event.target >> always the place where event take place!
        onCreate(newTodo);
      }}
    >
      <TextInputStyle type="text" name="newTodo" placeholder="add your to do" />
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