Highcharts.chart('container', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Efficacité du casque selon les chocs'
  },
  xAxis: {
    categories: ['Moto']
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
    data: [-60],
     tooltip: {
            valueSuffix: ' %'
        }
  }, {
    name: 'Choc arrière',
    data: [-83],
     tooltip: {
            valueSuffix: ' %'
        }
  }, {
    name: 'Autre choc',
    data: [-80],
     tooltip: {
            valueSuffix: ' %'
        }
  }]
});
