export interface SignupPageUserStateTypes {
    name: string;
    email: string;
    password: string;
};

export interface SingnupApiResponse {
    message: string;
    user: {
        id: string;
        name: string;
        email: string;
    }
};