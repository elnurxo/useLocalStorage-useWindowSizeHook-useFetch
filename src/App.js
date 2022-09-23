import { Fragment } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import useWindowSize from "./hooks/useWindowSize";

function App() {
  const [value, setValue] = useLocalStorage("name", "jonathan");
  const { width, height } = useWindowSize();
  return (
    <Fragment>
      <div style={{ padding: "100px" }}>
        <div>
          <span><b>Current width</b>: {width}</span>
          <br/>
          <span><b>Current height</b>: {height}</span>
        </div>
        <h2>Welcome, custom useLocalStorage Hook...</h2>
        <p>
          while you're changing value of input, hook stores the current data in
          local storage
        </p>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    </Fragment>
  );
}

export default App;
