export interface TextAreaPropsTypes {
    name: string;
    placeholder: string;
    className: string;
    onChange:(e: any) => void
    value: string;
    rows: number;
    cols: number;
};