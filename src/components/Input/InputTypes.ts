import { kMaxLength } from "buffer";

export interface inputPropsTypes {
    name?: string;
    type: string;
    placeholder: string;
    value: any;
    onChange:(e: any) => void;
    className?: string;
};