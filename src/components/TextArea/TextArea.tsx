import { FC } from "react";
import { TextAreaPropsTypes } from "./TextAreaTypes";

const TextArea: FC<TextAreaPropsTypes> = ({ name, placeholder, className, onChange, value, rows, cols }) => {
    return (
        <textarea name={name} className={className} placeholder={placeholder} onChange={onChange} rows={rows} cols={cols} value={value} />
    );
};

export default TextArea;