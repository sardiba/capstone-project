import Head from "next/head";
import styled from "styled-components";
import CountdownCard from "../components/cards/CountdownCard";
import "react-datepicker/dist/react-datepicker.css";
import { TodoOverview } from "../components/todo/TodoOverview";
import QuotesCard from "../components/cards/QuotesCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dream Day Wedding Planner</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PufferPageTop />
        <HeadingStyled>Countdown</HeadingStyled>
        <CountdownCard />
        <HeadingStyled>Quotes of the Day</HeadingStyled>
        <QuotesCard />
        <HeadingStyled>Planner</HeadingStyled>
        <TodoOverview />
        <PufferPageBottom />
      </main>
    </div>
  );
}

const PufferPageTop = styled.div`
  height: 15vh;
`;

const HeadingStyled = styled.h1`
  font-family: "parisienne", "roboto";
  font-size: 30px;
  color: #5c5c5c;
  text-align: center;
  margin-top: 45px;
  margin-bottom: 20px;
`;

const PufferPageBottom = styled.div`
  height: 15vh;
`;
