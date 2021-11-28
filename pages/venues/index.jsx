import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import arrowLeft from "../../public/icons/arrow-left.svg";
import VendorCard from "../../components/cards/vendorCard";

const fs = require("fs");
export default function Venues({ venues }) {
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
        <VendorCard
          key={venue.name}
          cardTitle={venue.name}
          cardImage={venue.profilePicture}
          isBookmarked={venue.isBookmarked}
        />
      ))}
      <PufferPageBottom />
    </>
  );
}

export async function getStaticProps(context) {
  const data = fs.readFileSync(
    "/Users/sardiba/web/capstone-project/pages/venues/venues.json",
    { encoding: "utf8" }
  );
  const venues = JSON.parse(data);

  return {
    props: { venues }, // will be passed to the page component as props
  };
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

const PufferPageBottom = styled.div`
  height: 8vh;
`;
