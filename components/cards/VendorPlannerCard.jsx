import Image from "next/image";
import editIcon from "../../public/icons/edit.svg";
import { CreateTitle } from "../cardTitle/createTitle";
import { TodoList } from "../todo/TodoList";
import styled from "styled-components";
import { useLocalStorageState } from "../../utils/localStorage";

export default function VendorPlannerCard() {
  //   const [cardTitle, setCardTitle] = useLocalStorageState("card title", {});
  //   const vendorCardTitle = cardTitle.map(({ name }) => {
  //     return name;
  //   });
  return (
    <>
      <DivStyle className="startCard">
        <ButtonWrapper1>
          <EditButton>
            <Image src={editIcon} alt="edit" width={40} height={40} />
          </EditButton>
          <p>add</p>
        </ButtonWrapper1>
      </DivStyle>
      <DivStyle class="editCard">
        {/* <CreateTitle
          onCreate={(name) => {
            setCardTitle({ id: name, name });
          }}
        />
        <h3>{vendorCardTitle}</h3> */}
        <TodoList />
        <SaveButton>save</SaveButton>
      </DivStyle>
      <DivStyle class="displayCard">
        <TodoButton>VENDOR</TodoButton>
      </DivStyle>
    </>
  );
}

const DivStyle = styled.div`
  /* position: relative; */
  display: block;
  width: 80vw;
  height: 210px;
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
  /* position: absolute; */
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

const TodoButton = styled.button`
  all: unset;
  font-family: "open sans", "roboto";
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding-top: 45px;
  color: #5c5c5c;
`;
