import { Fragment, useState } from "react";
import useFetch from "./hooks/useFetch";
import useLocalStorage from "./hooks/useLocalStorage";
import useWindowSize from "./hooks/useWindowSize";

function App() {
  //local storage hook
  const [value, setValue] = useLocalStorage("name", "jonathan");

  //window size hook
  const { width, height } = useWindowSize();

  //fetch hook
  const {responseJSON, isLoading, error} = useFetch('https://northwind.vercel.app/api/suppliers');
  const[url, setUrl] = useState('');

  return (
    <Fragment>
      <div style={{ padding: "100px" }}>
        {/* Use Window Size Custom Hook */}
        <div style={{border:'1px solid hotpink',marginBottom:'30px',padding:'10px',width:'30%'}} className="usewindowsize-hook">
          <h2>Use Window Size</h2>
          <span>
            <b>Current width</b>: {width}
          </span>
          <br />
          <span>
            <b>Current height</b>: {height}
          </span>
        </div>

        {/* Use Local Storage CCustom Hook */}
        <div style={{border:'1px solid darkgreen',padding:'10px',width:'30%',marginBottom:'30px'}} className="localstorage-hook">
          <h2>Welcome, custom useLocalStorage Hook...</h2>
          <p>
            while you're changing value of input, hook stores the current data
            in local storage
          </p>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
        </div>

        {/* Use Fetch Custom Hook */}
        <div style={{border:'1px solid red',padding:'10px',width:'30%'}} className="usefetch-hook">
          <input value={url} onChange = {(e)=> setUrl(e.target.value)} />
          {
            error ? <p style={{color:'red'}}>Error: {error}</p> :
            isLoading ? <p>Loading...</p> :
            <p>Response: {responseJSON}</p>
          }
        </div>
      </div>
    </Fragment>
  );
}

export default App;
