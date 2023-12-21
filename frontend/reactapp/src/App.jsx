import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res?.data);
        console.log(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <>
      <div>
        <h1>Total jokes {jokes?.length}</h1>
        {jokes?.map((joke) => (
          <div key={joke.id}>{joke?.message}</div>
        ))}
      </div>
    </>
  );
}

export default App;
