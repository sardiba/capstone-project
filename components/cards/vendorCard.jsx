import { useState } from "react";
import styled from "styled-components";
import bookmarkLight from "../../public/icons/bookmark-light.svg";
import bookmarkDark from "../../public/icons/bookmark-dark.svg";
import Image from "next/image";
import { useVendors } from "../../context/VendorContext";

export default function VendorCard({
  cardTitle,
  cardImage,
  isBookmarked,
  type,
}) {
  const [vendors, setVendors] = useVendors();

  const handleClick = () => {
    const clickedIndex = (element) => element.cardTitle == cardTitle;
    const cardIndex = vendors.findIndex(clickedIndex);
    console.log("**CLICKED CARD INDEX**", cardIndex);
    const newVendors = [...vendors];
    //Toggle the bookmark with ternary operation
    newVendors[cardIndex].isBookmarked
      ? (newVendors[cardIndex].isBookmarked = false)
      : (newVendors[cardIndex].isBookmarked = true);

    setVendors([...newVendors]);
  };
  const toggle = isBookmarked ? bookmarkDark : bookmarkLight;
  return (
    <CardWrapper>
      <BookmarkButtonStyle onClick={handleClick}>
        <Image src={toggle} alt="bookmark" width={30} height={30} />
      </BookmarkButtonStyle>
      <h2>{cardTitle}</h2>
      <div className="cardContentWrapper">
        <Image src={cardImage} alt="venue" width={100} height={100} />
        <div>
          <a href="">Pricelist</a>
          <a href="">Gallery</a>
          <a href="">Contact</a>
        </div>
      </div>
    </CardWrapper>
  );
}

const BookmarkButtonStyle = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: -0.3em;
  left: 70vw;
`;

const CardWrapper = styled.section`
  display: block;
  position: relative;
  width: 80vw;
  height: 170px;
  background-color: #e8e5df;
  border-radius: 7px;
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
  .cardContentWrapper {
    display: grid;
    grid-template-columns: 100px 100px;
    gap: 50px;
    padding-left: 35px;
  }
  div {
    display: grid;
    gap: 5px;
  }
  a {
    width: 80px;
    font-size: 12px;
    text-align: center;
    color: #ffffff;
    background-color: #854848;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
  }
`;
