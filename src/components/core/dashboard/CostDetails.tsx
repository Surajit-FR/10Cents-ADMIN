import { Link } from "react-router-dom";

const CostDetails = (): JSX.Element => {
    return (
        <>
            <div className="col-xxl-4">
                <div className="card stretch stretch-full overflow-hidden">
                    <div className="bg-primary text-white">
                        <div className="p-4">
                            <span className="badge bg-light text-primary text-dark float-end">12%</span>
                            <div className="text-start">
                                <h4 className="text-reset">30,569</h4>
                                <p className="text-reset m-0">Total Sales</p>
                            </div>
                        </div>
                        <div id="total-sales-color-graph"></div>
                    </div>
                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="hstack gap-3">
                                <div className="avatar-image avatar-lg p-2 rounded">
                                    <img className="img-fluid" src="./assets/images/brand/shopify.png" alt="" />
                                </div>
                                <div>
                                    <Link to="#" className="d-block">Shopify eCommerce Store</Link>
                                    <span className="fs-12 text-muted">Development</span>
                                </div>
                            </div>
                            <div>
                                <div className="fw-bold text-dark">$1200</div>
                                <div className="fs-12 text-end">6 Projects</div>
                            </div>
                        </div>
                        <hr className="border-dashed my-3" />
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="hstack gap-3">
                                <div className="avatar-image avatar-lg p-2 rounded">
                                    <img className="img-fluid" src="./assets/images/brand/app-store.png"
                                        alt="" />
                                </div>
                                <div>
                                    <Link to="#" className="d-block">iOS Apps Development</Link>
                                    <span className="fs-12 text-muted">Development</span>
                                </div>
                            </div>
                            <div>
                                <div className="fw-bold text-dark">$1450</div>
                                <div className="fs-12 text-end">3 Projects</div>
                            </div>
                        </div>
                        <hr className="border-dashed my-3" />
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="hstack gap-3">
                                <div className="avatar-image avatar-lg p-2 rounded">
                                    <img className="img-fluid" src="./assets/images/brand/figma.png" alt="" />
                                </div>
                                <div>
                                    <Link to="#" className="d-block">Figma Dashboard Design</Link>
                                    <span className="fs-12 text-muted">UI/UX Design</span>
                                </div>
                            </div>
                            <div>
                                <div className="fw-bold text-dark">$1250</div>
                                <div className="fs-12 text-end">5 Projects</div>
                            </div>
                        </div>
                    </div>
                    <Link to="#" className="card-footer fs-11 fw-bold text-uppercase text-center py-4">Full Details</Link>
                </div>
            </div>
        </>
    );
};

export default CostDetails;