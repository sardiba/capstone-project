import Image from "next/image";
import { CreateTitle } from "../cardTitle/createTitle";
import { TodoList } from "../todo/TodoList";
import styled from "styled-components";

export default function VendorPlannerCard() {
  return (
    <DivStyle>
      <h3>
        <CreateTitle
          onCreate={(name) => {
            setTitle({ name });
          }}
        />{" "}
      </h3>
      <div>
        <TodoList />{" "}
      </div>
    </DivStyle>
  );
}

const DivStyle = styled.div`
  position: relative;
  display: block;
  width: 80vw;
  height: 220px;
  background-color: #e8e5df;
  border-radius: 7px;
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
