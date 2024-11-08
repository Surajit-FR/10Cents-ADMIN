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
            </div>
        </>
    );
};

export default PageHeader;