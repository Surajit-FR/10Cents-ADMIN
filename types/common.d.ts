import { User, UserData } from "./authTypes";

export type TNavItems = {
    label: string;
    icon: string;
    link: string;
    submenu: Array<{
        label: string;
        link: string;
    }>;
};

export type DataState = {
    authData?: Partial<UserData>,
    userData?: Partial<User>,
    error: string | null,
    type: string,
};

export type SagaGenerator<Y, R = void> = Generator<CallEffect<Y> | PutEffect | SelectEffect | TakeEffect, R, Y>;

export type CommonResponse = {
    statusCode: number,
    message: string,
    success: boolean,
};

export type ApiResponse<T> = CommonResponse & {
    data?: T;
};