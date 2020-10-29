import { useState } from "react";
import { APP_CNST_TOKEN_LABEL } from "../App.constants";

export default function TokenComponent({ onSubmit }) {
  const [inputVal, setInputVal] = useState("");
  const handleSubmit = () => {
    localStorage.setItem(APP_CNST_TOKEN_LABEL, inputVal);
    onSubmit();
  };

  return (
    <div className="AuthContainer">
      <label className="AuthInputLabel">Auth Token</label>
      <input
        className="AuthInputValue"
        type="text"
        value={inputVal}
        maxLength="40"
        onChange={(event) => {
          setInputVal(event.target.value);
        }}
      />
      <button  className="AuthInputButton" type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
