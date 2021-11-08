import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import arrowLeft from "../public/icons/arrow-left.svg";
import { TodoList } from "../components/todo/TodoList";
import { CreateTitle } from "../components/cardTitle/CreateTitle";
import { useLocalStorageState } from "../utils/localStorage";
import DateCard from "../components/cards/DateCard";
import VendorPlannerCard from "../components/cards/VendorPlannerCard";

export default function plannerHollyMatrimony() {
  const [title, setTitle] = useLocalStorageState("title", {});
  return (
    <>
      <Head>
        {" "}
        <title>Dream Day Wedding Planner</title>
      </Head>
      <PufferPageTop />
      <LinkStyle href="/planner">
        <Image src={arrowLeft} alt="back" width={30} height={30} />
      </LinkStyle>
      <HeadingStyle>Holly Matrimony</HeadingStyle>
      <LableStyle>Date</LableStyle>
      <DateCard />
      <LableStyle>Venue</LableStyle>
      <VendorPlannerCard />
      <LableStyle>Photography</LableStyle>
      <DivStyle>
        {/* <h3>ELBDECK EVENT LOCATION</h3> */}
        <VendorPlannerCard />
      </DivStyle>
      <LableStyle>Decoration and Flowers</LableStyle>
      <DivStyle>
        {/* <h3>ELBDECK EVENT LOCATION</h3> */}
        <VendorPlannerCard />
      </DivStyle>
      <LableStyle>Bridal and Makeup</LableStyle>
      <DivStyle>
        {/* <h3>ELBDECK EVENT LOCATION</h3> */}
        <VendorPlannerCard />
      </DivStyle>
      <LableStyle>Catering and Cake</LableStyle>
      <DivStyle>
        {/* <h3>ELBDECK EVENT LOCATION</h3> */}
        <VendorPlannerCard />
      </DivStyle>
      <PufferPageBottom />
    </>
  );
}
const PufferPageTop = styled.div`
  height: 10vh;
`;

const HeadingStyle = styled.h1`
  font-family: "parisienne", "roboto";
  font-size: 30px;
  color: #5c5c5c;
  text-align: center;
  margin-top: 45px;
  margin-bottom: 45px;
`;

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

const LinkStyle = styled.a`
  display: block;
  position: fixed;
  z-index: 10;
  top: 90px;
  width: 50px;
  margin-top: 10px;
  margin-left: 5px;
  padding: 15px;
  border: none;
  border-radius: 50%;
  background-color: #854848;
  opacity: 70%;
  &:active {
    background-color: #6d3b3b;
    transform: scale(1.2);
  }
`;

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

const PufferPageBottom = styled.div`
  height: 8vh;
`;
