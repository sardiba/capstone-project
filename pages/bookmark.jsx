import Head from "next/head";
import styled from "styled-components";
import Card from "../components/Card";
import { useVendors } from "../context/VendorContext";

export default function Bookmark() {
  const [vendors, setVendors] = useVendors();
  return (
    <>
      <Head>
        {" "}
        <title>Dream Day Wedding Planner</title>
      </Head>
      <PufferPageTop />
      <HeadingStyle>Bookmarks</HeadingStyle>
      <div>
        <LableStyle>Venue</LableStyle>
        {vendors
          .filter(
            (vendor) => vendor.isBookmarked == true && vendor.type == "venue"
          )
          .map((vendor) => (
            <Card
              cardTitle={vendor.cardTitle}
              cardImage={vendor.cardImage}
              type={vendor.type}
              isBookmarked={vendor.isBookmarked}
            />
          ))}
      </div>
      <div>
        <LableStyle>Photography</LableStyle>
        {vendors
          .filter(
            (vendor) =>
              vendor.isBookmarked == true && vendor.type == "photography"
          )
          .map((vendor) => (
            <Card
              cardTitle={vendor.cardTitle}
              cardImage={vendor.cardImage}
              type={vendor.type}
              isBookmarked={vendor.isBookmarked}
            />
          ))}
      </div>
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

const PufferPageBottom = styled.div`
  height: 8vh;
`;
