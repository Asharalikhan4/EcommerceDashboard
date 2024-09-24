import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

import { setUser } from "../../redux/UserSlice/UserSlice";
import { SigninPageUserStateTypes } from "./SigninTypes";
import { BASE_URL } from "../../config/constants";

const SigninPage: FC = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loading, setLoading] = useState<boolean>(false);
    const [userDetails, setUserDetails] = useState<SigninPageUserStateTypes>({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState<SigninPageUserStateTypes>({
        email: "",
        password: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        let errorMessage = "";

        if (name === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                errorMessage = "Please enter a valid email address.";
            }
        } else if (name === "password") {
            if (value.length < 3) {
                errorMessage = "Password must be at least 6 characters long.";
            }
        }

        setErrors({ ...errors, [name]: errorMessage });
    };

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            setLoading(true);
            const response = await axios.post(`${BASE_URL}/user/signin`, userDetails);
            if(response?.status === 200){
                console.log(response);
                dispatch(setUser(response?.data?.user));
                localStorage.setItem("token", response?.data?.token);
                toast.success(response?.data?.message || "Logged in successfully.");
                return navigate("/");
            };
            toast.error(response?.data?.message || "Please try again.");
        } catch (error) {
            toast.error("Please try again.");
        } finally {
            setLoading(false);
            setUserDetails({ email: "", password: "" });
            setErrors({ email: "", password: "" });
        }
    };

    const isFormValid = !errors.email && !errors.password;

    return (
        <div className="flex justify-center px-4 md:py-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
                        Sign in for Ecommerce Dash.
                    </h2>
                </div>
                <form className="space-y-6" onSubmit={submitHandler}>
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
                                onBlur={handleInputBlur}
                                className="block w-full appearance-none rounded-md border border-[#d1d5db] px-3 py-2 shadow-sm focus:border-[#6366f1] focus:outline-none focus:ring-[#6366f1] sm:text-sm"
                            />
                        </div>
                        {errors.email && (
                            <p className="mt-1 text-xs md:text-sm text-red-500">{errors.email}</p>
                        )}
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
                                onBlur={handleInputBlur}
                                className="block w-full appearance-none rounded-md border border-[#d1d5db] px-3 py-2 shadow-sm focus:border-[#6366f1] focus:outline-none focus:ring-[#6366f1] sm:text-sm"
                            />
                        </div>
                        {errors.password && (
                            <p className="mt-1 text-xs md:text-sm text-red-500">{errors.password}</p>
                        )}
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={!isFormValid}
                            className={`flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-[#f8f8f8] shadow-sm hover:bg-[#4f46e5] focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 dark:bg-[#4f46e5] dark:hover:bg-[#3730a3] dark:focus:ring-[#4f46e5] ${isFormValid
                                    ? "bg-[#6366f1] dark:bg-[#4f46e5]"
                                    : "bg-[#9ca3af] dark:bg-[#6b7280] cursor-not-allowed"
                                }`}
                        >
                            Sign in
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
                    <div className="text-sm">
                        <a
                            href="#"
                            className="font-medium text-[#6366f1] hover:text-[#4f46e5] dark:text-[#4f46e5] dark:hover:text-[#3730a3]"
                        >
                            Forgot your password?
                        </a>
                    </div>
                </div>
                <div className="text-center text-sm text-[#6b7280] dark:text-[#9ca3af]">
                    Didn't have an account?{" "}
                    <Link to={"/auth/signup"} className="font-medium text-[#6366f1] hover:text-[#4f46e5] dark:text-[#4f46e5] dark:hover:text-[#3730a3] underline">
                        Signup
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SigninPage;