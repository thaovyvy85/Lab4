import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Button() {
  const theme = useContext(ThemeContext);

  return (
    <button className={`button-${theme}`}>
      Themed Button
    </button>
  );
}

export default Button;
