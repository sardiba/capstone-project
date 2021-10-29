import Head from "next/head";
import styled from "styled-components";

export default function Gallery() {
  return (
    <>
      <Head>
        {" "}
        <title>Dream Day Wedding Planner</title>
      </Head>
      <PufferPageTop />
      <HeadingStyle>Categories</HeadingStyle>
      <LinkStyle href="/galleryVenue">Venue</LinkStyle>
      <LinkStyle href="/galleryPhotography">Photography</LinkStyle>
      <LinkStyle>Catering and Wedding Cake</LinkStyle>
      <LinkStyle>Bridal and Makeup</LinkStyle>
      <LinkStyle>Decoration and Flowers</LinkStyle>
      <LinkStyle>Invitation and Souvenirs</LinkStyle>
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
  text-align: center;
  width: 80vw;
  margin: auto;
  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border: none;
  border-radius: 7px;
  background-color: #e8e5df;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
  &:active {
    background-color: #c2bcb1;
    transform: scale(1.1);
  }
`;
