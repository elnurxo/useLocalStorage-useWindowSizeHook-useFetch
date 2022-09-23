import { Fragment } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [value, setValue] = useLocalStorage('name','jonathan');
  return (
    <Fragment>
      <div style={{padding:'100px'}}>
        <h2>Welcome, custom useLocalStorage Hook...</h2>
        <p>while you're changing value of input, hook stores the current data in local storage</p>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    </Fragment>
  );
}

export default App;
