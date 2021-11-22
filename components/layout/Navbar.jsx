import Image from "next/image";
import styled from "styled-components";
import plannerIcon from "../../public/icons/calendar.svg";
import bookmarkIcon from "../../public/icons/bookmark-light.svg";
import galleryIcon from "../../public/icons/search.svg";
import homeIcon from "../../public/icons/home.svg";

export default function Navbar() {
  return (
    <NavbarWrapperStyle>
      <LinkStyle href="/">
        <IconWrapperStyle>
          <Image src={homeIcon} alt="home" width={23} height={23} />
        </IconWrapperStyle>
      </LinkStyle>
      <LinkStyle href="/gallery">
        <IconWrapperStyle>
          <Image src={galleryIcon} alt="gallery" width={22} height={22} />
        </IconWrapperStyle>
      </LinkStyle>
      <LinkStyle href="/bookmark">
        <IconWrapperStyle>
          <Image src={bookmarkIcon} alt="bookmark" width={23} height={23} />
        </IconWrapperStyle>
      </LinkStyle>
      <LinkStyle href="/planner">
        <IconWrapperStyle>
          <Image src={plannerIcon} alt="planner" width={19} height={19} />
        </IconWrapperStyle>
      </LinkStyle>
    </NavbarWrapperStyle>
  );
}

const NavbarWrapperStyle = styled.div`
  background-color: #e2dbca;
  padding: 10px;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 8vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const LinkStyle = styled.a`
  all: unset;
  padding-top: 10px;
`;

const IconWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 80%;
  &:active {
    transform: scale(1.5);
    opacity: 100%;
  }
`;
