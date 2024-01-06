import { AgChartsReact } from 'ag-charts-react';
import { useState } from 'react';

// style
import "../PieChart/pieChart.css";

const PieChart = ({tableData}) => {
    const missionCountObj = {};
    let count = 1;

    const getMissionCountOfCompanies = () => {
        tableData.map((data, index) => {
            return data.company;
        }).filter((name, index) => {
            if (!missionCountObj[name]) {
                missionCountObj[name] = count;
                return true;
            } else{
                missionCountObj[name] = count++;
            }
            return false;
        })
    }

    getMissionCountOfCompanies();

    const getDataModelForPiechart = () => {
        const companyNameArr = Object.entries(missionCountObj).map(([key, value]) => {
            const data = {companyName : key, missionCount: value}
            return data
        })
        return companyNameArr;
    }

    const data = getDataModelForPiechart();

    const [options, setOptions] = useState({
        data: data,
        title: {
            text: 'Portfolio Composition',
        },
        series: [
            {
                type: 'pie',
                angleKey: 'missionCount',
                legendItemKey: 'companyName',
            },
        ],
    });
  
    return (
        <div className='chart-container' name="piechart">
            <div className='chart-subcontainer'>
                <AgChartsReact options={options} />
            </div>
        </div>
    );
}

export default PieChart;