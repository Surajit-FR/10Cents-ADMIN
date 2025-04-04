import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/others/Dashboard';
import Customers from '../pages/others/Customers';
import HelpCenter from '../pages/others/HelpCenter';
import Profile from '../pages/others/Profile';

const AllRoutes = (): JSX.Element => {

    return (
        <>
            <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/customers' element={<Customers />} />
                <Route path='/help-center' element={<HelpCenter />} />
                <Route path='/profile/:id' element={<Profile />} />
                {/* <Route path='/profile/' element={<Profile />} /> */}
            </Routes>
        </>
    );
};

export default AllRoutes;