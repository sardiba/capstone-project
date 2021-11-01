import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import arrowLeft from "../public/icons/arrow-left.svg";
import Card from "../components/Card";
import photographyPic1 from "../public/images/photography1.jpeg";
import photographyPic2 from "../public/images/photography2.jpeg";
import photographyPic3 from "../public/images/photography3.jpeg";
import photographyPic4 from "../public/images/photography4.jpeg";
import photographyPic5 from "../public/images/photography5.jpeg";

export default function GalleryPhotography() {
  const photographies = [
    {
      cardTitle: "KILA PHOTOGRAPHY",
      cardImage: photographyPic1,
      isBookmarked: false,
    },
    {
      cardTitle: "ANNA DITTRICH FOTOGRAF",
      cardImage: photographyPic2,
      isBookmarked: false,
    },
    {
      cardTitle: "ALINA ATZLER FOTOGRAFIE",
      cardImage: photographyPic3,
      isBookmarked: false,
    },
    {
      cardTitle: "ALQISPH WEDDING PHOTO",
      cardImage: photographyPic4,
      isBookmarked: false,
    },
    {
      cardTitle: "LOVE LENSE PHOTOGRAPHY",
      cardImage: photographyPic5,
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
      <HeadingStyle>Photography</HeadingStyle>
      {photographies.map((photography) => (
        <Card
          cardTitle={photography.cardTitle}
          cardImage={photography.cardImage}
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
