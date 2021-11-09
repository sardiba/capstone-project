import Image from "next/image";
import editIcon from "../../public/icons/edit.svg";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

export default function DateCard() {
  const [startDate, setStartDate] = useState(new Date());
  const [editMode, setEditMode] = useState(false);
  const [displayMode, setDisplayMode] = useState(false);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const turnOnEditMode = () => {
    setEditMode(true);
    setDisplayMode(false);
  };
  const turnOnDisplayMode = () => {
    setDisplayMode(true);
    setEditMode(false);
  };
  const cardClassNameEdit = displayMode ? "inactive" : "";
  // const cardClassNameDisplay = editMode ? "inactive" : "";
  return (
    <>
      <CardWrapper className={cardClassNameEdit}>
        <ButtonWrapper className={editMode ? "inactive" : "active"}>
          <EditButton onClick={turnOnEditMode}>
            <Image src={editIcon} alt="edit" width={40} height={40} />
          </EditButton>
          <p>add</p>
        </ButtonWrapper>
        <div className={editMode ? "active" : "inactive"}>
          <DatePickerWrapper>
            <p>pick your date here:</p>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </DatePickerWrapper>
          <SaveButton onClick={turnOnDisplayMode}>save</SaveButton>
        </div>
      </CardWrapper>
      <CardWrapper className={displayMode ? "active" : "inactive"}>
        <DateButton onClick={turnOnEditMode}>
          {startDate.toLocaleDateString("en", options)}
        </DateButton>
      </CardWrapper>
    </>
  );
}

const CardWrapper = styled.section`
  position: relative;
  width: 80vw;
  height: 120px;
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

const EditButton = styled.button`
  all: unset;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 25%;
  left: 43%;
  opacity: 50%;
  p {
    margin: 0px;
    font-family: "open sans", "roboto";
  }
`;
const DatePickerWrapper = styled.div`
  font-family: "open sans", "roboto";
  margin-left: 23%;
  padding-top: 5px;
  opacity: 70%;
  p {
    font-size: 12px;
  }
`;

const SaveButton = styled.button`
  all: unset;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  font-size: 10px;
  background-color: #854848;
  color: #ffffff;
  padding: 5px 20px 5px 20px;
  border-radius: 3px;
`;

const DateButton = styled.button`
  all: unset;
  font-family: "open sans", "roboto";
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding-top: 45px;
  color: #5c5c5c;
`;
