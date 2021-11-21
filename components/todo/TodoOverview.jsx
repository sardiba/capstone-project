import { useLocalStorageState } from "../../utils/localStorage";
import { TodoItem } from "./TodoItem";
import styled from "styled-components";
import { useState } from "react";

export const TodoOverview = () => {
  const [todos, setTodos] = useLocalStorageState("todos", []);
  const [displayMode, setDisplayMode] = useState(false);

  const todoVenue = todos
    .filter((todo) => todo.type == "venue" && todo.isDone == false)
    .map(({ id, name, isDone }) => {
      return (
        <TodoItem
          key={id}
          name={name}
          id={id}
          isDone={isDone}
          isEditable={false}
        />
      );
    });

  const todoPhotography = todos
    .filter((todo) => todo.type == "photography" && todo.isDone == false)
    .map(({ id, name, isDone }) => {
      return (
        <TodoItem
          key={id}
          name={name}
          id={id}
          isDone={isDone}
          isEditable={false}
        />
      );
    });

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
          isEditable={false}
        />
      );
    });

  const todoBridal = todos
    .filter((todo) => todo.type == "bridal and makeup" && todo.isDone == false)
    .map(({ id, name, isDone }) => {
      return (
        <TodoItem
          key={id}
          name={name}
          id={id}
          isDone={isDone}
          isEditable={false}
        />
      );
    });

  const todoCatering = todos
    .filter((todo) => todo.type == "catering and cake" && todo.isDone == false)
    .map(({ id, name, isDone }) => {
      return (
        <TodoItem
          key={id}
          name={name}
          id={id}
          isDone={isDone}
          isEditable={false}
        />
      );
    });

  const toggleCollapse = () => {
    setDisplayMode(!displayMode);
  };

  return (
    <>
      <div>
        <ButtonStyled>Engagement Party</ButtonStyled>
        <ButtonStyled>Pre Wedding Shoot</ButtonStyled>
        <ButtonStyled onClick={toggleCollapse}>Holly Matrimony</ButtonStyled>
        <CardWrapper className={displayMode ? "active" : "inactive"}>
          <LinkStyled href="/plannerHollyMatrimony">
            <VenueLabel>Venue</VenueLabel>
            <TodoItemStyled>{todoVenue}</TodoItemStyled>
            <PhotographyLabel>Photography</PhotographyLabel>
            <TodoItemStyled>{todoPhotography}</TodoItemStyled>
            <DecorationLabel>Decoration and Flowers</DecorationLabel>
            <TodoItemStyled>{todoDecoration}</TodoItemStyled>
            <BridalLabel>Bridal and Makeup</BridalLabel>
            <TodoItemStyled>{todoBridal}</TodoItemStyled>
            <CateringLabel>Catering and Cake</CateringLabel>
            <TodoItemStyled>{todoCatering}</TodoItemStyled>
          </LinkStyled>
        </CardWrapper>
        <ButtonStyled>Wedding Reception</ButtonStyled>
      </div>
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

const LinkStyled = styled.a`
  all: unset;
`;

const ButtonStyled = styled.h2`
  font-family: "open sans", "roboto";
  font-size: 12px;
  width: 80vw;
  background-color: #dac1c1;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

const VenueLabel = styled.span`
  background-color: #96d6b6;
  color: #ffffff;
  font-size: 9px;
  font-family: "open sans", "roboto";
  padding: 3px 10px 3px 10px;
  border-radius: 3px;
  margin-left: 20px;
`;

const PhotographyLabel = styled(VenueLabel)`
  background-color: #6ab2e2;
`;

const DecorationLabel = styled(VenueLabel)`
  background-color: #e2ae6a;
`;

const BridalLabel = styled(VenueLabel)`
  background-color: #b38fca;
`;

const CateringLabel = styled(VenueLabel)`
  background-color: #df6fb4;
`;
