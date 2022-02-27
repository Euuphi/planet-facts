import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { NavProvider } from "context/MenuContext";

// Components
import Planets from "pages/Planets";

function App() {
    return (
        <NavProvider>
            <Routes>
                <Route path="/" element={<Navigate to="/mercury" />} />
                <Route path="/:planet" element={<Planets />} />
            </Routes>
        </NavProvider>
    );
}

export default App;
