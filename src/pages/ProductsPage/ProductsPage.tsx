import { FC, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { DummyOrderData } from "../../data/DummyOrderData";
import { BASE_URL } from "../../config/constants";

const ProductsPage: FC = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState<boolean>(false);
    const [productSearch, setProductSearch] = useState<string>("");
    const [products, setProducts] = useState<any[]>(DummyOrderData);

    const handleProductSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductSearch(e.target.value);
    };

    const handleAddProduct = () => {
        navigate("/add-product");
    };

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${BASE_URL}/product/all-products`);
            if (response.status === 200) {
                toast.success("Products fetched successfully");
            };
        } catch (error) {
            console.log(error);
            toast.error("Failed to fetch products");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
        const filteredProducts = DummyOrderData.filter((product) => {
            return product?.customerName?.toLowerCase().includes(productSearch.toLowerCase());
        });
        setProducts(filteredProducts);
    }, [productSearch]);

    return (
        <div>
            <div className="flex items-center justify-between my-2">
                <h1 className="text-2xl font-semibold">Products</h1>
                <div className="space-x-2">
                    <Button name="Add Product" onClick={handleAddProduct} className="bg-blue-500 text-white p-2 rounded-lg" />
                    <Button name="Filters" onClick={() => { }} className="bg-blue-500 text-white p-2 rounded-lg" />
                    <Button name="Refresh" onClick={fetchProducts} className="bg-blue-500 text-white p-2 rounded-lg" />
                </div>
            </div>
            <Input type="text" placeholder="Search Products" value={productSearch} onChange={handleProductSearch} className="border w-full p-2 rounded-lg" />
            <div className="mt-4">
                <div className="flex justify-between items-center border-b p-2 font-bold">
                    <div>Order Id</div>
                    <div>Order Date</div>
                    <div>Customer Name</div>
                    <div>Total Amount</div>
                    <div>Order Status</div>
                </div>
            </div>
            <div>
                {
                    products?.map((order, index) => (
                        <Link to={`${order?.orderId}`} key={index} className="flex justify-between items-center border-b p-2">
                            <div>{order?.orderId}</div>
                            <div>{order?.orderDate}</div>
                            <div>{order?.customerName}</div>
                            <div>{order?.totalAmount}</div>
                            <div>{order?.orderStatus}</div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductsPage;