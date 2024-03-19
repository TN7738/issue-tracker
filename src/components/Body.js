import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Body = () => {
    return (
        <>
            <Header />
            <div className="parent-wrap">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Body;
