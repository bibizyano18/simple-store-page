import React from 'react';
import {Route, Routes} from "react-router-dom";
import Basket from "../pages/basket";
import Store from "../pages/store";
import NotFound from "../pages/not-found";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/basket" element={<Basket />} />
            <Route path="/store" element={<Store />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRouter;