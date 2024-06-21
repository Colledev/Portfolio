import React from "react";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Resume from "../pages/Resume";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Transition from "../components/Transition";
import { Route, Routes } from "react-router-dom";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <Transition>
                            <Home />
                        </Transition>
                    </Layout>
                }
            />
            <Route
                path="/resume"
                element={
                    <Layout>
                        <Transition>
                            <Resume />
                        </Transition>
                    </Layout>
                }
            />
            <Route
                path="/projects"
                element={
                    <Layout>
                        <Transition>
                            <Projects />
                        </Transition>
                    </Layout>
                }
            />
            <Route
                path="/contact"
                element={
                    <Layout>
                        <Transition>
                            <Contact />
                        </Transition>
                    </Layout>
                }
            />
        </Routes>
    );
};

export default AppRoutes;
