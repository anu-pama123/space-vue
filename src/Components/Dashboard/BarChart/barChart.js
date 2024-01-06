import { AgChartsReact } from 'ag-charts-react';
import { useState } from 'react';

// style
import "../BarChart/barChart.css";

const BarChart = ({tableData}) => {
    const successfulMissionObj = {}
    let companyNames = [];
    let count = 1;
    
    const getCompanyName = () => {
        tableData.map((data,index) => {
            return data.company;
        }).forEach((name, index) => {
            if(!companyNames.includes(name)) {
                companyNames.push(name);
            }
        })
    }

    getCompanyName();
    
    const getSuccessfulMissionCountOfCompanies = () => {
        tableData.forEach((item, index) => {
            if(!successfulMissionObj[item.company]) {
                if(item.successful === true) {
                    successfulMissionObj[item.company] = count;
                } else {
                    if(successfulMissionObj[item.company] === 0) {
                        successfulMissionObj[item.company] = 0;
                    } else {
                        successfulMissionObj[item.company] = count - 1;
                    }
                }
            } else {
                if(item.successful === true) {
                    successfulMissionObj[item.company] = count++;
                } else {
                    if(successfulMissionObj[item.company] === 0) {
                        successfulMissionObj[item.company] = 0;
                    } else {
                        successfulMissionObj[item.company] = count - 1;
                    }
                }
            }
        })
    }
    getSuccessfulMissionCountOfCompanies();
    
    const getDataModelForBarchart = () => {
        const successfulMissionArr = Object.entries(successfulMissionObj).map(([key, value]) => {
            const data = {companyName : key, successfulMission: value}
            return data
        })
        return successfulMissionArr;
    }

    const data = getDataModelForBarchart()


    const [chartOptions, setChartOptions] = useState({
        data: data,
        series: [{ type: 'bar', xKey: 'companyName', yKey: 'successfulMission' }],
    });
  
    return (
        <div className='chart-container' name='barchart'>
            <div className='chart-subcontainer'>
                <AgChartsReact options={chartOptions} />
            </div>
        </div>
    );
}

export default BarChart;