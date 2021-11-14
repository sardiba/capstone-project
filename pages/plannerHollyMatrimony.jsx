import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import arrowLeft from "../public/icons/arrow-left.svg";
import DateCard from "../components/cards/DateCard";
import VendorPlannerCard from "../components/cards/VendorPlannerCard";

export default function plannerHollyMatrimony() {
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
      <VendorPlannerCard type="venue" />
      <LableStyle>Photography</LableStyle>
      <VendorPlannerCard type="photography" />
      <LableStyle>Decoration and Flowers</LableStyle>
      <VendorPlannerCard type="decoration and flowers" />
      <LableStyle>Bridal and Makeup</LableStyle>
      <VendorPlannerCard type="bridal and makeup" />
      <LableStyle>Catering and Cake</LableStyle>
      <VendorPlannerCard type="catering and cake" />
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
  background-color: rgba(133, 72, 72, 0.7);
  &:active {
    background-color: rgba(133, 72, 72, 1);
    transform: scale(1.2);
  }
`;

const PufferPageBottom = styled.div`
  height: 8vh;
`;
