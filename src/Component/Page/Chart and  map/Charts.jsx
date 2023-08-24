import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-moment';
import moment from 'moment';
import { useGraphData } from '../../Api/Api';

const Charts = () => {
  const [data, setData] = useState(null);
  const chartRef = useRef(null);
  const graphDataQuery = useGraphData();

  useEffect(() => {
    if (graphDataQuery.data) {
      setData(graphDataQuery.data);
    }
  }, [graphDataQuery]);

  useEffect(() => {
    if (data) {
      const dates = Object.keys(data.cases).map(dateString => moment(dateString));
      const caseCounts = Object.values(data.cases);
      const deathCounts = Object.values(data.deaths);
      const recoveredCounts = Object.values(data.recovered);

      const chart = new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels: dates,
          datasets: [
            {
              label: 'Cases',
              data: caseCounts,
              borderColor: 'blue',
              fill: false,
            },
            {
              label: 'Deaths',
              data: deathCounts,
              borderColor: 'red',
              fill: false,
            },
            {
              label: 'Recovered',
              data: recoveredCounts,
              borderColor: 'green',
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day',
                tooltipFormat: 'll',
              },
              title: {
                display: true,
                text: 'Date',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Number of Cases',
              },
            },
          },
        },
      });

      chartRef.current = chart;
    }
  }, [data]);

  if (graphDataQuery.isLoading) {
    return <p className='text-white'>.</p>;
  }

  if (graphDataQuery.isError) {
    return <p>Error loading data</p>;
  }

  return (
    <>
   <div>
 
  <div className="flex justify-center mb-10 ">
  <img
    className="max-w-full h-auto"
    src="https://cdnuploads.aa.com.tr/uploads/Contents/2020/04/20/thumbs_b_c_e744e82b1ea080043a7a807cf4a29aca.jpg?v=165024"
    alt=""
  />
</div>

<p>Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.

Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment. However, some will become seriously ill and require medical attention. Older people and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, or cancer are more likely to develop serious illness. Anyone can get sick with COVID-19 and become seriously ill or die at any age. </p>

<h1 className='text-center font-bold mt-5 mb-10 text-red-700'> This chart base on  Specific number of covid cases,deaths,and recovered Information  </h1>
   </div>
    <div className="overflow-x-auto ">
    <canvas ref={chartRef} className="w-full h-full"></canvas>
  </div>
  </>
  )
};

export default Charts;



