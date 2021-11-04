import styled from "styled-components";

export const CreateTitle = ({ onCreate }) => {
  return (
    <FormStyle
      onSubmit={(event) => {
        const titleName = event.target.elements.newTitle.value; //event.target >> always the place where event take place!!
        onCreate(newTitle);
        event.preventDefault();
      }}
    >
      <TextInputStyle
        type="text"
        name="newTitle"
        placeholder="enter vendor name"
      />
      <SubmitButtonStyle type="submit" value="save" />
    </FormStyle>
  );
};
const FormStyle = styled.form`
  font-size: 10px;
  font-family: "open sans", "roboto";
  color: #5c5c5c;
`;
const TextInputStyle = styled.input`
  font-size: 12px;
  width: 180px;
  margin: 10px;
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
