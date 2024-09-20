import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Input from "../Input/Input";

const Navbar: FC = () => {

    const userName = useSelector((state: any) => state.user.name);
    console.log("userName", userName);

    const [searchText, setSearchText] = useState<string>("");

    const handleSearch = (e: any ) => {
        setSearchText(e.target.value);
        console.log("searchText", searchText);
    };

    return (
        <nav className="bg-[#6366f1] p-3 font-medium flex justify-between items-center text-white">
            <Link to={"/"}>Ecommerce Dashboard.</Link>
            <div>
                <Input
                    type="text"
                    placeholder="Search"
                    value={searchText}
                    onChange={handleSearch}
                    className="px-2.5 py-1 w-96 rounded-md outline-none text-black"
                />
            </div>
            <div className="flex space-x-2">
                {
                    userName ? (
                        <div>{`Welcome ${userName}`}</div>
                    ) : (
                        <></>
                    )
                }
            </div>
        </nav>
    );
};

export default Navbar;