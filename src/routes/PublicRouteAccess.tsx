import { Navigate, useLocation } from "react-router-dom";

const PublicRouteAccess = ({ children }: { children: React.ReactNode }): JSX.Element => {
    // const accessToken: string | null = window.localStorage.getItem("accessToken");
    // const refreshToken: string | null = window.localStorage.getItem("refreshToken");
    const _id: string | null = window.localStorage.getItem("_id");
    const location = useLocation();

    if (_id) {
        return <Navigate to={location.state?.from?.pathname || "/dashboard"} state={{ from: location }} replace />;
    }

    return (
        <>
            {children}
        </>
    );
};

export default PublicRouteAccess;