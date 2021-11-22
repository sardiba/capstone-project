import styled from "styled-components";
import VendorCard from "./cards/VendorCard";

export default function Vendor({ title, type, vendors }) {
  return (
    <div>
      <LableStyle>{title}</LableStyle>
      {vendors
        .filter((vendor) => vendor.isBookmarked == true && vendor.type == type)
        .map((vendor) => (
          <VendorCard
            key={vendor.cardTitle}
            cardTitle={vendor.cardTitle}
            cardImage={vendor.cardImage}
            type={vendor.type}
            isBookmarked={vendor.isBookmarked}
          />
        ))}
    </div>
  );
}

const LableStyle = styled.h2`
  font-family: "open sans", "roboto";
  font-size: 14px;
  margin-left: 20px;
  width: 50vw;
  background-color: #dac1c1;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
`;
