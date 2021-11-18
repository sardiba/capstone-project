import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import Countdown from "../components/Countdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Quotes from "../components/cards/QuotesCard";
import QuotesCard from "../components/cards/QuotesCard";

export default function Home() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <Head>
        <title>Dream Day Wedding Planner</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PufferPageTop />
        <Countdown />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <QuotesCard />
      </main>
    </div>
  );
}

const PufferPageTop = styled.div`
  height: 10vh;
`;
