import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import arrowLeft from "../public/icons/arrow-left.svg";

export default function PriceListVenueElbdeckEventLocation() {
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
      <HeadingStyle>Price List</HeadingStyle>
      <CardWrapper>
        <h2>ELBDECK EVENT LOCATION</h2>
        <TableStyled>
          <div className="firstRow">Ballroom</div>
          <div className="firstRow">Weekday</div>
          <div className="firstRow">Weekend</div>
          <div className="secondRow">Ballroom A</div>
          <div className="secondRow">1250 €</div>
          <div className="secondRow">2000 €</div>
          <div className="small">400 qm : up to 150 guests</div>
          <div className="small"></div>
          <div className="small"></div>
          <div className="lastRow">Ballroom B</div>
          <div className="lastRow">2000 €</div>
          <div className="lastRow">3000 €</div>
          <div className="small">700 qm : up to 300 guests</div>
          <div className="small"></div>
          <div className="small"></div>
        </TableStyled>
        <div>
          <ListStyled>
            <li>
              all prices include full day rent. Event can be held between 9.00 -
              22.00 CET/CEST
            </li>
            <li>
              decoration, lighting and all logistic needed can be installed 6
              hours before the event
            </li>
            <li>
              book a date = down payment 30% of total price (non refundable in
              case of a cancelation)
            </li>
            <li>
              full payment has to be completed 7 days before event at the latest
            </li>
            <li>
              for more details about rent terms and conditions, don't hesitate
              to contact our team
            </li>
          </ListStyled>
        </div>
      </CardWrapper>
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
  width: 14vw;
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

const CardWrapper = styled.section`
  font-size: 10px;
  font-weight: 300;
  position: relative;
  width: 90vw;
  min-height: 120px;
  background-color: #e8e5df;
  border-radius: 7px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
  h2 {
    font-family: "open sans", "roboto";
    font-size: 14px;
    color: #5c5c5c;
    text-align: center;
    padding-top: 15px;
  }
`;

const TableStyled = styled.div`
  display: grid;
  padding: 10px;
  grid-template-columns: 1.5fr 1fr 1fr;
  grid-template-rows: 30px 30px 20px 30px 20px;
  text-align: center;
  font-family: "open sans", "roboto";

  .firstRow {
    font-weight: 900;
    font-size: 12px;
    padding-top: 5px;
  }

  .secondRow,
  .lastRow {
    padding-top: 5px;
    border-top: 0.5px solid #cccccc;
  }

  .small {
    font-size: 8px;
  }
`;

const ListStyled = styled.ul`
  padding: 2vw 10vw 5vw 10vw;
`;

const PufferPageBottom = styled.div`
  height: 8vh;
`;
