import React from "react";
import { Text } from "./Fact.styled";

import catFact from "../../data/catfact.json";

function App() {
    const fact = catFact.fact;
    return <Text>{fact}</Text>;
}

export default App;
