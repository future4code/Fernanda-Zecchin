import  { useState } from "react"
 
export const useInputs = () => {
  const [value, setValue] = useState("");

  const onChangeValue = event => {
    setValue(event.target.value);
  };

  return [value, onChangeValue];
};