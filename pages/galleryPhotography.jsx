import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import arrowLeft from "../public/icons/arrow-left.svg";
import { useVendors } from "../context/VendorContext";
import VendorCard from "../components/cards/VendorCard";

export default function GalleryPhotography() {
  const [vendors, setVendors] = useVendors();
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
      <HeadingStyle>Photography</HeadingStyle>
      {vendors
        .filter((vendor) => vendor.type == "photography")
        .map((vendor) => (
          <VendorCard
            key={vendor.cardTitle}
            cardTitle={vendor.cardTitle}
            cardImage={vendor.cardImage}
            type={vendor.type}
            isBookmarked={vendor.isBookmarked}
          />
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
