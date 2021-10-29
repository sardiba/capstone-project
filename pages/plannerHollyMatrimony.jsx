import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import arrowLeft from "../public/icons/arrow-left.svg";

export default function GalleryVenue() {
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
      <DivStyle>
        {/* <h3>ELBDECK EVENT LOCATION</h3> */}
        <div className="cardContentWrapper"></div>
      </DivStyle>
      <LableStyle>Venue</LableStyle>
      <DivStyle>
        {/* <h3>ELBDECK EVENT LOCATION</h3> */}
        <div className="cardContentWrapper"></div>
      </DivStyle>
      <LableStyle>Photography</LableStyle>
      <DivStyle>
        {/* <h3>ELBDECK EVENT LOCATION</h3> */}
        <div className="cardContentWrapper"></div>
      </DivStyle>
      <LableStyle>Decoration and Flowers</LableStyle>
      <DivStyle>
        {/* <h3>ELBDECK EVENT LOCATION</h3> */}
        <div className="cardContentWrapper"></div>
      </DivStyle>
      <LableStyle>Bridal and Makeup</LableStyle>
      <DivStyle>
        {/* <h3>ELBDECK EVENT LOCATION</h3> */}
        <div className="cardContentWrapper"></div>
      </DivStyle>
      <LableStyle>Catering and Cake</LableStyle>
      <DivStyle>
        {/* <h3>ELBDECK EVENT LOCATION</h3> */}
        <div className="cardContentWrapper"></div>
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
  font-size: 14px;
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
  top: 90px;
  width: 14vw;
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
  display: block;
  width: 80vw;
  height: 100px;
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
  .cardContentWrapper {
    display: grid;
    grid-template-columns: 100px 100px;
    gap: 50px;
    padding-left: 35px;
  }
  div {
    display: grid;
    gap: 5px;
  }
  a {
    width: 80px;
    font-size: 12px;
    text-align: center;
    color: #ffffff;
    background-color: #854848;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
  }
`;
const PufferPageBottom = styled.div`
  height: 8vh;
`;
