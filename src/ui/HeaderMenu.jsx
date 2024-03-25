import styled from "styled-components";
import { useNavigate } from "react-router";
import { HiOutlineUser } from "react-icons/hi2";

import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import UserAvatar from "../features/authentication/UserAvatar";
import DarkModeToggler from "./DarkModeToggler";
import Button from "./Button";

const StyledUnorderedList = styled.ul`
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: right;
`;

export default function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyledUnorderedList>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <UserAvatar />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggler />
      </li>
      <li>
        <Logout />
      </li>
    </StyledUnorderedList>
  );
}
