import { Link } from "react-router-dom";
import UserDropdown from "./UserDropdown";

const Header = (): JSX.Element => {
    return (
        <>
            <header className="nxl-header">
                <div className="header-wrapper">
                    <div className="header-left d-flex align-items-center gap-4">
                        <Link to="#" className="nxl-head-mobile-toggler" id="mobile-collapse">
                            <div className="hamburger hamburger--arrowturn">
                                <div className="hamburger-box">
                                    <div className="hamburger-inner"></div>
                                </div>
                            </div>
                        </Link>
                        <div className="nxl-navigation-toggle">
                            <Link to="#" id="menu-mini-button">
                                <i className="feather-align-left"></i>
                            </Link>
                            <Link to="#" id="menu-expend-button" style={{ display: "none" }}>
                                <i className="feather-arrow-right"></i>
                            </Link>
                        </div>
                        <div className="nxl-lavel-mega-menu-toggle d-flex d-lg-none">
                            <Link to="#" id="nxl-lavel-mega-menu-open">
                                <i className="feather-align-left"></i>
                            </Link>
                        </div>
                        <div className="nxl-drp-link nxl-lavel-mega-menu">
                            <div className="nxl-lavel-mega-menu-toggle d-flex d-lg-none">
                                <Link to="#" id="nxl-lavel-mega-menu-hide">
                                    <i className="feather-arrow-left me-2"></i>
                                    <span>Back</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="header-right ms-auto">
                        <div className="d-flex align-items-center">
                            <div className="nxl-h-item d-none d-sm-flex">
                                <div className="full-screen-switcher">
                                    <Link to="#" className="nxl-head-link me-0"
                                    // onClick="$('body').fullScreenHelper('toggle');"
                                    >
                                        <i className="feather-maximize maximize"></i>
                                        <i className="feather-minimize minimize"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="nxl-h-item dark-light-theme me-4">
                                <Link to="#" className="nxl-head-link me-0 dark-button">
                                    <i className="feather-moon"></i>
                                </Link>
                                <Link to="#" className="nxl-head-link me-0 light-button" style={{ display: "none" }}>
                                    <i className="feather-sun"></i>
                                </Link>
                            </div>

                            <div className="dropdown nxl-h-item">
                                <Link to="#" data-bs-toggle="dropdown" role="button"
                                    data-bs-auto-close="outside">
                                    <img src="./assets/images/avatar/1.png" alt="user-image"
                                        className="img-fluid user-avtar me-0" />
                                </Link>

                                <UserDropdown />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;