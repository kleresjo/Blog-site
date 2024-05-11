import React, { useContext, useState } from "react";
import { AppContext } from '../App';

const ToggleButton = () => {
  const { inloggad } = useContext(AppContext);
  const { utloggad } = useContext(AppContext);
  const [buttonState, setButtonState] = useState(false);

  const handleButtonClick = () => {

    if (inloggad === "Inloggad som: Julia" && utloggad === "Logga in") {
      setButtonState(!buttonState);
    }
  };

  return (
    <button className="ToggleBtn" onClick={handleButtonClick}>
      {buttonState ? "Logga in" : "Inloggad som: Julia"}
    </button>
  );
};

export default ToggleButton;
