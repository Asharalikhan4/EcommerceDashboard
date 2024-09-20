import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

import { setUser } from "../../redux/UserSlice/UserSlice";
import { SignupPageUserStateTypes } from "./SignupTypes";
import { BASE_URL } from "../../config/constants";

const SignupPage: FC = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loading, setLoading] = useState<boolean>(false);
    const [userDetails, setUserDetails] = useState<SignupPageUserStateTypes>({
        name: "",
        email: "",
        password: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            setLoading(true);
            const response = await axios.post(`${BASE_URL}/user/signup`, userDetails);
            if(response?.status === 200){
                toast.success(response?.data?.message || "Logged in successfully.");
                return navigate("/");
            };
            toast.error(response?.data?.message || "Please try again.");
        } catch (error) {
        } finally {
            setUserDetails({ name: "", email: "", password: "" });
        }
    };

    return (
        <div className="flex justify-center px-4 md:py-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
                        Sign up for Ecommerce Dash.
                    </h2>
                </div>
                <form className="space-y-6" onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="name" className="block text-sm md:text-base font-medium">
                            Name
                        </label>
                        <div className="mt-1">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                value={userDetails.name}
                                onChange={handleInputChange}
                                className="block w-full appearance-none rounded-md border border-[#d1d5db] px-3 py-2 shadow-sm focus:border-[#6366f1] focus:outline-none focus:ring-[#6366f1] sm:text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm md:text-base font-medium">
                            Email address
                        </label>
                        <div className="mt-1">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={userDetails.email}
                                onChange={handleInputChange}
                                className="block w-full appearance-none rounded-md border border-[#d1d5db] px-3 py-2 shadow-sm focus:border-[#6366f1] focus:outline-none focus:ring-[#6366f1] sm:text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm md:text-base font-medium">
                            Password
                        </label>
                        <div className="mt-1">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={userDetails.password}
                                onChange={handleInputChange}
                                className="block w-full appearance-none rounded-md border border-[#d1d5db] px-3 py-2 shadow-sm focus:border-[#6366f1] focus:outline-none focus:ring-[#6366f1] sm:text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md border border-transparent bg-[#6366f1] py-2 px-4 text-sm font-medium text-[#f8f8f8] shadow-sm hover:bg-[#4f46e5] focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 dark:bg-[#4f46e5] dark:hover:bg-[#3730a3] dark:focus:ring-[#4f46e5]"
                        >
                            Sign up
                        </button>
                    </div>
                </form>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 rounded border-[#d1d5db] text-[#6366f1] focus:ring-[#6366f1] dark:border-[#4b5563] dark:bg-[#374151] dark:checked:bg-[#4f46e5] dark:checked:border-[#4f46e5] dark:focus:ring-[#4f46e5]"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-[#333] dark:text-[#9ca3af]">
                            Remember me
                        </label>
                    </div>
                    <div className="text-center text-sm text-[#6b7280] dark:text-[#9ca3af]">
                        Already have an account?{" "}
                        <Link to={"/auth/signin"} className="font-medium text-[#6366f1] hover:text-[#4f46e5] dark:text-[#4f46e5] dark:hover:text-[#3730a3] underline">
                            Signin
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;