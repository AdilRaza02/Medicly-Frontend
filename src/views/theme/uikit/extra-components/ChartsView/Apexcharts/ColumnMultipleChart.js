import { merge } from 'lodash';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexChartsOption } from '~/components/theme/Charts/Apexcharts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  { name: 'Net Profit', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] },
  { name: 'Revenue', data: [76, 85, 101, 98, 87, 105, 91, 114, 94] }
];

function ColumnMultipleChart() {
  const chartOptions = merge(ApexChartsOption(), {
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: [
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct'
      ]
    },
    tooltip: {
      y: {
        formatter: function(val) {
          return '$ ' + val + ' thousands';
        }
      }
    },
    plotOptions: { bar: { columnWidth: '34%', endingShape: 'rounded' } }
  });

  return (
    <ReactApexChart
      type="bar"
      height={320}
      series={CHART_DATA}
      options={chartOptions}
    />
  );
}

export default ColumnMultipleChart;
