import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Card from "../components/Card";
import arrowLeft from "../public/icons/arrow-left.svg";
import venuePic1 from "../public/images/venue1.jpg";
import venuePic2 from "../public/images/venue2.jpeg";
import venuePic3 from "../public/images/venue3.jpeg";
import venuePic4 from "../public/images/venue4.jpeg";

export default function GalleryVenue() {
  const venues = [
    {
      cardTitle: "ELBDECK EVENT LOCATION",
      cardImage: venuePic1,
      isBookmarked: false,
    },
    {
      cardTitle: "ELBSCHMIEDE ALTONA",
      cardImage: venuePic2,
      isBookmarked: false,
    },
    {
      cardTitle: "HAMBURG WHITE HOUSE",
      cardImage: venuePic3,
      isBookmarked: false,
    },
    {
      cardTitle: "THE PALACE- CONVENTION HALL",
      cardImage: venuePic4,
      isBookmarked: false,
    },
  ];
  return (
    <>
      <Head>
        {" "}
        <title>Dream Day Wedding Planner</title>
      </Head>
      <PufferPageTop />
      <LinkStyle href="/gallery">
        <Image src={arrowLeft} alt="back" width={30} height={30} />
      </LinkStyle>
      <HeadingStyle>Venue</HeadingStyle>
      {venues.map((venue) => (
        <Card cardTitle={venue.cardTitle} cardImage={venue.cardImage} />
      ))}
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

const LinkStyle = styled.a`
  display: block;
  position: fixed;
  z-index: 2;
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

const PufferPageBottom = styled.div`
  height: 8vh;
`;
