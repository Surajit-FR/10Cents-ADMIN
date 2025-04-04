import { useDispatch, useSelector } from "react-redux";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/Store";
import { AuthLogoutRequest } from "../../store/reducers/AuthReducers";
import { useEffect } from "react";
import { GetSingleUserRequest } from "../../store/reducers/UserReducers";
import avarImageDefault from '../../../public/assets/images/avatar/1.png'

const UserDropdown = (): JSX.Element => {
    const dispatch: AppDispatch = useDispatch();
    const {singleUserData} = useSelector((state: RootState)=>state.userSlice)
    const navigate: NavigateFunction = useNavigate();
    const id = localStorage.getItem("_id")

    const userLogout = () => {
        dispatch(AuthLogoutRequest({ navigate }));
    };

    useEffect(()=>{
        if(id){
            dispatch(GetSingleUserRequest({userId: id}))
        }
    },[dispatch, id])

    return (
        <>{singleUserData && 
            <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-user-dropdown">
            <div className="dropdown-header">
                <div className="d-flex align-items-center">
                    <img src="./assets/images/avatar/1.png" alt="user-image"
                        className="img-fluid user-avtar" />
                    <div>
                        <h6 className="text-dark mb-0">{singleUserData?.firstName} {singleUserData?.lastName}</h6>
                        <span className="fs-12 fw-medium text-muted">{singleUserData?.email}</span>
                    </div>
                </div>
            </div>
            <div className="dropdown">
                {/* <Link to="#" className="dropdown-item">
                    <span className="hstack">
                        <i className="wd-10 ht-10 border border-2 border-gray-1 bg-success rounded-circle me-2"></i>
                        <span>Active</span>
                    </span>
                </Link> */}
            </div>
            <Link to={`/profile/${id}`} className="dropdown-item">
                <i className="feather-user"></i>
                <span>Profile Details</span>
            </Link>
            <div className="dropdown-divider"></div>
            <Link to="#" className="dropdown-item" onClick={userLogout}>
                <i className="feather-log-out"></i>
                <span>Logout</span>
            </Link>
        </div>
        
        }
          
        </>
    );
};

export default UserDropdown;