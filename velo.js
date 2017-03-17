Highcharts.chart('container', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Efficacité du casque selon les chocs'
  },
  xAxis: {
    categories: ['Vélo']
  },
    yAxis: {
       
        title: {
            text: 'Réduction du nombre de tués (%)'
          }
    },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Choc frontal',
    data: [-3],
     tooltip: {
            valueSuffix: ' %'
        }
  }, {
    name: 'Choc arrière',
    data: [-48],
     tooltip: {
            valueSuffix: ' %'
        }
  }, {
    name: 'Autre choc',
    data: [-20],
     tooltip: {
            valueSuffix: ' %'
        }
  }]
});
