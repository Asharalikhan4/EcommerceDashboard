import { FC, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { MdDeleteSweep } from "react-icons/md";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { DummyOrderData } from "../../data/DummyOrderData";
import { BASE_URL } from "../../config/constants";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

const ProductsPage: FC = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState<boolean>(false);
    const [deleteModal, setDeleteModal] = useState<boolean>(false);
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
                setProducts(response?.data?.products);
            };
        } catch (error) {
            console.log(error);
            toast.error("Failed to fetch products");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = (e: any) => {
        e.stopPropagation();
        e.preventDefault();
        setDeleteModal(!deleteModal);
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
            <DeleteModal onClose={handleDelete} isOpen={deleteModal} />
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
                    <div>Product Id</div>
                    <div>Product Name</div>
                    <div>Product Actual Price</div>
                    <div>Product Sale Price</div>
                    <div>Action</div>
                </div>
            </div>
            <div>
                {
                    products?.length > 0 ? (
                        <>
                            {
                                products?.map((product, index) => (
                                    <Link to={`${product?.productId}`} key={index} className="flex justify-between items-center border-b p-2">
                                        <div>{product?.productId}</div>
                                        <div>{product?.productName}</div>
                                        <div>{product?.productActualPrice}</div>
                                        <div>{product?.productSalePrice}</div>
                                        <div onClick={handleDelete} className="cursor-pointer">
                                            <MdDeleteSweep className="text-red-500 size-7" />
                                        </div>
                                    </Link>
                                ))
                            }
                        </>
                    ) : (
                        <div>No products found</div>
                    )
                }
            </div>
        </div>
    );
};

export default ProductsPage;