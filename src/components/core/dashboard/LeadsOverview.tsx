import { Link } from "react-router-dom";

const LeadsOverview = (): JSX.Element => {
    return (
        <>
            <div className="col-xxl-4">
                <div className="card stretch stretch-full">
                    <div className="card-header">
                        <h5 className="card-title">Leads Overview</h5>
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
                    <div className="card-body custom-card-action">
                        <div id="leads-overview-donut"></div>
                        <div className="row g-2">
                            <div className="col-4">
                                <Link to="#"
                                    className="p-2 hstack gap-2 rounded border border-dashed border-gray-5">
                                    <span className="wd-7 ht-7 rounded-circle d-inline-block"
                                        style={{ backgroundColor: "#3454d1" }}></span>
                                    <span>New<span className="fs-10 text-muted ms-1">(20K)</span></span>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="#"
                                    className="p-2 hstack gap-2 rounded border border-dashed border-gray-5">
                                    <span className="wd-7 ht-7 rounded-circle d-inline-block"
                                        style={{ backgroundColor: "#0d519e" }}></span>
                                    <span>Contacted<span className="fs-10 text-muted ms-1">(15K)</span></span>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="#"
                                    className="p-2 hstack gap-2 rounded border border-dashed border-gray-5">
                                    <span className="wd-7 ht-7 rounded-circle d-inline-block"
                                        style={{ backgroundColor: "#1976d2" }}></span>
                                    <span>Qualified<span className="fs-10 text-muted ms-1">(10K)</span></span>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="#"
                                    className="p-2 hstack gap-2 rounded border border-dashed border-gray-5">
                                    <span className="wd-7 ht-7 rounded-circle d-inline-block"
                                        style={{ backgroundColor: "#1e88e5" }}></span>
                                    <span>Working<span className="fs-10 text-muted ms-1">(18K)</span></span>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="#"
                                    className="p-2 hstack gap-2 rounded border border-dashed border-gray-5">
                                    <span className="wd-7 ht-7 rounded-circle d-inline-block"
                                        style={{ backgroundColor: "#2196f3" }}></span>
                                    <span>Customer<span className="fs-10 text-muted ms-1">(10K)</span></span>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="#"
                                    className="p-2 hstack gap-2 rounded border border-dashed border-gray-5">
                                    <span className="wd-7 ht-7 rounded-circle d-inline-block"
                                        style={{ backgroundColor: "#42a5f5" }}></span>
                                    <span>Proposal<span className="fs-10 text-muted ms-1">(15K)</span></span>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="#"
                                    className="p-2 hstack gap-2 rounded border border-dashed border-gray-5">
                                    <span className="wd-7 ht-7 rounded-circle d-inline-block"
                                        style={{ backgroundColor: "#64b5f6" }}></span>
                                    <span>Leads<span className="fs-10 text-muted ms-1">(16K)</span></span>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="#"
                                    className="p-2 hstack gap-2 rounded border border-dashed border-gray-5">
                                    <span className="wd-7 ht-7 rounded-circle d-inline-block"
                                        style={{ backgroundColor: "#90caf9" }}></span>
                                    <span>Progress<span className="fs-10 text-muted ms-1">(14K)</span></span>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link to="#"
                                    className="p-2 hstack gap-2 rounded border border-dashed border-gray-5">
                                    <span className="wd-7 ht-7 rounded-circle d-inline-block"
                                        style={{ backgroundColor: "#aad6fa" }}></span>
                                    <span>Others<span className="fs-10 text-muted ms-1">(10K)</span></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeadsOverview;