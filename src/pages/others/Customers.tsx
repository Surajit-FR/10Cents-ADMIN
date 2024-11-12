import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import Select from 'react-select';

const customersData = [
    {
        id: 1,
        name: "Alexandra Della",
        email: "alex.della@outlook.com",
        phone: "+1 (375) 9632 548",
        date: "2023-04-05, 00:05PM",
        avatar: "./assets/images/avatar/1.png",
        groupOptions: [
            { value: "success", label: "VIP" },
            { value: "info", label: "Bugs" },
            { value: "primary", label: "Team" },
            { value: "teal", label: "Primary" },
            { value: "success", label: "Updates" },
            { value: "warning", label: "Personal" },
            { value: "danger", label: "Promotions", selected: true },
            { value: "indigo", label: "Customs" },
            { value: "primary", label: "Wholesale" },
            { value: "danger", label: "Low Budget" },
            { value: "teal", label: "High Budget", selected: true },
        ],
        status: "Active"
    },
    {
        id: 2,
        name: "Nancy Elliot",
        email: "nancy.elliot@outlook.com",
        phone: "(375) 8523 456",
        date: "2023-04-06, 02:52PM",
        avatar: null, // No image, use initials
        groupOptions: [
            { value: "success", label: "VIP" },
            { value: "info", label: "Bugs" },
            { value: "primary", label: "Team" },
            { value: "teal", label: "Primary" },
            { value: "success", label: "Updates" },
            { value: "warning", label: "Personal" },
            { value: "danger", label: "Promotions", selected: true },
            { value: "indigo", label: "Customs" },
            { value: "primary", label: "Wholesale", selected: true },
            { value: "danger", label: "Low Budget", selected: true },
            { value: "teal", label: "High Budget" },
        ],
        status: "Active"
    }
];

const statusOptions = [
    { value: 'active', label: 'Active', className: 'bg-success' },
    { value: 'inactive', label: 'Inactive', className: 'bg-warning' },
    { value: 'declined', label: 'Declined', className: 'bg-danger' }
];

const customStyles = {
    menu: (base: any) => ({
        ...base,
        maxHeight: 200,
    }),
    option: (base: any, state: { isSelected: any; isFocused: any; }) => ({
        ...base,
        backgroundColor: state.isSelected ? '#3498db' : state.isFocused ? '#f0f0f0' : '#fff',
        color: state.isSelected ? '#fff' : '#000',
        cursor: 'pointer',
    }),
    singleValue: (base: any) => ({
        ...base,
        color: '#000',
    }),
    dropdownIndicator: (base: any) => ({
        ...base,
        color: '#3498db',
    }),
    indicatorSeparator: (base: any) => ({
        ...base,
        backgroundColor: '#3498db',
    }),
};

const Customers = (): JSX.Element => {

    return (
        <>
            <PageHeader pageName="Customers" link="/dashboard" />

            <div id="collapseOne" className="accordion-collapse collapse page-header-collapse">
                <div className="accordion-body pb-2">
                    <div className="row">
                        <div className="col-xxl-3 col-md-6">
                            <div className="card stretch stretch-full">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="avatar-text avatar-xl rounded">
                                                <i className="feather-users"></i>
                                            </div>
                                            <Link to="#" className="fw-bold d-block">
                                                <span className="text-truncate-1-line">Total Customers</span>
                                                <span className="fs-24 fw-bolder d-block">26,595</span>
                                            </Link>
                                        </div>
                                        <div className="badge bg-soft-success text-success">
                                            <i className="feather-arrow-up fs-10 me-1"></i>
                                            <span>36.85%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-md-6">
                            <div className="card stretch stretch-full">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="avatar-text avatar-xl rounded">
                                                <i className="feather-user-check"></i>
                                            </div>
                                            <Link to="#" className="fw-bold d-block">
                                                <span className="text-truncate-1-line">Active Customers</span>
                                                <span className="fs-24 fw-bolder d-block">2,245</span>
                                            </Link>
                                        </div>
                                        <div className="badge bg-soft-danger text-danger">
                                            <i className="feather-arrow-down fs-10 me-1"></i>
                                            <span>24.56%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-md-6">
                            <div className="card stretch stretch-full">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="avatar-text avatar-xl rounded">
                                                <i className="feather-user-plus"></i>
                                            </div>
                                            <Link to="#" className="fw-bold d-block">
                                                <span className="text-truncate-1-line">New Customers</span>
                                                <span className="fs-24 fw-bolder d-block">1,254</span>
                                            </Link>
                                        </div>
                                        <div className="badge bg-soft-success text-success">
                                            <i className="feather-arrow-up fs-10 me-1"></i>
                                            <span>33.29%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-md-6">
                            <div className="card stretch stretch-full">
                                <div className="card-body">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="avatar-text avatar-xl rounded">
                                                <i className="feather-user-minus"></i>
                                            </div>
                                            <Link to="#" className="fw-bold d-block">
                                                <span className="text-truncate-1-line">Inactive Customers</span>
                                                <span className="fs-24 fw-bolder d-block">4,586</span>
                                            </Link>
                                        </div>
                                        <div className="badge bg-soft-danger text-danger">
                                            <i className="feather-arrow-down fs-10 me-1"></i>
                                            <span>42.47%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-content">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card stretch stretch-full">
                            <div className="card-body p-0">
                                <div className="table-responsive">
                                    <table className="table table-hover" id="customerList">
                                        <thead>
                                            <tr>
                                                <th className="wd-30">
                                                    <div className="custom-control custom-checkbox ms-1">
                                                        <input type="checkbox" className="custom-control-input" id="checkAllCustomer" />
                                                        <label className="custom-control-label" htmlFor="checkAllCustomer"></label>
                                                    </div>
                                                </th>
                                                <th>Customer</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {customersData.map((customer) => (
                                                <tr key={customer.id} className="single-item">
                                                    <td>
                                                        <div className="custom-control custom-checkbox ms-1">
                                                            <input type="checkbox" className="custom-control-input checkbox" id={`checkBox_${customer.id}`} />
                                                            <label className="custom-control-label" htmlFor={`checkBox_${customer.id}`}></label>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <Link to="customers-view.html" className="hstack gap-3">
                                                            {customer.avatar ? (
                                                                <div className="avatar-image avatar-md">
                                                                    <img src={customer.avatar} alt="" className="img-fluid" />
                                                                </div>
                                                            ) : (
                                                                <div className="avatar-image avatar-md bg-warning text-white">
                                                                    {customer.name.charAt(0)}
                                                                </div>
                                                            )}
                                                            <div>
                                                                <span className="text-truncate-1-line">{customer.name}</span>
                                                            </div>
                                                        </Link>
                                                    </td>
                                                    <td><Link to="apps-email.html">{customer.email}</Link></td>
                                                    <td><Link to="tel:">{customer.phone}</Link></td>
                                                    <td>{customer.date}</td>
                                                    <td>
                                                        <Select
                                                            className="react-select"
                                                            options={statusOptions}
                                                            defaultValue={statusOptions.find(option => option.value.toLowerCase() === customer.status.toLowerCase())}
                                                            onChange={(selectedOption) => {
                                                                // Handle status change here
                                                                console.log(`Status changed to: ${selectedOption?.label}`);
                                                            }}
                                                            classNamePrefix="react-select"
                                                            styles={customStyles} // Apply custom styles
                                                            isSearchable={true} // Enable search functionality
                                                        />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Customers;