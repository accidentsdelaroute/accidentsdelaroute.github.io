Highcharts.chart('container', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Efficacité du casque selon les'
  },
  xAxis: {
    categories: ['Vélo']
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Choc frontal',
    data: [-3]
  }, {
    name: 'Choc arrière',
    data: [-48]
  }, {
    name: 'Autre choc',
    data: [-20]
  }]
});
