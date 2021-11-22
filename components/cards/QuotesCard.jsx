import { useState, useEffect } from "react";
import styled from "styled-components";

export default function Quotes() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function updateQuote() {
    try {
      setIsLoading(true);
      const response = await fetch("https://api.quotable.io/random");
      const { statusCode, statusMessage, ...data } = await response.json();
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
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
  if (isLoading)
    return (
      <>
        {" "}
        <CardWrapper>
          <LoadingText>&quot;Loading..&quot;</LoadingText>
        </CardWrapper>{" "}
      </>
    );

  return (
    <>
      <CardWrapper>
        <p>{data.content}</p>
        {data.author && <cite title="Source Title">{data.author}</cite>}
      </CardWrapper>
    </>
  );
}

const LoadingText = styled.div`
  text-align: center;
  padding-top: 30px;
`;

const CardWrapper = styled.section`
  font-family: "open sans", "roboto";
  font-size: 10px;
  text-align: center;
  width: 80vw;
  min-height: 100px;
  background-color: #e8e5df;
  border-radius: 7px;
  margin-bottom: 25px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
`;
