import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import { Taller } from "./Pages/Taller/Taller";
import { Tecnologia } from "./Pages/Tecnologia/Tecnologia";
import { PracticaS } from "./Pages/PracticaS/PracticaS";
import { Home } from "./Pages/Home/Home"

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/taller" element={<Taller />}  />
            <Route path="/tecnologia" element={<Tecnologia />}  />
            <Route path="/practicaS" element={<PracticaS />}  />
        </Routes>
    )
}