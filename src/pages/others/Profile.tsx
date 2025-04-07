import React, { useEffect } from 'react'
import { useDispatch,
    //  useSelector 
    } from 'react-redux'
import { AppDispatch,
    //  RootState 
    } from '../../store/Store'
import { GetSingleUserRequest } from '../../store/reducers/UserReducers'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";


const Profile = () => {
    const { id  } = useParams();
    // const userId = localStorage.getItem("_id") 
    const dispatch = useDispatch<AppDispatch>()
    // const {singleUserData} = useSelector((state: RootState)=> state.userSlice)

    useEffect(()=>{
        if(id){
            dispatch(GetSingleUserRequest({userId:id}))
        }
    },[id, dispatch])
  return (
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
  )
}

export default Profile