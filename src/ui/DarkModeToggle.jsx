import { useDarkMode } from "../context/DarkModeContext";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

export default function DarkModeToggle() {
  const { isDarkMode, toggleMode } = useDarkMode();
  return (
    <ButtonIcon onClick={toggleMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}
