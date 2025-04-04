import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import $ from "jquery";
import "datatables.net";
import "datatables.net-bs5";
import "datatables.net-responsive";
import "datatables.net-buttons-bs5";
import "datatables.net-buttons/js/buttons.html5";

// Import DataTable styles from node_modules
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css";
import "datatables.net-fixedcolumns-bs5/css/fixedColumns.bootstrap5.min.css";
import "datatables.net-fixedheader-bs5/css/fixedHeader.bootstrap5.min.css";
import "datatables.net-buttons-bs5/css/buttons.bootstrap5.min.css";
import "datatables.net-select-bs5/css/select.bootstrap5.min.css";

import { debounce } from "lodash";
import DataCards from "../../components/core/customer/DataCards";
import { API } from "../../store/api/Api";
import { useNavigate } from "react-router-dom";

const Customers = (): JSX.Element => {
    const navigate = useNavigate();
    useEffect(() => {
        const handleViewDetails = (id: string) => {
            navigate(`/profile/${id}`);
        };
        // Initialize DataTable
        const table = $('#datatable-buttons').DataTable({
            responsive: true,
            fixedHeader: true,
            fixedColumns: true,
            select: true,
            pagingType: 'full_numbers', // Custom pagination (First, Previous, Next, Last)
            dom: '<"top d-flex justify-content-between align-items-center"lf>rt<"bottom"ip><"clear">', // Table structure (search, pagination, etc.)
            serverSide: true,
            processing: true,
            ajax: async (data: any, callback: Function) => {
                try {
                    const params = {
                        page: data.start / data.length + 1,
                        limit: data.length,
                        query: data.search.value || '',
                        sortBy: data.columns[data.order[0].column].data,
                        sortType: data.order[0].dir,
                    };

                    const response = await API.get(`/user/get-all-customer`, {
                        params,
                        withCredentials: true,
                    });

                    const userData = response.data.data.userData.map((item: any) => [
                        `${item?.firstName} ${item?.lastName}`,
                        item?.email || '-- --',
                        item?.phone || '-- --',
                        new Date(item?.createdAt).toLocaleDateString() || '-- --',
                        `<button class="btn btn-primary btn-sm view-details dt-head-center dt-body-center" data-id="${item._id}">View Details</button>`,
                        // item?._id,
                    ]);

                    const totalRecords = response.data.data.pagination.total;

                    callback({
                        draw: data.draw,
                        recordsTotal: totalRecords,
                        recordsFiltered: totalRecords,
                        data: userData,
                    });
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            },
            columns: [
                { title: "Name", orderable: false },
                { title: "Email", orderable: false },
                { title: "Phone", orderable: false },
                { title: "Date Registered", orderable: false },
                { title: "View", orderable: false },
            ],
            "columnDefs": [
                { "className": "dt-body-left dt-head-left", "targets": "_all" }
            ],
        });
        // handle details users views

        $('#datatable-buttons').on('click', '.view-details', function () {
            const id = $(this).data('id');
            handleViewDetails(id);
        });
        // Debounced search functionality
        const debouncedSearch = debounce((value: string) => {
            table.search(value).draw();
        }, 600);

        const searchInput = $('#datatable-buttons_filter input');

        searchInput.off('input');
        searchInput.on('input', function () {
            const searchValue = $(this).val();
            if (searchValue !== null) {
                debouncedSearch(searchValue as string);
            }
        });

        // Clean up the event listeners and DataTable instance on unmount
        return () => {
            searchInput.off('input');
            $('#datatable-buttons tbody').off('click', '.action-button');
            table.destroy();
        };
    }, [navigate]);

    return (
        <>
            <PageHeader pageName="Customers" link="/dashboard" />
            <DataCards />

            <div className="main-content">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card stretch stretch-full">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table id="datatable-buttons" className="table table-striped dt-responsive nowrap w-100 dt-head-left dt-body-left">
                                        <thead>
                                            <tr>
                                                <th>Customer</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Date Registered</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* Data will be populated by DataTable */}
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