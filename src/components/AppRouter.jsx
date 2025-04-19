import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Basket from "../pages/basket/Basket";
import Store from "../pages/store/Store";
import NotFound from "../pages/Not-found";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/store" />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/store" element={<Store />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRouter;