import styled from "styled-components";

export const CreateCountdownTitle = ({ onCreate }) => {
  return (
    <FormStyled
      onSubmit={(event) => {
        const newTitle = event.target.elements.newTitle.value; //event.target >> always the place where event take place!!
        onCreate(newTitle);
        event.preventDefault();
      }}
    >
      <label>
        <ScreenReaderOnly>Countdown name</ScreenReaderOnly>
        <TextInputStyled
          type="text"
          name="newTitle"
          placeholder="enter countdown name"
          autoComplete="off"
        />
      </label>
      <SubmitButtonStyle type="submit" value="save" />
    </FormStyled>
  );
};

const FormStyled = styled.form`
  margin-left: 25px;
  padding-top: 10px;
  font-size: 10px;
  font-family: "open sans", "roboto";
  color: #5c5c5c;
`;

const ScreenReaderOnly = styled.span`
  display: inline-block;
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  width: 1px;
`;

const TextInputStyled = styled.input`
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
