Highcharts.chart('container', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Efficacité du casque selon les'
  },
  xAxis: {
    categories: ['Voiture']
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Choc frontal',
    data: [-91]
  }, {
    name: 'Choc arrière',
    data: [-95]
  }, {
    name: 'Autre choc',
    data: [-89]
  }]
});
