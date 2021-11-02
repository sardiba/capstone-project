import Head from "next/head";
import styled from "styled-components";
export default function Header({ title, subtitle }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Parisienne&display=swap"
          rel="stylesheet"
        />
      </Head>
      <HeaderWrapperStyle>
        <TitleStyle>{title}</TitleStyle>
        <SubtitleStyle>{subtitle}</SubtitleStyle>
      </HeaderWrapperStyle>
    </>
  );
}

const TitleStyle = styled.h1`
  color: rgba(133, 72, 72, 0.7);
  text-align: center;
  font-family: "parisienne", "roboto";
  font-size: 42px;
  margin-bottom: 0px;
  margin-top: 0px;
`;

const SubtitleStyle = styled.p`
  color: #1f1e1e;
  text-align: center;
  font-family: "open sans", "roboto";
  margin-top: -7px;
  font-size: 12px;
`;

const HeaderWrapperStyle = styled.div`
  background-color: #e2dbca;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  width: 100vw;
  padding: 5px;
  padding-top: 10px;
`;
