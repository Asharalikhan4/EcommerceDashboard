export interface DeleteModalPropsTypes {
    isOpen?: boolean;
    onClose?: (e: any) => void;
    onDelete?: () => void;
    title?: string;
    message?: string;
};