import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import arrowLeft from "../public/icons/arrow-left.svg";
import phoneIcon from "../public/icons/phone.svg";
import emailIcon from "../public/icons/email.svg";
import locationIcon from "../public/icons/location.svg";
import clockIcon from "../public/icons/clock.svg";

export default function PriceListVenueElbdeckEventLocation() {
  return (
    <>
      <Head>
        {" "}
        <title>Dream Day Wedding Planner</title>
      </Head>
      <PufferPageTop />
      <LinkStyle href="/galleryVenue">
        <Image src={arrowLeft} alt="back" width={30} height={30} />
      </LinkStyle>
      <HeadingStyle>Contact</HeadingStyle>
      <CardWrapper>
        <h2>ELBDECK EVENT LOCATION</h2>
        <ContactWrapper>
          <ImageWrapper>
            <Image src={phoneIcon} alt="back" width={30} height={30} />
          </ImageWrapper>
          <a href="tel:04012345">(040) 12345</a>
          <ImageWrapper>
            <Image src={clockIcon} alt="back" width={30} height={30} />
          </ImageWrapper>
          <p>opening hours: 9.00 - 17.00</p>
          <ImageWrapper>
            <Image src={emailIcon} alt="back" width={30} height={30} />
          </ImageWrapper>
          <a href="mailto:verndorname@domain.com">vendorname@domain.com</a>
          <ImageWrapper>
            <Image src={locationIcon} alt="back" width={30} height={30} />
          </ImageWrapper>
          <p>Vendor Staße 29, 13579 Hamburg</p>
        </ContactWrapper>
      </CardWrapper>
      <PufferPageBottom />
    </>
  );
}

const PufferPageTop = styled.div`
  height: 10vh;
`;

const LinkStyle = styled.a`
  display: block;
  position: fixed;
  z-index: 2;
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

const HeadingStyle = styled.h1`
  font-family: "parisienne", "roboto";
  font-size: 30px;
  color: #5c5c5c;
  text-align: center;
  margin-top: 45px;
  margin-bottom: 45px;
`;

const CardWrapper = styled.section`
  font-size: 10px;
  font-weight: 300;
  position: relative;
  width: 90vw;
  min-height: 120px;
  background-color: #e8e5df;
  border-radius: 7px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
  h2 {
    font-family: "open sans", "roboto";
    font-size: 14px;
    color: #5c5c5c;
    text-align: center;
    padding-top: 25px;
  }
`;

const ContactWrapper = styled.div`
  display: grid;
  grid-template-rows: 50px 20px 50px 20px 50px 20px 50px 20px;
  justify-content: center;
  text-align: center;
  padding-bottom: 30px;
`;

const ImageWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
`;

const PufferPageBottom = styled.div`
  height: 8vh;
`;
