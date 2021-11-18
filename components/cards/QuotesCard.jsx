import { useState, useEffect } from "react";
import styled from "styled-components";

export default function Quotes() {
  const [data, setData] = useState();

  async function updateQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const { statusCode, statusMessage, ...data } = await response.json();
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      setData(data);
    } catch (error) {
      // If the API request failed, log the error to console and update state
      // so that the error will be reflected in the UI.
      console.error(error);
      setData({ content: "Opps... Something went wrong" });
    }
  }

  // Run `updateQuote` once when component mounts
  useEffect(() => {
    updateQuote();
  }, []);

  // Do not render until the first quote is loaded
  if (!data) return null;

  console.log("*DATA*", data);
  return (
    <>
      <CardHeader>Quotes of the Day</CardHeader>
      <CardWrapper>
        <p>{data.content}</p>
        {data.author && <cite title="Source Title">{data.author}</cite>}
      </CardWrapper>
    </>
  );
}

const CardHeader = styled.h2`
  font-family: "parisienne", "roboto";
  font-size: 30px;
  color: #5c5c5c;
  text-align: center;
  margin-top: 45px;
`;

const CardWrapper = styled.section`
  font-family: "open sans", "roboto";
  font-size: 10px;
  text-align: center;
  width: 80vw;
  min-height: 100px;
  background-color: #e8e5df;
  border-radius: 7px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
`;
