
import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
import placementData from '../assets/data/placement.json';


const PlacementChart = ({ department, year, onClose }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const data = placementData[`${department}${year}`];
        if (data) {
            const chartData = data.map(company => [company.company, company.numberOfStudents]);
            setChartData([['Company', 'Number of Students'], ...chartData]);
        }
    }, [department, year]);

    const options = {
        width: 400, 
        height: 300, 
        chartArea: {
            left: "3%",
            top: "3%",
            height: "94%",
            width: "94%"
        },
    };
    return (
        <div className={`popup`} role="alert" year={year}>
            <div className="popup-container">
                <div className="popup-close img-replace" onClick={onClose}>Close</div>
                <h2 className="department-primary--sub white-headf uppercase">{department}</h2>
                <div className="ne-nutrition-distribution">
                    <Chart
                        chartType="PieChart"
                        data={chartData}
                        options={options}
                        legendToggle
                    />
                </div>
            </div>
        </div>
    );
};

export default PlacementChart;
