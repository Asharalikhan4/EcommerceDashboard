import { kMaxLength } from "buffer";

export interface inputPropsTypes {
    type: string;
    placeholder: string;
    value: any;
    onChange:(e: any) => void;
    className?: string;
};