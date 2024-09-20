import { FC } from "react";

import { DummyCustomerData } from "../../data/DummyCustomerData";
import { Link } from "react-router-dom";

const CustomersPage: FC = () => {
    return (
        <div>
            <div className="mb-4 text-2xl">CustomersPage</div>
            <div>
                <div className="flex justify-between items-center border-b p-2 font-bold">
                    <div>Customer Name</div>
                    <div>Email</div>
                    <div>Phone</div>
                    <div>No of Orders</div>
                    <div>First Order Date</div>
                    </div>
            </div>
            <div>
                {
                    DummyCustomerData.map((customer, index) => (
                        <Link to={`${customer?.customerId}`} key={index} className="flex justify-between items-center border-b p-2">
                            <div>{customer?.customerName}</div>
                            <div>{customer?.email}</div>
                            <div>{customer?.phone}</div>
                            <div>{customer?.noOfOrders}</div>
                            <div>{customer?.firstOrderDate}</div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default CustomersPage;