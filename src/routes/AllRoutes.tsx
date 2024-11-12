import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/others/Dashboard';
import Customers from '../pages/others/Customers';
import HelpCenter from '../pages/others/HelpCenter';

const AllRoutes = (): JSX.Element => {

    return (
        <>
            <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/customers' element={<Customers />} />
                <Route path='/help-center' element={<HelpCenter />} />
            </Routes>
        </>
    );
};

export default AllRoutes;