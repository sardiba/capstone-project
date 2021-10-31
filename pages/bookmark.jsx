import Head from "next/head";
import styled from "styled-components";

export default function Bookmark() {
  return (
    <>
      <Head>
        {" "}
        <title>Dream Day Wedding Planner</title>
      </Head>
      <PufferPageTop />
      <HeadingStyle>Bookmarks</HeadingStyle>
      <div></div>
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
