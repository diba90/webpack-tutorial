import React, { useState } from "react";
import { render } from "react-dom";
import { getUsers } from "./common/usersAPI";

function App() {
  const [state, setState] = useState("CLICK ME");
  getUsers().then((json) => console.log(json));
  return <button onClick={() => setState("CLICKED")}>{state}</button>;
}

render(<App />, document.getElementById("root"));
