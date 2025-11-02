import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      if (calVal.trim() === "") return;
      const result = eval(calVal);
      setCalVal(result.toString());
    } else {
      setCalVal(calVal + buttonText); // ✅ this adds clicked button text
    }
  };

  return (
    <center>
      <div className={styles.calculator}>
        <Display displayvalue={calVal} />
        <ButtonsContainer onButtonClick={onButtonClick} />
      </div>
    </center>
  );
}

export default App;
