import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import arrowLeft from "../public/icons/arrow-left.svg";
import bookmark from "../public/icons/bookmark-light.svg";
import venuePic1 from "../public/images/venue1.jpg";
import venuePic2 from "../public/images/venue2.jpeg";
import venuePic3 from "../public/images/venue3.jpeg";
import venuePic4 from "../public/images/venue4.jpeg";
export default function GalleryVenue() {
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
      <DivStyle>
        <BookmarkButtonStyle>
          <Image src={bookmark} alt="bookmark" width={30} height={30} />
        </BookmarkButtonStyle>
        <h2>ELBDECK EVENT LOCATION</h2>
        <div className="cardContentWrapper">
          <Image src={venuePic1} alt="venue" width={100} height={100} />
          <div>
            <a href="">Pricelist</a>
            <a href="">Gallery</a>
            <a href="">Contact</a>
          </div>
        </div>
      </DivStyle>
      <DivStyle>
        <BookmarkButtonStyle>
          <Image src={bookmark} alt="bookmark" width={30} height={30} />
        </BookmarkButtonStyle>
        <h2>ELBSCHMIEDE ALTONA</h2>
        <div className="cardContentWrapper">
          <Image src={venuePic2} alt="venue" width={100} height={100} />
          <div>
            <a href="">Pricelist</a>
            <a href="">Gallery</a>
            <a href="">Contact</a>
          </div>
        </div>
      </DivStyle>
      <DivStyle>
        <BookmarkButtonStyle>
          <Image src={bookmark} alt="bookmark" width={30} height={30} />
        </BookmarkButtonStyle>
        <h2>HAMBURG WHITE HOUSE</h2>
        <div className="cardContentWrapper">
          <Image src={venuePic3} alt="venue" width={100} height={100} />
          <div>
            <a href="">Pricelist</a>
            <a href="">Gallery</a>
            <a href="">Contact</a>
          </div>
        </div>
      </DivStyle>
      <DivStyle>
        <BookmarkButtonStyle>
          <Image src={bookmark} alt="bookmark" width={30} height={30} />
        </BookmarkButtonStyle>
        <h2>THE PALACE- CONVENTION HALL</h2>
        <div className="cardContentWrapper">
          <Image src={venuePic4} alt="venue" width={100} height={100} />
          <div>
            <a href="">Pricelist</a>
            <a href="">Gallery</a>
            <a href="">Contact</a>
          </div>
        </div>
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
const BookmarkButtonStyle = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: -0.3em;
  left: 70vw;
`;

const DivStyle = styled.div`
  display: block;
  position: relative;
  width: 80vw;
  height: 170px;
  background-color: #e8e5df;
  border-radius: 7px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
  h2 {
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
