import { FC } from "react";
import { inputPropsTypes } from "./InputTypes";

const Input: FC<inputPropsTypes> = ({ name, type, placeholder, value, onChange, className }) => {
    return (
        <div>
            <input name={name} className={className} type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    );
};

export default Input;