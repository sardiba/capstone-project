import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import arrowLeft from "../public/icons/arrow-left.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import carouselVenue1Pic1 from "../public/images/carouselVenue1Pic1.jpeg";
import carouselVenue1Pic2 from "../public/images/carouselVenue1Pic2.jpeg";
import carouselVenue1Pic3 from "../public/images/carouselVenue1Pic3.jpeg";
import carouselVenue1Pic4 from "../public/images/carouselVenue1Pic4.jpeg";

export default function CarouselVenueElbdeckEventLocation() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
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
      <HeadingStyle>Photo Gallery</HeadingStyle>
      <GalleryTitle>ELBDECK EVENT LOCATION</GalleryTitle>
      <Carousel responsive={responsive}>
        <div>
          <Image
            src={carouselVenue1Pic1}
            alt="venue picture"
            width={400}
            height={250}
          />
        </div>
        <div>
          <Image
            src={carouselVenue1Pic2}
            alt="venue picture"
            width={400}
            height={250}
          />
        </div>
        <div>
          <Image
            src={carouselVenue1Pic3}
            alt="venue picture"
            width={400}
            height={250}
          />
        </div>
        <div>
          <Image
            src={carouselVenue1Pic4}
            alt="venue picture"
            width={400}
            height={250}
          />
        </div>
      </Carousel>

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

const GalleryTitle = styled.h2`
  font-family: "open sans", "roboto";
  font-size: 14px;
  color: #5c5c5c;
  text-align: center;
  padding-bottom: 15px;
`;

const PufferPageBottom = styled.div`
  height: 8vh;
`;
