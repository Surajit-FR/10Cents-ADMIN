import { Link } from "react-router-dom";

const ProjectStatus = (): JSX.Element => {
    return (
        <>
            <div className="col-xxl-4">
                <div className="card stretch stretch-full">
                    <div className="card-header">
                        <h5 className="card-title">Project Status</h5>
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
                        <div className="mb-3">
                            <div className="mb-4 pb-1 d-flex">
                                <div className="d-flex w-50 align-items-center me-3">
                                    <img src="./assets/images/brand/app-store.png" alt="laravel-logo"
                                        className="me-3" width="35" />
                                    <div>
                                        <Link to="#" className="text-truncate-1-line">Apps
                                            Development</Link>
                                        <div className="fs-11 text-muted">Applications</div>
                                    </div>
                                </div>
                                <div className="d-flex flex-grow-1 align-items-center">
                                    <div className="progress w-100 me-3 ht-5">
                                        <div className="progress-bar bg-danger" role="progressbar"
                                            style={{ width: "54%" }} aria-valuenow={54} aria-valuemin={0}
                                            aria-valuemax={100}></div>
                                    </div>
                                    <span className="text-muted">54%</span>
                                </div>
                            </div>
                            <hr className="border-dashed my-3" />
                            <div className="mb-4 pb-1 d-flex">
                                <div className="d-flex w-50 align-items-center me-3">
                                    <img src="./assets/images/brand/figma.png" alt="figma-logo" className="me-3"
                                        width="35" />
                                    <div>
                                        <Link to="#" className="text-truncate-1-line">Dashboard
                                            Design</Link>
                                        <div className="fs-11 text-muted">App UI Kit</div>
                                    </div>
                                </div>
                                <div className="d-flex flex-grow-1 align-items-center">
                                    <div className="progress w-100 me-3 ht-5">
                                        <div className="progress-bar bg-primary" role="progressbar"
                                            style={{ width: "86%" }} aria-valuenow={86} aria-valuemin={0}
                                            aria-valuemax={100}></div>
                                    </div>
                                    <span className="text-muted">86%</span>
                                </div>
                            </div>
                            <hr className="border-dashed my-3" />
                            <div className="mb-4 pb-1 d-flex">
                                <div className="d-flex w-50 align-items-center me-3">
                                    <img src="./assets/images/brand/facebook.png" alt="vue-logo" className="me-3"
                                        width="35" />
                                    <div>
                                        <Link to="#" className="text-truncate-1-line">Facebook
                                            Marketing</Link>
                                        <div className="fs-11 text-muted">Marketing</div>
                                    </div>
                                </div>
                                <div className="d-flex flex-grow-1 align-items-center">
                                    <div className="progress w-100 me-3 ht-5">
                                        <div className="progress-bar bg-success" role="progressbar"
                                            style={{ width: "90%" }} aria-valuenow={90} aria-valuemin={0}
                                            aria-valuemax={100}></div>
                                    </div>
                                    <span className="text-muted">90%</span>
                                </div>
                            </div>
                            <hr className="border-dashed my-3" />
                            <div className="mb-4 pb-1 d-flex">
                                <div className="d-flex w-50 align-items-center me-3">
                                    <img src="./assets/images/brand/github.png" alt="react-logo" className="me-3"
                                        width="35" />
                                    <div>
                                        <Link to="#" className="text-truncate-1-line">React
                                            Dashboard Github</Link>
                                        <div className="fs-11 text-muted">Dashboard</div>
                                    </div>
                                </div>
                                <div className="d-flex flex-grow-1 align-items-center">
                                    <div className="progress w-100 me-3 ht-5">
                                        <div className="progress-bar bg-info" role="progressbar" style={{ width: "37%" }}
                                            aria-valuenow={37} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>
                                    <span className="text-muted">37%</span>
                                </div>
                            </div>
                            <hr className="border-dashed my-3" />
                            <div className="d-flex">
                                <div className="d-flex w-50 align-items-center me-3">
                                    <img src="./assets/images/brand/paypal.png" alt="sketch-logo"
                                        className="me-3" width="35" />
                                    <div>
                                        <Link to="#" className="text-truncate-1-line">Paypal
                                            Payment Gateway</Link>
                                        <div className="fs-11 text-muted">Payment</div>
                                    </div>
                                </div>
                                <div className="d-flex flex-grow-1 align-items-center">
                                    <div className="progress w-100 me-3 ht-5">
                                        <div className="progress-bar bg-warning" role="progressbar"
                                            style={{ width: "29%" }} aria-valuenow={29} aria-valuemin={0}
                                            aria-valuemax={100}></div>
                                    </div>
                                    <span className="text-muted">29%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="#" className="card-footer fs-11 fw-bold text-uppercase text-center">Upcomming Projects</Link>
                </div>
            </div>
        </>
    );
};

export default ProjectStatus;