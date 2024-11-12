import { Link } from "react-router-dom";

const PaymentRecord = (): JSX.Element => {
    return (
        <>
            <div className="col-xxl-8">
                <div className="card stretch stretch-full">
                    <div className="card-header">
                        <h5 className="card-title">Payment Record</h5>
                        <div className="card-header-action">
                            <div className="card-header-btn">
                                <div data-bs-toggle="tooltip" title="Delete">
                                    <Link to="#" className="avatar-text avatar-xs bg-danger"
                                        data-bs-toggle="remove"> </Link>
                                </div>
                                <div data-bs-toggle="tooltip" title="Refresh">
                                    <Link to="#" className="avatar-text avatar-xs bg-warning"
                                        data-bs-toggle="refresh"> </Link>
                                </div>
                                <div data-bs-toggle="tooltip" title="Maximize/Minimize">
                                    <Link to="#" className="avatar-text avatar-xs bg-success"
                                        data-bs-toggle="expand"> </Link>
                                </div>
                            </div>
                            <div className="dropdown">
                                <Link to="#" className="avatar-text avatar-sm"
                                    data-bs-toggle="dropdown" data-bs-offset="25, 25">
                                    <div data-bs-toggle="tooltip" title="Options">
                                        <i className="feather-more-vertical"></i>
                                    </div>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <Link to="#" className="dropdown-item"><i
                                        className="feather-at-sign"></i>New</Link>
                                    <Link to="#" className="dropdown-item"><i
                                        className="feather-calendar"></i>Event</Link>
                                    <Link to="#" className="dropdown-item"><i
                                        className="feather-bell"></i>Snoozed</Link>
                                    <Link to="#" className="dropdown-item"><i
                                        className="feather-trash-2"></i>Deleted</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to="#" className="dropdown-item"><i
                                        className="feather-settings"></i>Settings</Link>
                                    <Link to="#" className="dropdown-item"><i
                                        className="feather-life-buoy"></i>Tips & Tricks</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body custom-card-action p-0">
                        <div id="payment-records-chart"></div>
                    </div>
                    <div className="card-footer">
                        <div className="row g-4">
                            <div className="col-lg-3">
                                <div className="p-3 border border-dashed rounded">
                                    <div className="fs-12 text-muted mb-1">Awaiting</div>
                                    <h6 className="fw-bold text-dark">$5,486</h6>
                                    <div className="progress mt-2 ht-3">
                                        <div className="progress-bar bg-primary" role="progressbar"
                                            style={{ width: "81%" }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="p-3 border border-dashed rounded">
                                    <div className="fs-12 text-muted mb-1">Completed</div>
                                    <h6 className="fw-bold text-dark">$9,275</h6>
                                    <div className="progress mt-2 ht-3">
                                        <div className="progress-bar bg-success" role="progressbar"
                                            style={{ width: "82%" }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="p-3 border border-dashed rounded">
                                    <div className="fs-12 text-muted mb-1">Rejected</div>
                                    <h6 className="fw-bold text-dark">$3,868</h6>
                                    <div className="progress mt-2 ht-3">
                                        <div className="progress-bar bg-danger" role="progressbar"
                                            style={{ width: "68%" }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="p-3 border border-dashed rounded">
                                    <div className="fs-12 text-muted mb-1">Revenue</div>
                                    <h6 className="fw-bold text-dark">$50,668</h6>
                                    <div className="progress mt-2 ht-3">
                                        <div className="progress-bar bg-dark" role="progressbar" style={{ width: "75%" }}>
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

export default PaymentRecord;