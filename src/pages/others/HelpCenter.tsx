import { Link } from "react-router-dom";

const HelpCenter = (): JSX.Element => {
    return (
        <>
            <div className="nxl-content pt-0">
                <div className="row g-0 align-items-center border-bottom help-center-content-header">
                    <div className="col-lg-6 offset-lg-3 text-center">
                        <h2 className="fw-bolder mb-2 text-dark">Knowledge Base</h2>
                        <p className="text-muted">A premium web applications with integrate knowledge base.</p>
                        <form action="" className="my-4 d-none d-sm-block search-form">
                            <div className="input-group select-wd-sm">
                                <select className="form-control" data-select2-selector="icon">
                                    <option data-icon="feather-airplay">Getting Started</option>
                                    <option data-icon="feather-link-2">Integrations</option>
                                    <option data-icon="feather-archive">Directory</option>
                                    <option data-icon="feather-help-circle">FAQ'S</option>
                                    <option data-icon="feather-at-sign">Administrator</option>
                                    <option data-icon="feather-users">End-Users</option>
                                    <option data-icon="feather-life-buoy">Support</option>
                                </select>
                                <input type="text" className="form-control w-25" placeholder="Enter your keyword or question here..." />
                                <button type="submit" className="btn btn-primary">
                                    <i className="feather-search"></i>
                                    <span className="ms-2">Search</span>
                                </button>
                            </div>
                        </form>
                        <div className="mt-2 d-none d-sm-block">
                            <span className="fs-12 text-muted">Popular:</span>
                            <Link to="#" className="badge bg-gray-100 shadow-sm text-muted mx-1">Started</Link>
                            <Link to="#" className="badge bg-gray-100 shadow-sm text-muted mx-1">Integrations</Link>
                            <Link to="#" className="badge bg-gray-100 shadow-sm text-muted mx-1">Directory</Link>
                            <Link to="#" className="badge bg-gray-100 shadow-sm text-muted mx-1">Administrator</Link>
                            <Link to="#" className="badge bg-gray-100 shadow-sm text-muted mx-1">Support</Link>
                        </div>
                    </div>
                </div>

                <div className="main-content container-lg px-4 help-center-main-contet-area overflow-visible">
                    <div className="row help-quick-card">
                        <div className="col-lg-4">
                            <div className="card mb-4 mb-lg-0">
                                <div className="card-body p-5">
                                    <div className="wd-50 ht-50 d-flex align-items-center justify-content-center mb-5">
                                        <img src="./assets/images/icons/line-icon/idea.png" className="img-fluid" alt="" />
                                    </div>
                                    <h2 className="fs-16 fw-bold mb-3">Knowledge Base</h2>
                                    <p className="fs-12 fw-medium text-muted text-truncate-3-line">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, veniam. Modi quas vero odit asperiores alias libero quae in quam dicta autem et repudiandae ex, molestiae doloremque, explicabo reiciendis minus?</p>
                                    <Link to="#" className="fs-12">Learn More &rarr;</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card mb-4 mb-lg-0">
                                <div className="card-body p-5">
                                    <div className="wd-50 ht-50 d-flex align-items-center justify-content-center mb-5">
                                        <img src="./assets/images/icons/line-icon/support.png" className="img-fluid" alt="" />
                                    </div>
                                    <h2 className="fs-16 fw-bold mb-3">Contact Agent</h2>
                                    <p className="fs-12 fw-medium text-muted text-truncate-3-line">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, veniam. Modi quas vero odit asperiores alias libero quae in quam dicta autem et repudiandae ex, molestiae doloremque, explicabo reiciendis minus?</p>
                                    <Link to="#" className="fs-12">Learn More &rarr;</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card mb-4 mb-lg-0">
                                <div className="card-body p-5">
                                    <div className="wd-50 ht-50 d-flex align-items-center justify-content-center mb-5">
                                        <img src="./assets/images/icons/line-icon/rocket.png" className="img-fluid" alt="" />
                                    </div>
                                    <h2 className="fs-16 fw-bold mb-3">Community Forum</h2>
                                    <p className="fs-12 fw-medium text-muted text-truncate-3-line">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, veniam. Modi quas vero odit asperiores alias libero quae in quam dicta autem et repudiandae ex, molestiae doloremque, explicabo reiciendis minus?</p>
                                    <Link to="#" className="fs-12">Learn More &rarr;</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HelpCenter;