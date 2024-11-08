import { Link } from "react-router-dom";

const UserDropdown = (): JSX.Element => {
    return (
        <>
            <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-user-dropdown">
                <div className="dropdown-header">
                    <div className="d-flex align-items-center">
                        <img src="./assets/images/avatar/1.png" alt="user-image"
                            className="img-fluid user-avtar" />
                        <div>
                            <h6 className="text-dark mb-0">Alexandra Della</h6>
                            <span className="fs-12 fw-medium text-muted">alex.della@outlook.com</span>
                        </div>
                    </div>
                </div>
                <div className="dropdown">
                    <Link to="#" className="dropdown-item">
                        <span className="hstack">
                            <i className="wd-10 ht-10 border border-2 border-gray-1 bg-success rounded-circle me-2"></i>
                            <span>Active</span>
                        </span>
                    </Link>
                </div>
                <Link to="#" className="dropdown-item">
                    <i className="feather-user"></i>
                    <span>Profile Details</span>
                </Link>
                <div className="dropdown-divider"></div>
                <Link to="./auth-login-minimal.html" className="dropdown-item">
                    <i className="feather-log-out"></i>
                    <span>Logout</span>
                </Link>
            </div>
        </>
    );
};

export default UserDropdown;