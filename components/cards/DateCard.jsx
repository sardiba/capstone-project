import Image from "next/image";
import editIcon from "../../public/icons/edit.svg";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

export default function DateCard() {
  const [startDate, setStartDate] = useState(new Date());
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // const [isFlipped, setIsFlipped] = useState(false);
  return (
    <>
      <LableStyle>Date</LableStyle>
      <DivStyle className="startCard">
        {/* <h3>ELBDECK EVENT LOCATION</h3> */}
        <ButtonWrapper1>
          {/* onClick={() => setIsFlipped((isFlipped) => !isFlipped)} */}
          <EditButton>
            <Image src={editIcon} alt="edit" width={40} height={40} />
          </EditButton>
          <p>add</p>
        </ButtonWrapper1>
      </DivStyle>
      <DivStyle className="editCard">
        {/* <h3>ELBDECK EVENT LOCATION</h3> */}
        <DatePickerWrapper>
          <p>pick your date here:</p>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </DatePickerWrapper>
        <ButtonWrapper2>
          <SaveButton>save</SaveButton>
        </ButtonWrapper2>
      </DivStyle>
      <DivStyle className="displayCard">
        <DateButton>{startDate.toLocaleDateString("en", options)}</DateButton>
      </DivStyle>
    </>
  );
}

const LableStyle = styled.h2`
  font-family: "open sans", "roboto";
  font-size: 12px;
  margin-left: 20px;
  width: 50vw;
  background-color: #dac1c1;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
`;

const DivStyle = styled.div`
  position: relative;
  display: block;
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

const ButtonWrapper1 = styled.div`
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
  p {
    opacity: 70%;
    font-size: 12px;
  }
`;

const SaveButton = styled.button`
  all: unset;
  margin-top: 45px;
  font-size: 12px;
  background-color: #854848;
  color: #ffffff;
  padding: 5px 20px 5px 20px;
  border-radius: 3px;
`;

const ButtonWrapper2 = styled.div`
  position: absolute;
  top: 30%;
  left: 38%;
  opacity: 70%;
  p {
    margin: 0px;
  }
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
