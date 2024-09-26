export interface ButtonPropsTypes {
    type?: "submit" | "reset" | "button" | undefined;
    name: string;
    onClick?: () => void;
    className: string;
};