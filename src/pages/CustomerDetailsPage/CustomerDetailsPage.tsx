import { FC, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

import { BASE_URL } from "../../config/constants";

const CustomersDetailsPage: FC = () => {
    
    const { _id } = useParams();
    const [ user, setUser ] = useState();


    const fetchCustomer = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/user/${_id}`);
            if(response.status === 200 && response?.data?.user) {
                setUser(response?.data?.user);
            };
        } catch (error) {
            console.error(error);
            toast.error("Failed to fetch customer details");
        }
    };

    useEffect(() => {
        fetchCustomer();
    }, []);

    console.log(user);

    return (
        <div>
            <h1>Customers Details Page</h1>
        </div>
    );
};

export default CustomersDetailsPage;