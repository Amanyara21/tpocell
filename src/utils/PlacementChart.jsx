import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
import placementData from '../assets/data/placement.json';
import { useRouter } from 'next/navigation';
import Loading from '@/app/loading';

const PlacementChart = ({ department, year, onClose }) => {
    const router = useRouter();
    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const data = placementData[`${department}${year}`];
        if (data) {
            const chartData = data.map(company => [company.company, company.numberOfStudents]);
            setChartData([['Company', 'Number of Students'], ...chartData]);
        }
        setLoading(false);
    }, [department, year]);

    const handleNavigate = () => {
        router.push(`/placementmanagement?department=${department.toUpperCase()}&passingyear=${year}`);
    };


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
                <h2 className="department-primary--sub white-headf uppercase">{department} &nbsp;{year}</h2>
                <div className="ne-nutrition-distribution">
                    {loading ? (
                        <div className="flex justify-center items-center h-full">
                           <Loading/>
                        </div>
                    ) : (
                        <>
                            <Chart
                                chartType="PieChart"
                                data={chartData}
                                options={options}
                                legendToggle
                            />
                            <button onClick={handleNavigate} className="button btn py-3 px-8 bg-dark-gold">
                                See Detailed Placements
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PlacementChart;

