import styled from "styled-components";
import { useDarkModeContext } from "../contexts/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkModeContext();

  const imgSrc = isDarkMode ? "logo-dark.png" : "logo-light.png";
  const imgAlt = isDarkMode ? "Logo-dark" : "Logo-light";

  return (
    <StyledLogo>
      <Img src={imgSrc} alt={imgAlt} />
    </StyledLogo>
  );
}

export default Logo;
