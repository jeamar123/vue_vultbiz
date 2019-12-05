<template>
  <canvas id="daily-sales-chart"></canvas>
</template>

<script>
import Chart from "chart.js";
import moment from "moment";

export default {
  data() {
    return {
      tempData : {
        type: 'line',
        data: {
          labels: [],
          datasets: [
            { 
              label: 'Sales Total',
              data: [0, 7, 1, 22, 47, 92, 17, 36],
              backgroundColor: [
                'rgba(62, 154, 181,.5)', // Green
                'rgba(62, 154, 181,.5)', // Green
                'rgba(62, 154, 181,.5)', // Green
                'rgba(62, 154, 181,.5)', // Green
                'rgba(62, 154, 181,.5)', // Green
                'rgba(62, 154, 181,.5)', // Green
                'rgba(62, 154, 181,.5)', // Green
                'rgba(62, 154, 181,.5)', // Green
              ],
              borderColor: [
                'rgba(62, 154, 181,.5)',
                'rgba(62, 154, 181,.5)',
                'rgba(62, 154, 181,.5)',
                'rgba(62, 154, 181,.5)',
                'rgba(62, 154, 181,.5)',
                'rgba(62, 154, 181,.5)',
                'rgba(62, 154, 181,.5)',
                'rgba(62, 154, 181,.5)',
              ],
              borderWidth: 3
            },
          ]
        },
        options: {
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                padding: 25,
              }
            }]
          }
        }
      },
    };
  },
  props: ["chartData"],
  created() {
    this.calcChartDates('Last 7 days');
  },
  methods: {
    calcChartDates( opt ){
      if( opt == 'Last 7 days' ){
        const current = moment();
        let n = 0;
        while( n <= 7 ){
          this.tempData.data.labels.unshift( "" + current.format("MMM DD") + "" );
          current.subtract(1,"day");
          n++;
        }
      }
    },
    createChart(chartid, chartData) {
      const ctx = document.getElementById(chartid);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    }
  },
  mounted() {
    this.createChart("daily-sales-chart", this.tempData);
    console.log( this.chartData );
  }
};
</script>

<style>

</style>

