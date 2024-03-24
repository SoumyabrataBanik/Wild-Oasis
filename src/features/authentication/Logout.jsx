import ButtonIcon from "../../ui/ButtonIcon";
import {HiArrowRightOnRectangle} from "react-icons/hi2";
import { useLogout } from "./useLogout";
import styled from "styled-components";
import Spinner from "../../ui/Spinner";

const FullPage = styled.div`
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Logout() {

  const { logout, isLoading } = useLogout();

  if (isLoading) {
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    )
  }

  return (
    <ButtonIcon onClick={logout}>
      Logout
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
}
