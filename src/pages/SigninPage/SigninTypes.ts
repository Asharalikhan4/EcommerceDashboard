export interface SigninPageUserStateTypes {
    email: string;
    password: string;
};

export interface SingninApiResponse {
    message: string;
    user: {
        id: string;
        name: string;
        email: string;
    }
};