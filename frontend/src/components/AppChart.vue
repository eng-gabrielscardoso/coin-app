<template>
  <LineChart 
    :chartData="chartData" 
    :options="chartOptions"
  />
</template>
<script>
import api from "@/plugins/api"
import moment from "moment"
import { LineChart } from "vue-chart-3"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

export default {
  name: "AppChart",
  components: { 
    LineChart,
  },
  props: {
    coinData: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      labelsChart: [],
      dataChart: [],
      chartOptions: {
        elements: {
          point:{
            radius: 0
          },
          line: {
            tension: 1,
          }
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          xAxes: {
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              autoSkip: true,
              maxTicksLimit: 6,
              suggestedMin: 4,
              suggestedMax: 6,
              maxRotation: 0,
              minRotation: 0,
            }
          },
          yAxes: {
            beginAtZero: false,
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: false,
              beginAtZero: false,
            }
          }
        }
      },
    }
  },
  computed: {
    chartData() {
      return {
        labels: this.labelsChart,
        datasets: [
          {
            data: this.dataChart,
            backgroundColor: 'transparent',
            borderColor: 'rgb(37, 99, 235)'
          }
        ]
      }
    }
  },
  methods: {
    async init() {
      await this.fetchPrices()
    },

    fetchPrices() {
      api
        .get(`/market_chart/${this.coinData.id}/usd/1`)
        .then(response => {
          response.data.prices
            .map(price => {
              moment.locale('en')

              this.dataChart.push(price[1])
              this.labelsChart.push(
                moment(price[0]).format('LT')
              )
            }) 
        })
    },
  },
  created() {
    this.init()
  },
}
</script>
