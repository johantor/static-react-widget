import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [catFact, getCatFact] = useState("");

  const url = "https://catfact.ninja/fact";

  useEffect(() => {
    fetchFact();
  }, []);

  const fetchFact = () => {
    axios.get(url).then((response) => {
      const fact = response.data.fact;
      getCatFact(fact);
    });
  };

  var today = new Date();
  var date = today.getDate() + "/" + (today.getMonth() + 1);
  var time = today.getHours() + ":" + today.getMinutes();

  return (
    <div className="App">
      <header className="App-header">
        <p>Catfact of the moment, last fetched {date + " " + time}</p>
        <h1>{catFact}</h1>
      </header>
    </div>
  );
}

export default App;
