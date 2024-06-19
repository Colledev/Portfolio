import Layout from "../layout/Layout";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <Home />
                    </Layout>
                }
            />
        </Routes>
    );
};

export default AppRoutes;
