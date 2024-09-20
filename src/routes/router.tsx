import { createBrowserRouter } from "react-router-dom";

// Layout
import MainLayout from "../Layout/MainLayout/MainLayout";
import AuthLayout from "../Layout/AuthLayout/AuthLayout";

// Pages
import HomePage from "../pages/HomePage/HomePage";
import SigninPage from "../pages/SigninPage/SigninPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import CustomersPage from "../pages/CustomersPage/CustomersPage";
import OrdersPage from "../pages/OrdersPage/OrdersPage";
import OrderDetailsPage from "../pages/OrderDetailsPage/OrderDetailsPage";
import CustomersDetailsPage from "../pages/CustomerDetailsPage/CustomerDetailsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/customers",
                element: <CustomersPage />
            },
            {
                path: "/customers/:customerId",
                element: <CustomersDetailsPage />
            },
            {
                path: "/orders",
                element: <OrdersPage />,
            },
            {
                path: "/orders/:orderId",
                element: <OrderDetailsPage />
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "signin",
                element: <SigninPage />
            },
            {
                path: "signup",
                element: <SignupPage />
            }
        ]
    },
]);

export default router;