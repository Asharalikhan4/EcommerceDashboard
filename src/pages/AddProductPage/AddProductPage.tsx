import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import TextArea from "../../components/TextArea/TextArea";
import DropDown from "../../components/DropDown/DropDown";
import { ProductDataStateTypes } from "./AddProductTypes";
import { BASE_URL } from "../../config/constants";

const AddProductPage: FC = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState<boolean>(false);
    const [productData, setProductData] = useState<ProductDataStateTypes>({
        productName: "",
        productId: "",
        productDescription: "",
        productActualPrice: "",
        productSalePrice: "",
    });

    const handleBack = () => {
        navigate("/product");
    };

    const handleProductData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductData({
            ...productData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log("product Data", productData);
        try {
            const response = await axios.post(`${BASE_URL}/product/create-product`, productData);
            if(response?.status === 200) {
                toast.success("Product added successfully");
            };
        } catch (error) {
            console.log(error);
            toast.error("Failed to add product");
        } finally {
            setLoading(false);
            setProductData({
                productName: "",
                productId: "",
                productDescription: "",
                productActualPrice: "",
                productSalePrice: ""
            });
        }
    };

    return (
        <div>
            <div className="flex items-center space-x-2">
                <Button name="<" onClick={handleBack} className="p-1 rounded-full bg-black text-white" />
                <h1 className="text-2xl font-semibold">Create Product</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <Input name="productName" type="text" placeholder="Product Name*" className="border w-1/2 p-2 rounded-lg mt-4" value={productData.productName} onChange={handleProductData} />
                <Input name="productId" type="text" placeholder="Product ID*" className="border w-1/2 p-2 rounded-lg mt-4" value={productData.productId} onChange={handleProductData} />
                <TextArea name="productDescription" placeholder="Product Description*" className="border p-2 rounded-lg mt-4" value={productData.productDescription} onChange={handleProductData} rows={4} cols={100} />
                {/* <DropDown className="border p-2 rounded-lg mt-4" onChange={() => {}} value="" options={["Category 1", "Category 2", "Category 3"]} /> */}
                <Input name="productActualPrice" type="text" placeholder="Product Actual Price*" className="border w-1/2 p-2 rounded-lg mt-4" value={productData.productActualPrice} onChange={handleProductData} />
                <Input name="productSalePrice" type="text" placeholder="Product Sale Price" className="border w-1/2 p-2 rounded-lg mt-4" value={productData.productSalePrice} onChange={handleProductData} />
                <Button name="Add Product" type="submit" className="bg-blue-500 w-1/2 text-white p-2 rounded-lg mt-4" />
            </form>
        </div>
    );
};

export default AddProductPage;