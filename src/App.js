import React from 'react';
import "./style/App.css";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import BottomBar from "./components/UI/bottombar/BottomBar";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <AppRouter />
            <BottomBar />
        </BrowserRouter>
    );
}

export default App;
