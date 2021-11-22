import styled from "styled-components";

const fs = require("fs");

export default function VenuePage({ venue }) {
  console.log(venue);

  if (!venue) return <Span>Loading</Span>;

  return <Span>{venue.name}</Span>;
}

export async function getStaticProps(context) {
  const {
    params: { slug },
  } = context;
  //   const venues = await fetch("venues.json", {
  //     headers: { "Content-Type": "application/json", Accept: "application/json" },
  //   });
  const data = fs.readFileSync(
    "/Users/sardiba/web/capstone-project/pages/venues/[slug]/venues.json",
    { encoding: "utf8" }
  );
  const venues = JSON.parse(data);
  console.log("**VENUE HERE**", venues);
  console.log(slug);
  const venue = venues.find((venue) => venue.slug === slug);
  console.log("VENUE", venue);

  return {
    props: { venue }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "abc" } }],
    fallback: true, // See the "fallback" section below
  };
}

const Span = styled.span`
  font-size: 60px;
`;
