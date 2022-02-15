import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// Components
import Planets from "pages/Planets";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/mercury" />} />
            <Route path="/:planet" element={<Planets />} />
        </Routes>
    );
}

export default App;
