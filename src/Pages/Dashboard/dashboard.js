import { useEffect, useState } from "react";

// components
import Table from "../../Components/Dashboard/Table/table";
import BarChart from "../../Components/Dashboard/BarChart/barChart";
import PieChart from '../../Components/Dashboard/PieChart/pieChart';

import { getSpaceMissionData } from '../../Service/api';

// style
import "../../Pages/Dashboard/dashboard.css";

const Dashboard = () => {
    const [data,setData] = useState([]);
    const [loader, setLoader] = useState(false);

    const getData = async () => {
        setLoader(true)
        const data = await getSpaceMissionData()
        setData(data?.data)
        setLoader(false)
    }

    useEffect(() => {getData()},[])                                                                                               

    return (
        <div className="dashboard-container">
            {!loader ? (
                <>
                    <Table tableData={data}></Table>
                    <div>
                        <div className="piechart-title-container">
                            <h1>Pie Chart</h1>
                        </div>
                        <PieChart tableData={data}></PieChart>
                    </div>
                    <div>
                        <div className="barchart-title-container">
                            <h1>Bar Chart</h1>
                        </div>
                        <BarChart tableData={data}></BarChart>
                    </div>
                </>
            ) : (
                <div className='loader-container'>
                    <div className='loader'></div>
                </div>
            )}
        </div>
    )
}

export default Dashboard;