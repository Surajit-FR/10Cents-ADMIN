import PageHeader from "../../components/PageHeader";
import DashboardCardData from "../../components/core/dashboard/DashboardCardData";
import dashboardCardData from "../../components/core/dashboard/dashboardCardData.json";
import { TCardListOneData, TDashboardCardData } from "../../../types/dashboard";
import PaymentRecord from "../../components/core/dashboard/PaymentRecord";
import CostDetails from "../../components/core/dashboard/CostDetails";
import cardListdata_one from "../../components/core/dashboard/cardListData.json";
import CardListSectionOne from "../../components/core/dashboard/CardListSectionOne";
import LeadsOverview from "../../components/core/dashboard/LeadsOverview";
import LatestLeads from "../../components/core/dashboard/LatestLeads";
import UpcomingSchedule from "../../components/core/dashboard/UpcomingSchedule";
import ProjectStatus from "../../components/core/dashboard/ProjectStatus";
import TeamProgress from "../../components/core/dashboard/TeamProgress";

const Dashboard = (): JSX.Element => {
    return (
        <>
            <PageHeader pageName="Dashboard" link="/dashboard" />

            <div className="main-content">
                <div className="row">

                    {/* DashboardCardData Section */}
                    {
                        dashboardCardData?.map((data: TDashboardCardData, index: number) => {
                            return (
                                <DashboardCardData
                                    data={data}
                                    key={index}
                                />
                            )
                        })
                    }

                    {/* PaymentRecord Section */}
                    <PaymentRecord />


                    {/* Cost Details Section */}
                    <CostDetails />

                    {/* CardListSectionOne */}
                    {
                        cardListdata_one?.map((item: TCardListOneData, index: number) => {
                            return (
                                <CardListSectionOne item={item} key={index} />
                            )
                        })
                    }

                    {/* LeadsOverview Section */}
                    <LeadsOverview />

                    {/* Latest Leads Section */}
                    <LatestLeads />

                    {/* Upcoming Schedule Section */}
                    <UpcomingSchedule />

                    {/* Project Status Section */}
                    <ProjectStatus />

                    {/* Team Progress Section */}
                    <TeamProgress />
                </div>
            </div>
        </>
    );
};

export default Dashboard;