import { FC } from "react";
import { inputPropsTypes } from "./InputTypes";

const Input: FC<inputPropsTypes> = ({ type, placeholder, value, onChange, className }) => {
    return (
        <div>
            <input className={className} type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    );
};

export default Input;