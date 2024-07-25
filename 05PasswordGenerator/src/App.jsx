import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // use useCallback for optimization coz this function is going to be run every time

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // now everytime i open the app or change lenght, charAll, or numAllo.. it should generate password
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  // copy the password from the ip field to the clipboard on clicking the button
  // we can use useRef to hold the ref of ip field
  const passRef = useRef(null);
  console.log(passRef.current);
  const copyToclipBoard = () => {
    window.navigator.clipboard.writeText(password);
    // use of useRef ..
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 5);
  };
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-4">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            ref={passRef}
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password "
          ></input>
          <button
            onClick={copyToclipBoard}
            className="bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setlength(e.target.value)}
            ></input>
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            ></input>
            <label>number?</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            ></input>
            <label>character?</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
