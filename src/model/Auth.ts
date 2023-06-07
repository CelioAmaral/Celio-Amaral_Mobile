export interface Auth {
    user: string;
    name?: string;
    password: string;
}

export interface UserToken {
    profile: string;
    user: string;
}