import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Register } from "./views/auth/Register.jsx";
import { Login } from "./views/auth/Login.jsx";
import { EmailVerification } from "./views/auth/EmailVerification.jsx";
import { Dashboard } from "./views/note/Dashboard.jsx";

import { BaseRoute } from "./components/protectedRoute/BaseRoute.jsx";
import { AuthProtectedRoute } from "./components/protectedRoute/AuthProtectedRoute.jsx";
import { AnonymousProtectedRoute } from "./components/protectedRoute/AnonymousProtectedRoute.jsx";

function protectRoutes(routes) {
    return routes.map((el) => {
        if (!el.protection) {
            return (
                <Route key={el.path} element={<BaseRoute></BaseRoute>}>
                    <Route path={el.path} element={el.element}></Route>
                </Route>
            );
        } else {
            return (
                <Route key={el.path} element={<BaseRoute></BaseRoute>}>
                    <Route element={el.protection}>
                        <Route path={el.path} element={el.element}></Route>
                    </Route>
                </Route>
            );
        }
    });
}

const routes = [
    {
        path: "/signup",
        element: <Register></Register>,
        protection: <AnonymousProtectedRoute></AnonymousProtectedRoute>,
    },
    {
        path: "/signin",
        element: <Login></Login>,
        protection: <AnonymousProtectedRoute></AnonymousProtectedRoute>,
    },
    {
        path: "/verify/",
        element: <EmailVerification></EmailVerification>,
        protection: <AnonymousProtectedRoute></AnonymousProtectedRoute>,
    },
    {
        path: "/",
        element: <Dashboard></Dashboard>,
        protection: <AuthProtectedRoute></AuthProtectedRoute>,
    },
];

export function Router() {
    return (
        <BrowserRouter>
            <Routes>{protectRoutes(routes)}</Routes>
        </BrowserRouter>
    );
}
