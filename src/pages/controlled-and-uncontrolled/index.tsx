import { useState, type ChangeEvent } from "react";

export function ControlledAndUncontrolled() {

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }

  const [val, setVal] = useState('csx')

  return (
    <div>
      <input defaultValue="hello" type="text" onChange={onChange} />
      <input value={val} type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setVal(event.target.value)
      }} />
    </div>
  );
}