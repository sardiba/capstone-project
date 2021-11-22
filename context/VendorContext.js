import { createContext, useContext, useEffect, useState } from "react";
import venuePic1 from "../public/images/venue1.jpg";
import venuePic2 from "../public/images/venue2.jpeg";
import venuePic3 from "../public/images/venue3.jpeg";
import venuePic4 from "../public/images/venue4.jpeg";
import photographyPic1 from "../public/images/photography1.jpeg";
import photographyPic2 from "../public/images/photography2.jpeg";
import photographyPic3 from "../public/images/photography3.jpeg";
import photographyPic4 from "../public/images/photography4.jpeg";
import photographyPic5 from "../public/images/carouselVenue1Pic1.jpeg";
import { useLocalStorageState } from "../utils/localStorage";

const VendorContext = createContext({
  vendors: [],
  setVendors: () => {},
});

export function VendorProvider({ children }) {
  const [vendors, setVendors] = useLocalStorageState("vendors", [
    {
      cardTitle: "ELBDECK EVENT LOCATION",
      cardImage: venuePic1,
      type: "venue",
      isBookmarked: false,
    },
    {
      cardTitle: "ELBSCHMIEDE ALTONA",
      cardImage: venuePic2,
      type: "venue",
      isBookmarked: false,
    },
    {
      cardTitle: "HAMBURG WHITE HOUSE",
      cardImage: venuePic3,
      type: "venue",
      isBookmarked: false,
    },
    {
      cardTitle: "THE PALACE - CONVENTION HALL",
      cardImage: venuePic4,
      type: "venue",
      isBookmarked: false,
    },
    {
      cardTitle: "KILA PHOTOGRAPHY",
      cardImage: photographyPic1,
      type: "photography",
      isBookmarked: false,
    },
    {
      cardTitle: "ANNA DITTRICH FOTOGRAF",
      cardImage: photographyPic2,
      type: "photography",
      isBookmarked: false,
    },
    {
      cardTitle: "ALINA ATZLER FOTOGRAFIE",
      cardImage: photographyPic3,
      type: "photography",
      isBookmarked: false,
    },
    {
      cardTitle: "ALQISPH WEDDING PHOTO",
      cardImage: photographyPic4,
      type: "photography",
      isBookmarked: false,
    },
    {
      cardTitle: "LOVE LENSE PHOTOGRAPHY",
      cardImage: photographyPic5,
      type: "photography",
      isBookmarked: false,
    },
  ]);

  return (
    <VendorContext.Provider value={[vendors, setVendors]}>
      {children}
    </VendorContext.Provider>
  );
}
export function useVendors() {
  const context = useContext(VendorContext);

  if (!context)
    throw new Error("useVendor must be used inside a `VendorProvider`");

  return context;
}
