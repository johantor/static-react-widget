import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [catFact, getCatFact] = useState("");

  const url = "catfact.json";

  useEffect(() => {
    fetchFact();
  }, []);

  const fetchFact = () => {
    axios.get(url).then((response) => {
      const fact = response.data.fact;
      getCatFact(fact);
    });
  };

  return <h1>{catFact}</h1>;
}

export default App;
