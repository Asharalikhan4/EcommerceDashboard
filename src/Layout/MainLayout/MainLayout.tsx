import { FC } from "react";
import { Outlet, NavLink } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const MainLayout: FC = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="flex">
                <aside className="hidden lg:block h-screen lg:w-56 bg-gray-200">
                    <nav className="p-4">
                        <ul className="space-y-4">
                            <li>
                                <NavLink
                                    to="/orders"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-blue-500 font-semibold"
                                            : "text-black"
                                    }
                                >
                                    Orders
                                </NavLink>
                            </li>
 
                            <li>
                                <NavLink
                                    to="/customers"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-blue-500 font-semibold"
                                            : "text-black"
                                    }
                                >
                                    Customers
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </aside>

                {/* Main content */}
                <div className="flex-1">
                    <main className="p-4">
                        <Outlet />
                    </main>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;
