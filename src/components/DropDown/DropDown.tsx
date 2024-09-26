import { FC } from "react";
import { DropDownPropsTypes } from "./DropDownTypes";

const DropDown: FC<DropDownPropsTypes> = ({ className, onChange, value, options }) => {
    return (
        <div>
            <select className={className}>
                {
                    options?.map((option) => (
                        <option value={option}>{option}</option>
                    ))
                }
            </select>
        </div>
    );
};

export default DropDown;