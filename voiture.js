Highcharts.chart('container', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Efficacité du casque selon les chocs'
  },
  xAxis: {
    categories: ['Voiture']
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
    data: [-91],
     tooltip: {
            valueSuffix: ' %'
        }

  }, {
    name: 'Choc arrière',
    data: [-95],
     tooltip: {
            valueSuffix: ' %'
        }
  }, {
    name: 'Autre choc',
    data: [-89],  tooltip: {
            valueSuffix: ' %'
        }
  }]
});
