import axios from "axios";
import React, { useEffect, useState } from "react";

import { Text } from "./Fact.styled";

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

    return <Text>{catFact}</Text>;
}

export default App;
