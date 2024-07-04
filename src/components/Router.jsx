import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Form from "../Form";

export const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
        </Routes>
    );
};

