import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";


const Layout = ({ children }) => {
    return (
        <div className="flex h-screen">

            {/* Main Layout: Header + Content */}
            <div className="flex flex-col flex-1">
                <div className="gradient-background">
                    <Header />
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
