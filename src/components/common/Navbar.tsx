import { Link } from "react-router-dom";
import navbarData from "./navbar.json";
import { TNavItems } from "../../../types/common";
import { useEffect, useState } from "react";

const Navbar = (): JSX.Element => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        const bodyClassList = document.body.classList;
        setIsDarkMode(bodyClassList.contains('app-skin-dark'));
    }, []);

    const logoSrc = isDarkMode ? './assets/images/Logo-w.png' : './assets/images/Logo-b.png';

    return (
        <>
            <nav className="nxl-navigation">
                <div className="navbar-wrapper">
                    <div className="m-header">
                        <Link to="/dashboard" className="b-brand">
                            <img src={logoSrc} alt="" className="logo logo-lg" height={50} />
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
                                                <span className="nxl-mtext">{navbar?.label}</span>
                                                {navbar?.submenu?.length > 0 && <span className="nxl-arrow"><i className="feather-chevron-right"></i></span>}
                                            </Link>

                                            {
                                                navbar?.submenu?.length > 0 &&
                                                <ul className="nxl-submenu">
                                                    {navbar?.submenu?.map((item, index) => {
                                                        return (
                                                            <li className="nxl-item" key={index}>
                                                                <Link className="nxl-link" to={item?.link}>{item?.label}</Link>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            }
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