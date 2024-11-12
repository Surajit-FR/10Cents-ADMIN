import { Link } from "react-router-dom";
import { TDashboardCardData } from "../../../../types/dashboard";

const DashboardCardData = ({ data }: { data: TDashboardCardData }): JSX.Element => {
    return (
        <>
            <div className="col-xxl-3 col-md-6">
                <div className="card stretch stretch-full">
                    <div className="card-body">
                        <div className="d-flex align-items-start justify-content-between mb-4">
                            <div className="d-flex gap-4 align-items-center">
                                <div className="avatar-text avatar-lg bg-gray-200">
                                    <i className={data.iconClass}></i>
                                </div>
                                <div>
                                    <div className="fs-4 fw-bold text-dark">
                                        <span className="counter">{data.count}</span>
                                    </div>
                                    <h3 className="fs-13 fw-semibold text-truncate-1-line">{data.title}</h3>
                                </div>
                            </div>
                            <Link to="#" className="">
                                <i className="feather-more-vertical"></i>
                            </Link>
                        </div>
                        <div className="pt-4">
                            <div className="d-flex align-items-center justify-content-between">
                                <Link to="#" className="fs-12 fw-medium text-muted text-truncate-1-line">
                                    {data.progressTitle}
                                </Link>
                                <div className="w-100 text-end">
                                    <span className="fs-12 text-dark">{data.value}</span>
                                    <span className="fs-11 text-muted">({data.percentage})</span>
                                </div>
                            </div>
                            <div className="progress mt-2 ht-3">
                                <div
                                    className={`progress-bar ${data.progressBarClass}`}
                                    role="progressbar"
                                    style={{ width: data.progressWidth }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardCardData;