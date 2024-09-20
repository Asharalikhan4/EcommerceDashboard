import { FC } from "react";
import { Link } from "react-router-dom";

import { DummyOrderData } from "../../data/DummyOrderData";

const OrderPage: FC = () => {
    return (
        <div>
            <div className="mb-4 text-2xl">OrdersPage</div>
            <div>
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
                    DummyOrderData?.map((order, index) => (
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

export default OrderPage;