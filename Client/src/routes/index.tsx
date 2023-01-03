import { Route, Routes } from "react-router-dom";

import { Layout } from "../components/global/Layout";
import { Professional } from "../pages/professionals";
import { ProfessionalType } from "../pages/professionalType";

export function Router() {
    return (
        <>
            <Routes>
                    <Route path="/" element={<Professional/>}/>
                    <Route path="/profissionais/tipos" element={<ProfessionalType/>} />
            </Routes>
        </>
    )
}