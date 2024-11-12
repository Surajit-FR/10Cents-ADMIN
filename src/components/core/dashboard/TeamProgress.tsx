import { Link } from "react-router-dom";

const TeamProgress = (): JSX.Element => {
    return (
        <>
            <div className="col-xxl-4">
                <div className="card stretch stretch-full">
                    <div className="card-header">
                        <h5 className="card-title">Team Progress</h5>
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
                        <div className="hstack justify-content-between border border-dashed rounded-3 p-3 mb-3">
                            <div className="hstack gap-3">
                                <div className="avatar-image">
                                    <img src="./assets/images/avatar/1.png" alt="" className="img-fluid" />
                                </div>
                                <div>
                                    <Link to="#">Alexandra Della</Link>
                                    <div className="fs-11 text-muted">Frontend Developer</div>
                                </div>
                            </div>
                            <div className="team-progress-1"></div>
                        </div>
                        <div className="hstack justify-content-between border border-dashed rounded-3 p-3 mb-3">
                            <div className="hstack gap-3">
                                <div className="avatar-image">
                                    <img src="./assets/images/avatar/2.png" alt="" className="img-fluid" />
                                </div>
                                <div>
                                    <Link to="#">Archie Cantones</Link>
                                    <div className="fs-11 text-muted">UI/UX Designer</div>
                                </div>
                            </div>
                            <div className="team-progress-2"></div>
                        </div>
                        <div className="hstack justify-content-between border border-dashed rounded-3 p-3 mb-3">
                            <div className="hstack gap-3">
                                <div className="avatar-image">
                                    <img src="./assets/images/avatar/3.png" alt="" className="img-fluid" />
                                </div>
                                <div>
                                    <Link to="#">Malanie Hanvey</Link>
                                    <div className="fs-11 text-muted">Backend Developer</div>
                                </div>
                            </div>
                            <div className="team-progress-3"></div>
                        </div>
                        <div className="hstack justify-content-between border border-dashed rounded-3 p-3 mb-2">
                            <div className="hstack gap-3">
                                <div className="avatar-image">
                                    <img src="./assets/images/avatar/4.png" alt="" className="img-fluid" />
                                </div>
                                <div>
                                    <Link to="#">Kenneth Hune</Link>
                                    <div className="fs-11 text-muted">Digital Marketer</div>
                                </div>
                            </div>
                            <div className="team-progress-4"></div>
                        </div>
                    </div>
                    <Link to="#" className="card-footer fs-11 fw-bold text-uppercase text-center">Update 30 Min Ago</Link>
                </div>
            </div>
        </>
    );
};

export default TeamProgress;