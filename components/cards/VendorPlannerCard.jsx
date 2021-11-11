import Image from "next/image";
import editIcon from "../../public/icons/edit.svg";
import { Line, Circle } from "rc-progress";
import { CreateTitle } from "../cardTitle/createTitle";
import { todoCounter, todoCounterInString, TodoList } from "../todo/TodoList";
import styled from "styled-components";
import { useState } from "react";
import { useLocalStorageState } from "../../utils/localStorage";

export const calculatePercent = (value) => {
  return value * 100;
};

export default function VendorPlannerCard() {
  const [todos, setTodos] = useLocalStorageState("todos", []);
  const [editMode, setEditMode] = useState(false);
  const [displayMode, setDisplayMode] = useState(false);
  const [cardTitle, setCardTitle] = useState(""); // cardTitle is a string!! not an array
  const [editTitleMode, setEditTitleMode] = useState(true);
  const [displayTitleMode, setDisplayTitleMode] = useState(false);

  const turnOnEditMode = () => {
    setEditMode(true);
    setDisplayMode(false);
  };
  const turnOnDisplayMode = () => {
    setDisplayMode(true);
    setEditMode(false);
  };

  const submitTitle = (newTitle) => {
    setCardTitle(newTitle);
    setDisplayTitleMode(true);
    setEditTitleMode(false);
  };

  const editTitle = () => {
    setDisplayTitleMode(false);
    setEditTitleMode(true);
  };
  const percent = calculatePercent(todoCounter(todos));
  console.log("PERCENT", percent);

  return (
    <>
      <CardWrapper className={displayMode ? "inactive" : "active"}>
        <ButtonWrapper className={editMode ? "inactive" : "active"}>
          <EditButton onClick={turnOnEditMode}>
            <Image src={editIcon} alt="edit" width={40} height={40} />
          </EditButton>
          <p>add</p>
        </ButtonWrapper>
        <div className={editMode ? "active" : "inactive"}>
          <div className={displayTitleMode ? "inactive" : "active"}>
            <CreateTitle onCreate={submitTitle} />{" "}
          </div>
          <h3 className={editTitleMode ? "inactive" : "active"}>
            {cardTitle}{" "}
            <EditButton onClick={editTitle}>
              <Image src={editIcon} width={12} height={12} />
            </EditButton>
          </h3>
          <TodoList todos={todos} setTodos={setTodos} />
          <SaveButton onClick={turnOnDisplayMode}>save</SaveButton>
        </div>
      </CardWrapper>
      <CardWrapperSmall className={displayMode ? "active" : "inactive"}>
        <TodoListButton onClick={turnOnEditMode}>
          <ProgressBarWrapper>
            <h3>{cardTitle}</h3>
            <Line
              percent={percent}
              strokeWidth="5"
              trailWidth="5"
              strokeColor="#854848"
              trailColor="#ffffff"
            />
          </ProgressBarWrapper>
        </TodoListButton>
        <TodoCounterWrapper>{todoCounterInString(todos)}</TodoCounterWrapper>
      </CardWrapperSmall>
    </>
  );
}

const CardWrapper = styled.section`
  position: relative;
  width: 80vw;
  height: 200px;
  background-color: #e8e5df;
  border-radius: 7px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
  h3 {
    font-family: "open sans", "roboto";
    font-size: 14px;
    color: #5c5c5c;
    text-align: center;
    padding-top: 15px;
  }
`;

const CardWrapperSmall = styled(CardWrapper)`
  height: 120px;
`;

const EditButton = styled.button`
  all: unset;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 35%;
  left: 43%;
  opacity: 50%;
  p {
    margin: 0px;
    font-family: "open sans", "roboto";
  }
`;

const SaveButton = styled.button`
  all: unset;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  font-size: 10px;
  background-color: #854848;
  color: #ffffff;
  padding: 5px 20px 5px 20px;
  border-radius: 3px;
`;

const TodoListButton = styled.button`
  all: unset;
  font-family: "open sans", "roboto";
  display: block;
  margin-right: auto;
  margin-left: auto;
  color: #5c5c5c;
`;

const ProgressBarWrapper = styled.div`
  width: 60vw;
  height: 10px;
`;

const TodoCounterWrapper = styled.div`
  font-family: "open sans", "roboto";
  font-size: 14px;
  margin-left: 60vw;
  margin-top: 60px;
  color: #5c5c5c;
`;
