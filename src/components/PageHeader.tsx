import { Link } from "react-router-dom";

type PageTitleProps = {
    pageName: string;
    link: string;
}

const PageHeader = ({ pageName, link }: PageTitleProps): JSX.Element => {
    return (
        <>
            <div className="page-header">
                <div className="page-header-left d-flex align-items-center">
                    <div className="page-header-title">
                        <h5 className="m-b-10">{pageName}</h5>
                    </div>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to={link}>Home</Link></li>
                        <li className="breadcrumb-item">{pageName}</li>
                    </ul>
                </div>

                {pageName === "Customers" &&
                    <div className="page-header-right ms-auto">
                        <div className="page-header-right-items">
                            <div className="d-flex d-md-none">
                                <Link to="#" className="page-header-right-close-toggle">
                                    <i className="feather-arrow-left me-2"></i>
                                    <span>Back</span>
                                </Link>
                            </div>
                            <div className="d-flex align-items-center gap-2 page-header-right-items-wrapper">
                                <Link to="#" className="btn btn-icon btn-light-brand" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne">
                                    <i className="feather-bar-chart"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="d-md-none d-flex align-items-center">
                            <Link to="#" className="page-header-right-open-toggle">
                                <i className="feather-align-right fs-20"></i>
                            </Link>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default PageHeader;