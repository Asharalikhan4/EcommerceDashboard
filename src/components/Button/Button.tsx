import { FC } from "react";
import { ButtonPropsTypes } from "./ButtonTypes";

const Button: FC<ButtonPropsTypes> = ({ onClick, className, name, type }) => {
    return (
        <button type={type} onClick={onClick} className={className}>{name}</button>
    );
};

export default Button;