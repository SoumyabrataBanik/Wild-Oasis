import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

import ButtonIcon from "./ButtonIcon";
import { useDarkModeContext } from "../contexts/DarkModeContext";

export default function DarkModeToggler() {
  const { isDarkMode, toggleDarkMode } = useDarkModeContext();
  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun/> : <HiOutlineMoon />}
    </ButtonIcon>
  )
}