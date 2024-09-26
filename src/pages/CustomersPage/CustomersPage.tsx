import { FC, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

import { BASE_URL } from "../../config/constants";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import { MdDeleteSweep } from "react-icons/md";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const CustomersPage: FC = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [deleteModal, setDeleteModal] = useState<boolean>(false);
    const [userSearch, setUserSearch] = useState<string>("");
    const [users, setUsers] = useState<any>([]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/user/all-users`);
            if (response.status === 200 && response?.data?.users) {
                toast.success(response?.data?.message)
                setUsers(response?.data?.users);
            };
        } catch (error) {
            console.log(error);
            toast.error("Failed to fetch users");
        }
    };

    const handleDelete = (e: any) => {
        e.stopPropagation();
        e.preventDefault();
        setDeleteModal(!deleteModal);
    };

    const handleUserSearch = () => {   
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <DeleteModal onClose={handleDelete} isOpen={deleteModal} />
            <div className="flex items-center justify-between my-2">
                <h1 className="text-2xl font-semibold">Customers</h1>
                <div className="space-x-2">
                    <Button name="Filters" onClick={() => { }} className="bg-blue-500 text-white p-2 rounded-lg" />
                    <Button name="Refresh" onClick={fetchUsers} className="bg-blue-500 text-white p-2 rounded-lg" />
                </div>
            </div>
            <Input type="text" placeholder="Search User" value={userSearch} onChange={handleUserSearch} className="border w-full p-2 rounded-lg" />
            <div className="mt-4">
                <div className="flex justify-between items-center border-b p-2 font-bold">
                    <div>Customer Name</div>
                    <div>Email</div>
                    <div>Action</div>
                </div>
            </div>
            <div>
                {
                    users?.map((user: any) => (
                        <Link to={`${user?._id}`} key={`${user?._id}`} className="flex justify-between items-center border-b p-2">
                            <div>{user?.name}</div>
                            <div>{user?.email}</div>
                            <div onClick={handleDelete} className="cursor-pointer">
                                <MdDeleteSweep className="text-red-500 size-7" />
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default CustomersPage;