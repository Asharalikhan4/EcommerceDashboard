import { Method } from "axios";

export interface ApiResponse<T> {
    data: T | null;
    error: string | null;
    loading: boolean;
};

export interface UseApiResult<T> extends ApiResponse<T> {
    fetchData: (url: string, method: Method, data?: any) => Promise<void>;
};