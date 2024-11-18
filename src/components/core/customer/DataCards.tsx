import { Link } from "react-router-dom";

const DataCards = (): JSX.Element => {
    return (
        <>
            <div id="collapseOne" className="accordion-collapse collapse page-header-collapse">
                <div className="accordion-body pb-2">
                    <div className="row">
                        <div className="col-xxl-3 col-md-6">
                            <div className="card stretch stretch-full">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="avatar-text avatar-xl rounded">
                                                <i className="feather-users"></i>
                                            </div>
                                            <Link to="#" className="fw-bold d-block">
                                                <span className="text-truncate-1-line">Total Customers</span>
                                                <span className="fs-24 fw-bolder d-block">26,595</span>
                                            </Link>
                                        </div>
                                        <div className="badge bg-soft-success text-success">
                                            <i className="feather-arrow-up fs-10 me-1"></i>
                                            <span>36.85%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-md-6">
                            <div className="card stretch stretch-full">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="avatar-text avatar-xl rounded">
                                                <i className="feather-user-check"></i>
                                            </div>
                                            <Link to="#" className="fw-bold d-block">
                                                <span className="text-truncate-1-line">Active Customers</span>
                                                <span className="fs-24 fw-bolder d-block">2,245</span>
                                            </Link>
                                        </div>
                                        <div className="badge bg-soft-danger text-danger">
                                            <i className="feather-arrow-down fs-10 me-1"></i>
                                            <span>24.56%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-md-6">
                            <div className="card stretch stretch-full">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="avatar-text avatar-xl rounded">
                                                <i className="feather-user-plus"></i>
                                            </div>
                                            <Link to="#" className="fw-bold d-block">
                                                <span className="text-truncate-1-line">New Customers</span>
                                                <span className="fs-24 fw-bolder d-block">1,254</span>
                                            </Link>
                                        </div>
                                        <div className="badge bg-soft-success text-success">
                                            <i className="feather-arrow-up fs-10 me-1"></i>
                                            <span>33.29%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-md-6">
                            <div className="card stretch stretch-full">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="avatar-text avatar-xl rounded">
                                                <i className="feather-user-minus"></i>
                                            </div>
                                            <Link to="#" className="fw-bold d-block">
                                                <span className="text-truncate-1-line">Inactive Customers</span>
                                                <span className="fs-24 fw-bolder d-block">4,586</span>
                                            </Link>
                                        </div>
                                        <div className="badge bg-soft-danger text-danger">
                                            <i className="feather-arrow-down fs-10 me-1"></i>
                                            <span>42.47%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DataCards;