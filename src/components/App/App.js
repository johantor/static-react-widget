import React from "react";

import { Container, PreHeader } from "./App.styled";

import Fact from "../Fact";

function App() {
    return (
        <Container>
            <PreHeader>
                Catfact of the moment, fetched from API on build
            </PreHeader>
            <Fact></Fact>
        </Container>
    );
}

export default App;
