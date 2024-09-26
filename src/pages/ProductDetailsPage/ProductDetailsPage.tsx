import { FC, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { BASE_URL } from "../../config/constants";
import toast from "react-hot-toast";

const ProductDetailsPage: FC = () => {

    const [productDetails, setProductDetails] = useState();

    const { productId } = useParams();

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/product/${productId}`);
            if(response.status === 200 && response?.data?.product) {
                toast.success("Product details fetched successfully");
                setProductDetails(response.data.product);
            };
        } catch (error) {
            console.error("error", error);
            toast.error("Failed to fetch product details");
        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    console.log("productDetails", productDetails);

    return (
        <div>
            <h1>Product Details Page</h1>
        </div>
    );
};

export default ProductDetailsPage;