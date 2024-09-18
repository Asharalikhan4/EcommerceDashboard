import { FC, useState } from "react";
import { Link } from "react-router-dom";

import useDeviceType from "../../hooks/useDeviceType";
import Input from "../Input/Input";

const Navbar: FC = () => {

    const [searchText, setSearchText] = useState<string>("");

    const handleSearch = (e: any ) => {
        setSearchText(e.target.value);
        console.log("searchText", searchText);
    };

    const deviceType = useDeviceType();
    console.log("deviceType", deviceType);

    return (
        <nav className="bg-gray-200 p-3 font-medium flex justify-between items-center">
            <Link to={"/"}>Ecommerce Dashboard.</Link>
            <div>
                <Input
                    type="text"
                    placeholder="Search"
                    value={searchText}
                    onChange={handleSearch}
                    className="px-2.5 py-1 w-96 rounded-md outline-none"
                />
            </div>
            <div className="flex space-x-2">
                <Link to={"/auth/signin"}>Signin</Link>
                <Link to={"/auth/signup"}>Signup</Link>
            </div>
        </nav>
    );
};

export default Navbar;