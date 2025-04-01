import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../screens/Home";
import AboutUs from "../screens/AboutUs";
import Demo from "../screens/Demo";
import ScheduleDemo from "../screens/ContactUs";

const NavBarRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<AboutUs />} />
                <Route path="/contact" element={<ScheduleDemo />} />
                <Route path="demo" element={<Demo />} />
            </Route>
        </Routes>
    );
};

export default NavBarRoutes;
