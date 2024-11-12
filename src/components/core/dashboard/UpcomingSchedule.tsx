import { Link } from "react-router-dom";

const UpcomingSchedule = (): JSX.Element => {
    return (
        <>
            <div className="col-xxl-4">
                <div className="card stretch stretch-full">
                    <div className="card-header">
                        <h5 className="card-title">Upcoming Schedule</h5>
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
                    <div className="card-body">

                        <div className="p-3 border border-dashed rounded-3 mb-3">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center gap-3">
                                    <div
                                        className="wd-50 ht-50 bg-soft-primary text-primary lh-1 d-flex align-items-center justify-content-center flex-column rounded-2 schedule-date">
                                        <span className="fs-18 fw-bold mb-1 d-block">20</span>
                                        <span className="fs-10 fw-semibold text-uppercase d-block">Dec</span>
                                    </div>
                                    <div className="text-dark">
                                        <Link to="#"
                                            className="fw-bold mb-2 text-truncate-1-line">React Dashboard Design</Link>
                                        <span className="fs-11 fw-normal text-muted text-truncate-1-line">11:30am -
                                            12:30pm</span>
                                    </div>
                                </div>
                                <div className="img-group lh-0 ms-3 justify-content-start d-none d-sm-flex">
                                    <Link to="#" className="avatar-image avatar-md"
                                        data-bs-toggle="tooltip" data-bs-trigger="hover" title="Janette Dalton">
                                        <img src="./assets/images/avatar/2.png" className="img-fluid"
                                            alt="" />
                                    </Link>
                                    <Link to="#" className="avatar-image avatar-md"
                                        data-bs-toggle="tooltip" data-bs-trigger="hover" title="Michael Ksen">
                                        <img src="./assets/images/avatar/3.png" className="img-fluid"
                                            alt="" />
                                    </Link>
                                    <Link to="#" className="avatar-image avatar-md"
                                        data-bs-toggle="tooltip" data-bs-trigger="hover"
                                        title="Socrates Itumay">
                                        <img src="./assets/images/avatar/4.png" className="img-fluid"
                                            alt="" />
                                    </Link>
                                    <Link to="#" className="avatar-image avatar-md"
                                        data-bs-toggle="tooltip" data-bs-trigger="hover"
                                        title="Marianne Audrey">
                                        <img src="./assets/images/avatar/6.png" className="img-fluid"
                                            alt="" />
                                    </Link>
                                    <Link to="#" className="avatar-text avatar-md"
                                        data-bs-toggle="tooltip" data-bs-trigger="hover" title="Explorer More">
                                        <i className="feather-more-horizontal"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="p-3 border border-dashed rounded-3 mb-3">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center gap-3">
                                    <div
                                        className="wd-50 ht-50 bg-soft-warning text-warning lh-1 d-flex align-items-center justify-content-center flex-column rounded-2 schedule-date">
                                        <span className="fs-18 fw-bold mb-1 d-block">30</span>
                                        <span className="fs-10 fw-semibold text-uppercase d-block">Dec</span>
                                    </div>
                                    <div className="text-dark">
                                        <Link to="#"
                                            className="fw-bold mb-2 text-truncate-1-line">Admin Design Concept</Link>
                                        <span className="fs-11 fw-normal text-muted text-truncate-1-line">10:00am -
                                            12:00pm</span>
                                    </div>
                                </div>
                                <div className="img-group lh-0 ms-3 justify-content-start d-none d-sm-flex">
                                    <Link to="#" className="avatar-image avatar-md"
                                        data-bs-toggle="tooltip" data-bs-trigger="hover" title="Janette Dalton">
                                        <img src="./assets/images/avatar/2.png" className="img-fluid"
                                            alt="" />
                                    </Link>
                                    <Link to="#" className="avatar-image avatar-md"
                                        data-bs-toggle="tooltip" data-bs-trigger="hover" title="Michael Ksen">
                                        <img src="./assets/images/avatar/3.png" className="img-fluid"
                                            alt="" />
                                    </Link>
                                    <Link to="#" className="avatar-image avatar-md"
                                        data-bs-toggle="tooltip" data-bs-trigger="hover"
                                        title="Marianne Audrey">
                                        <img src="./assets/images/avatar/5.png" className="img-fluid"
                                            alt="" />
                                    </Link>
                                    <Link to="#" className="avatar-image avatar-md"
                                        data-bs-toggle="tooltip" data-bs-trigger="hover"
                                        title="Marianne Audrey">
                                        <img src="./assets/images/avatar/6.png" className="img-fluid"
                                            alt="" />
                                    </Link>
                                    <Link to="#" className="avatar-text avatar-md"
                                        data-bs-toggle="tooltip" data-bs-trigger="hover" title="Explorer More">
                                        <i className="feather-more-horizontal"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="p-3 border border-dashed rounded-3 mb-3">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center gap-3">
                                    <div
                                        className="wd-50 ht-50 bg-soft-success text-success lh-1 d-flex align-items-center justify-content-center flex-column rounded-2 schedule-date">
                                        <span className="fs-18 fw-bold mb-1 d-block">17</span>
                                        <span className="fs-10 fw-semibold text-uppercase d-block">Dec</span>
                                    </div>
                                    <div className="text-dark">
                                        <Link to="#"
                                            className="fw-bold mb-2 text-truncate-1-line">Standup Team Meeting</Link>
                                        <span className="fs-11 fw-normal text-muted text-truncate-1-line">8:00am -
                                            9:00am</span>
                                    </div>
                                </div>
                                <div className="img-group lh-0 ms-3 justify-content-start d-none d-sm-flex">
                                    <Link to="#" className="avatar-image avatar-md"
                                        data-bs-toggle="tooltip" data-bs-trigger="hover" title="Janette Dalton">
                                        <img src="./assets/images/avatar/2.png" className="img-fluid"
                                            alt="" />
                                    </Link>
                                    <Link to="#" className="avatar-image avatar-md"
                                        data-bs-toggle="tooltip" data-bs-trigger="hover" title="Michael Ksen">
                                        <img src="./assets/images/avatar/3.png" className="img-fluid"
                                            alt="" />
                                    </Link>
                                    <Link to="#" className="avatar-image avatar-md"
                                        data-bs-toggle="tooltip" data-bs-trigger="hover"
                                        title="Socrates Itumay">
                                        <img src="./assets/images/avatar/4.png" className="img-fluid"
                                            alt="" />
                                    </Link>
                                    <Link to="#" className="avatar-image avatar-md"
                                        data-bs-toggle="tooltip" data-bs-trigger="hover"
                                        title="Marianne Audrey">
                                        <img src="./assets/images/avatar/5.png" className="img-fluid"
                                            alt="" />
                                    </Link>
                                    <Link to="#" className="avatar-text avatar-md"
                                        data-bs-toggle="tooltip" data-bs-trigger="hover" title="Explorer More">
                                        <i className="feather-more-horizontal"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="p-3 border border-dashed rounded-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center gap-3">
                                    <div
                                        className="wd-50 ht-50 bg-soft-danger text-danger lh-1 d-flex align-items-center justify-content-center flex-column rounded-2 schedule-date">
                                        <span className="fs-18 fw-bold mb-1 d-block">25</span>
                                        <span className="fs-10 fw-semibold text-uppercase d-block">Dec</span>
                                    </div>
                                    <div className="text-dark">
                                        <Link to="#"
                                            className="fw-bold mb-2 text-truncate-1-line">Zoom Team Meeting</Link>
                                        <span className="fs-11 fw-normal text-muted text-truncate-1-line">03:30pm -
                                            05:30pm</span>
                                    </div>
                                </div>
                                <div className="img-group lh-0 ms-3 justify-content-start d-none d-sm-flex">
                                    <Link to="#" className="avatar-image avatar-md"
                                        data-bs-toggle="tooltip" data-bs-trigger="hover" title="Janette Dalton">
                                        <img src="./assets/images/avatar/2.png" className="img-fluid"
                                            alt="" />
                                    </Link>
                                    <Link to="#" className="avatar-image avatar-md"
                                        data-bs-toggle="tooltip" data-bs-trigger="hover"
                                        title="Socrates Itumay">
                                        <img src="./assets/images/avatar/4.png" className="img-fluid"
                                            alt="" />
                                    </Link>
                                    <Link to="#" className="avatar-image avatar-md"
                                        data-bs-toggle="tooltip" data-bs-trigger="hover"
                                        title="Marianne Audrey">
                                        <img src="./assets/images/avatar/5.png" className="img-fluid"
                                            alt="" />
                                    </Link>
                                    <Link to="#" className="avatar-image avatar-md"
                                        data-bs-toggle="tooltip" data-bs-trigger="hover"
                                        title="Marianne Audrey">
                                        <img src="./assets/images/avatar/6.png" className="img-fluid"
                                            alt="" />
                                    </Link>
                                    <Link to="#" className="avatar-text avatar-md"
                                        data-bs-toggle="tooltip" data-bs-trigger="hover" title="Explorer More">
                                        <i className="feather-more-horizontal"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="#"
                        className="card-footer fs-11 fw-bold text-uppercase text-center py-4">Upcomming Schedule</Link>
                </div>
            </div>
        </>
    );
};

export default UpcomingSchedule;