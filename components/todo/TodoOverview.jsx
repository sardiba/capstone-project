import { useLocalStorageState } from "../../utils/localStorage";
import { TodoItem } from "./TodoItem";
import styled from "styled-components";

export const TodoOverview = () => {
  const [todos, setTodos] = useLocalStorageState("todos", []);

  const todoVenue = todos
    .filter((todo) => todo.type == "venue" && todo.isDone == false)
    .map(({ id, name, isDone }) => {
      return (
        <TodoItem
          key={id}
          name={name}
          id={id}
          isDone={isDone}
          editAble={false}
        />
      );
    });
  console.log("todo venue", todoVenue);

  const todoPhotography = todos
    .filter((todo) => todo.type == "photography" && todo.isDone == false)
    .map(({ id, name, isDone }) => {
      return (
        <TodoItem
          key={id}
          name={name}
          id={id}
          isDone={isDone}
          editAble={false}
        />
      );
    });
  console.log("todo photpgraphy", todoPhotography);

  const todoDecoration = todos
    .filter(
      (todo) => todo.type == "decoration and flowers" && todo.isDone == false
    )
    .map(({ id, name, isDone }) => {
      return (
        <TodoItem
          key={id}
          name={name}
          id={id}
          isDone={isDone}
          editAble={false}
        />
      );
    });
  // onClick={toggleCollapse}
  console.log("todo decoration and flowers", todoDecoration);
  return (
    <>
      <CardWrapper>
        <ButtonStyled>Holly Matrimony</ButtonStyled>
        <VenueLable>Venue</VenueLable>
        <TodoItemStyled>{todoVenue}</TodoItemStyled>
        <PhotographyLable>Photography</PhotographyLable>
        <TodoItemStyled>{todoPhotography}</TodoItemStyled>
        <DecorationLable>Decoration and Flowers</DecorationLable>
        <TodoItemStyled>{todoDecoration}</TodoItemStyled>
      </CardWrapper>
    </>
  );
};

const TodoItemStyled = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
  form {
    display: block;
  }
  label {
    font-size: 12px;
  }
`;

const CardWrapper = styled.section`
  position: relative;
  width: 80vw;
  min-height: 120px;
  background-color: #e8e5df;
  border-radius: 7px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  padding-bottom: 20px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
  h3 {
    font-family: "open sans", "roboto";
    font-size: 14px;
    color: #5c5c5c;
    text-align: center;
  }
`;

const ButtonStyled = styled.h2`
  font-family: "open sans", "roboto";
  font-size: 12px;
  width: 50vw;
  background-color: #dac1c1;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const VenueLable = styled.span`
  background-color: #96d6b6;
  color: #ffffff;
  font-size: 9px;
  font-family: "open sans", "roboto";
  padding: 3px 10px 3px 10px;
  border-radius: 3px;
  margin-left: 20px;
`;

const PhotographyLable = styled(VenueLable)`
  background-color: #6ab2e2;
`;

const DecorationLable = styled(VenueLable)`
  background-color: #e2ae6a;
`;
