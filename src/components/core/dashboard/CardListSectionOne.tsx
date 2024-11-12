import { TCardListOneData } from "../../../../types/dashboard";

const CardListSectionOne = ({ item }: { item: TCardListOneData }) => {
    return (
        <>
            <div className="col-lg-4">
                <div className="card mb-4 stretch stretch-full">
                    <div className="card-header d-flex align-items-center justify-content-between">
                        <div className="d-flex gap-3 align-items-center">
                            <div className="avatar-text">
                                <i className={item.iconClass}></i>
                            </div>
                            <div>
                                <div className="fw-semibold text-dark">{item.title}</div>
                                <div className="fs-12 text-muted">{item.status}</div>
                            </div>
                        </div>
                        <div className="fs-4 fw-bold text-dark">{item.mainCount}</div>
                    </div>
                    <div className="card-body d-flex align-items-center justify-content-between gap-4">
                        <div id={item.chartId}></div>
                        <div className="fs-12 text-muted text-nowrap">
                            <span className={`fw-semibold ${item.changeColorClass}`}>{item.percentageChange}</span><br />
                            <span>{item.description}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardListSectionOne;