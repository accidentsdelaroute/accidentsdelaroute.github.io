Highcharts.chart('moto', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Efficacité du casque selon les chocs'
  },
  xAxis: {
    categories: ['Moto']
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Choc frontal',
    data: [-60]
  }, {
    name: 'Choc arrière',
    data: [-83]
  }, {
    name: 'Autre choc',
    data: [-80]
  }]
});
