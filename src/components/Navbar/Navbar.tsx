import React, { FC } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
    return (
        <nav className="bg-gray-200 p-3 font-medium flex justify-between">
            <Link to={"/"}>Ecommerce Dashboard.</Link>
            <div className="flex space-x-2">
                <Link to={"/auth/signin"}>Signin</Link>
                <Link to={"/auth/signup"}>Signup</Link>
            </div>
        </nav>
    );
};

export default Navbar;