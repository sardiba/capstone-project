import Head from "next/head";
import styled from "styled-components";
import Vendor from "../components/Vendor";
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
      <Vendor title="Venue" type="venue" vendors={vendors} />
      <Vendor title="Photography" type="photography" vendors={vendors} />
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

const PufferPageBottom = styled.div`
  height: 8vh;
`;
