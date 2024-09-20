import { useState, useCallback } from "react";
import axios, { AxiosError, AxiosRequestConfig, Method } from "axios";

import { ApiResponse, UseApiResult } from "./useApiTypes";

const useApi = <T>(): UseApiResult<T> => {
  const [state, setState] = useState<ApiResponse<T>>({
    data: null,
    error: null,
    loading: false,
  });

  const fetchData = useCallback(async (url: string, method: Method, data?: any) => {
    setState(prevState => ({ ...prevState, loading: true }));

    try {
      const config: AxiosRequestConfig = {
        url,
        method,
        data,
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers here, e.g., authorization
        },
      };

      const response = await axios(config);
      setState({ data: response.data, error: null, loading: false });
    } catch (error) {
      const axiosError = error as AxiosError;
      setState({
        data: null,
        // error: axiosError.response?.data?.message || 'An error occurred',
        error: 'An error occurred',
        loading: false,
      });
    }
  }, []);

  return { ...state, fetchData };
};

export default useApi;