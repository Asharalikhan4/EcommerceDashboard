import { FC } from "react";
import { Outlet, NavLink } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


const sideBarLinks = ["Website", "App", "Orders", "Customers", "Products"];

const MainLayout: FC = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="flex">
                <aside className="hidden lg:block h-screen lg:w-52 bg-[#6366f1]">
                    <nav className="p-4">
                        <ul className="space-y-4">
                            {
                                sideBarLinks?.map((link) => (
                                    <li>
                                        <NavLink
                                            to={`/${link.toLowerCase()}`}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "text-gray-300 font-semibold"
                                                    : "text-white"
                                            }
                                        >
                                            {link}
                                        </NavLink>
                                    </li>
                                ))
                            }

                            {/* <li>
                                <NavLink
                                    to="/customers"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-gray-300 font-semibold"
                                            : "text-white"
                                    }
                                >
                                    Customers
                                </NavLink>
                            </li> */}
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
