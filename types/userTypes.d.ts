import { User } from "./authTypes";

export type Pagination = {
    total: number;
    page: number;
    limit: number;
};

export type GetAllUsersResponse = {
    userData: Array<User>;
    pagination: Pagination;
};