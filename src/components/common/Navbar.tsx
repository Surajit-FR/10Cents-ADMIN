import { Link } from "react-router-dom";
import navbarData from "./navbar.json";
import { TNavItems } from "../../../types/common";

const Navbar = (): JSX.Element => {
    return (
        <>
            <nav className="nxl-navigation">
                <div className="navbar-wrapper">
                    <div className="m-header">
                        <Link to="index.html" className="b-brand">
                            <img src="./assets/images/logo.png" alt="" className="logo logo-lg" />
                            <img src="./assets/images/favicon.png" alt="" className="logo logo-sm" />
                        </Link>
                    </div>
                    <div className="navbar-content">
                        <ul className="nxl-navbar">
                            <li className="nxl-item nxl-caption">
                                <label>Navigation</label>
                            </li>
                            {
                                navbarData?.map((navbar: TNavItems, index) => {
                                    return (
                                        <li className="nxl-item nxl-hasmenu" key={index}>
                                            <Link to={navbar?.link} className="nxl-link">
                                                <span className="nxl-micon"><i className={navbar?.icon}></i></span>
                                                <span className="nxl-mtext">{navbar?.label}</span><span className="nxl-arrow"><i
                                                    className="feather-chevron-right"></i></span>
                                            </Link>
                                            <ul className="nxl-submenu">
                                                {navbar?.submenu?.map((item, index) => {
                                                    return (
                                                        <li className="nxl-item" key={index}>
                                                            <Link className="nxl-link" to={item?.link}>{item?.label}</Link>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;