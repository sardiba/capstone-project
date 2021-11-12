import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import Image from "next/image";
import editIcon from "../../public/icons/edit.svg";
import styled from "styled-components";
import { CreateCountdownTitle } from "../cardTitle/CreateCountdownTitle";

export default function CountdownCard() {
  const [pickedDate, setPickedDate] = useState(new Date());
  const [countdownDays, setCountdownDays] = useState("00");
  const [editMode, setEditMode] = useState(false);
  const [cardTitle, setCardTitle] = useState("");
  const [displayMode, setDisplayMode] = useState(false);
  const [editTitleMode, setEditTitleMode] = useState(true);
  const [displayTitleMode, setDisplayTitleMode] = useState(false);

  let interval = useRef();
  const startCountdown = () => {
    const countdownDate = new Date(pickedDate.toString()).getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      if (distance < 0) {
        //stop the countdown
        clearInterval(interval.current);
      } else {
        //continue the countdown
        setCountdownDays(days);
      }
    }, 100);
  };

  useEffect(() => {
    startCountdown();
    return () => {
      clearInterval(interval.current);
    };
  });

  const turnOnEditMode = () => {
    setEditMode(true);
    setDisplayMode(false);
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

  const turnOnDisplayMode = () => {
    setDisplayMode(true);
    setEditMode(false);
  };

  return (
    <>
      <CountdownWrapper className={displayMode ? "inactive" : ""}>
        <div className={editMode ? "inactive" : "active"}>
          <EditButton onClick={turnOnEditMode}>
            <Image src={editIcon} alt="edit" width={40} height={40} />
          </EditButton>
          <CreateLabel>CREATE YOUR COUNTDOWN</CreateLabel>
        </div>
        <div className={editMode ? "active" : "inactive"}>
          <div className={displayTitleMode ? "inactive" : "active"}>
            <CreateCountdownTitle onCreate={submitTitle} />
          </div>
          <h2 className={editTitleMode ? "inactive" : "active"}>
            {cardTitle} {"  "}
            <EditTitleButton onClick={editTitle}>
              <Image src={editIcon} width={12} height={12} />
            </EditTitleButton>
          </h2>
          <DatePickerWrapper>
            <p>pick your date here:</p>
            <DatePicker
              selected={pickedDate}
              onChange={(date) => setPickedDate(date)}
            />
          </DatePickerWrapper>
          <SaveButton onClick={turnOnDisplayMode}>save</SaveButton>
        </div>
      </CountdownWrapper>
      <CountdownWrapper className={displayMode ? "active" : "inactive"}>
        <section>
          <div className="counterWrapper" onClick={turnOnEditMode}>
            <span className="counter">DAY - </span>
            <span className="counter">{countdownDays}</span>
          </div>
          <div>
            <h2>{cardTitle}</h2>
          </div>
        </section>
      </CountdownWrapper>
    </>
  );
}

const CountdownWrapper = styled.section`
  width: 80vw;
  min-height: 120px;
  background-color: #e8e5df;
  border-radius: 7px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
  color: #5c5c5c;
  .counterWrapper {
    text-align: center;
  }
  .counter {
    font-family: "open sans", "roboto";
    color: rgba(133, 72, 72, 0.7);
    font-size: 50px;
    font-weight: lighter;
    text-align: center;
  }
  span {
    font-family: "open sans", "roboto";
    font-size: 13px;
  }
  h2 {
    font-family: "parisienne", "roboto";
    font-size: 20px;
    color: #5c5c5c;
    text-align: center;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 0px;
  }
`;

const CreateLabel = styled.p`
  color: #3f3f3f;
  font-family: "open sans", "roboto";
  font-size: 10px;
  text-align: center;
  margin-top: 0px;
  padding-bottom: 10px;
`;

const EditButton = styled.button`
  all: unset;
  padding-top: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const EditTitleButton = styled.button`
  all: unset;
`;
const DatePickerWrapper = styled.div`
  font-family: "open sans", "roboto";
  margin-left: 23%;
  padding-top: 5px;
  p {
    color: #5c5c5c;
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
