Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
          text: 'Les 10 départements les plus meurtriers'
          },
    subtitle: {
       
    },
    xAxis: {
        categories: ['Paris', 'Bouches-du-Rhône','Val-de-Marne', 'Seine-Saint-Denis',  'Hauts-de-Seine', 'Haute-Corse', 'Alpes-Maritimes', 'Essonne', 'Indre-et-Loire', 'Rhône'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
                  text: 'Nombre accidents corporels (pour 10 000 hab)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' '
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: false,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
      name: 'Année 2015',
          data: [27.9, 19.8, 18.5, 17.2, 16.9, 15.3, 15.3, 11.9, 11.8, 11.4]
    }]
});
