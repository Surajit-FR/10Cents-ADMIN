import { Link } from "react-router-dom";

const PageHeader = (): JSX.Element => {
    return (
        <>
            <div className="page-header">
                <div className="page-header-left d-flex align-items-center">
                    <div className="page-header-title">
                        <h5 className="m-b-10">Dashboard</h5>
                    </div>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                        <li className="breadcrumb-item">Dashboard</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default PageHeader;