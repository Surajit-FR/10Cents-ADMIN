import { Link } from "react-router-dom";

const LatestLeads = (): JSX.Element => {
    return (
        <>
            <div className="col-xxl-8">
                <div className="card stretch stretch-full">
                    <div className="card-header">
                        <h5 className="card-title">Latest Leads</h5>
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
                        <div className="table-responsive">
                            <table className="table table-hover mb-0">
                                <thead>
                                    <tr className="border-b">
                                        <th scope="row">Users</th>
                                        <th>Proposal</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th className="text-end">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="avatar-image">
                                                    <img src="./assets/images/avatar/2.png" alt=""
                                                        className="img-fluid" />
                                                </div>
                                                <Link to="#">
                                                    <span className="d-block">Archie Cantones</span>
                                                    <span
                                                        className="fs-12 d-block fw-normal text-muted">arcie.tones@gmail.com</span>
                                                </Link>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge bg-gray-200 text-dark">Sent</span>
                                        </td>
                                        <td>11/06/2023 10:53</td>
                                        <td>
                                            <span className="badge bg-soft-success text-success">Completed</span>
                                        </td>
                                        <td className="text-end">
                                            <Link to="#"><i
                                                className="feather-more-vertical"></i></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="avatar-image">
                                                    <img src="./assets/images/avatar/3.png" alt=""
                                                        className="img-fluid" />
                                                </div>
                                                <Link to="#">
                                                    <span className="d-block">Holmes Cherryman</span>
                                                    <span
                                                        className="fs-12 d-block fw-normal text-muted">golms.chan@gmail.com</span>
                                                </Link>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge bg-gray-200 text-dark">New</span>
                                        </td>
                                        <td>11/06/2023 10:53</td>
                                        <td>
                                            <span className="badge bg-soft-primary text-primary">In Progress </span>
                                        </td>
                                        <td className="text-end">
                                            <Link to="#"><i
                                                className="feather-more-vertical"></i></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="avatar-image">
                                                    <img src="./assets/images/avatar/4.png" alt=""
                                                        className="img-fluid" />
                                                </div>
                                                <Link to="#">
                                                    <span className="d-block">Malanie Hanvey</span>
                                                    <span
                                                        className="fs-12 d-block fw-normal text-muted">lanie.nveyn@gmail.com</span>
                                                </Link>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge bg-gray-200 text-dark">Sent</span>
                                        </td>
                                        <td>11/06/2023 10:53</td>
                                        <td>
                                            <span className="badge bg-soft-success text-success">Completed</span>
                                        </td>
                                        <td className="text-end">
                                            <Link to="#"><i
                                                className="feather-more-vertical"></i></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="avatar-image">
                                                    <img src="./assets/images/avatar/5.png" alt=""
                                                        className="img-fluid" />
                                                </div>
                                                <Link to="#">
                                                    <span className="d-block">Kenneth Hune</span>
                                                    <span
                                                        className="fs-12 d-block fw-normal text-muted">nneth.une@gmail.com</span>
                                                </Link>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge bg-gray-200 text-dark">Returning</span>
                                        </td>
                                        <td>11/06/2023 10:53</td>
                                        <td>
                                            <span className="badge bg-soft-warning text-warning">Not
                                                Interested</span>
                                        </td>
                                        <td className="text-end">
                                            <Link to="#"><i
                                                className="feather-more-vertical"></i></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="avatar-image">
                                                    <img src="./assets/images/avatar/6.png" alt=""
                                                        className="img-fluid" />
                                                </div>
                                                <Link to="#">
                                                    <span className="d-block">Valentine Maton</span>
                                                    <span
                                                        className="fs-12 d-block fw-normal text-muted">alenine.aton@gmail.com</span>
                                                </Link>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge bg-gray-200 text-dark">Sent</span>
                                        </td>
                                        <td>11/06/2023 10:53</td>
                                        <td>
                                            <span className="badge bg-soft-success text-success">Completed</span>
                                        </td>
                                        <td className="text-end">
                                            <Link to="#"><i
                                                className="feather-more-vertical"></i></Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card-footer">
                        <ul className="list-unstyled d-flex align-items-center gap-2 mb-0 pagination-common-style">
                            <li>
                                <Link to="#"><i className="bi bi-arrow-left"></i></Link>
                            </li>
                            <li><Link to="#" className="active">1</Link></li>
                            <li><Link to="#">2</Link></li>
                            <li>
                                <Link to="#"><i className="bi bi-dot"></i></Link>
                            </li>
                            <li><Link to="#">8</Link></li>
                            <li><Link to="#">9</Link></li>
                            <li>
                                <Link to="#"><i className="bi bi-arrow-right"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LatestLeads;