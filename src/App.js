import React from "react";
import { Route, Routes } from "react-router-dom";

// Components
import Planets from "pages/Planets";

function App() {
    return (
        <Routes>
            <Route path="/:planet" element={<Planets />} />
        </Routes>
    );
}

export default App;
