import { Link } from "react-router-dom";
import { GetAllUsersResponse } from "../../../../types/userTypes";

interface Props {
    userData: Partial<GetAllUsersResponse>
}

const LatestLeads = ({userData}:Props): JSX.Element => {
    return (
        <>
            <div className="col-xxl-8">
                <div className="card stretch stretch-full">
                    <div className="card-header">
                        <h5 className="card-title">Latest Customers</h5>
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
                                        {/* <th>Proposal</th> */}
                                        <th scope="row">Full Name</th>
                                        <th scope="row">Email</th>
                                        <th>Date Registered</th>

                                        <th>Phone</th>
                                        {/* <th className="text-end">Actions</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {userData.userData && userData.userData.length >0 ?(
                                        userData.userData.slice(0,3).map((user)=>(
                                            <tr key={user._id}>
                                            <td>
                                                <div className="d-flex align-items-center gap-3">
                                                    {/* <div className="avatar-image">
                                                        <img src="./assets/images/avatar/2.png" alt=""
                                                            className="img-fluid" />
                                                    </div> */}
                                                    <Link to="#">
                                                        <span className="d-block">{user.firstName} {user.lastName}</span>
                                                        {/* <span
                                                            className="fs-12 d-block fw-normal text-muted">{user.email}</span> */}
                                                    </Link>
                                                </div>
                                            </td>
                                            {/* <td>
                                                <span className="badge bg-gray-200 text-dark">Sent</span>
                                            </td> */}
                                            <td>{user.email}</td>
                                            <td>{new Date(user?.createdAt).toLocaleDateString() || '-- --'}</td>
                                            <td>{user?.phone}</td>
                                            {/* <td>
                                                <span className="badge bg-soft-success text-success">Completed</span>
                                            </td> */}
                                            {/* <td className="text-end">
                                                <Link to="#"><i
                                                    className="feather-more-vertical"></i></Link>
                                            </td> */}
                                        </tr>
                                        ))
                                        
                                    ):(
                                        <div>No Users found .....</div>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* <div className="card-footer">
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
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default LatestLeads;