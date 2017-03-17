<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>

<div id="container" style="min-width: 310px; max-width: 800px; height: 400px; margin: 0 auto">  </div>	

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
