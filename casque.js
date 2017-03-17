Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Efficacité du casque selon les chocs'
    }, 
    xAxis: {
        categories: ['Moto', 'Vélo']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Choc frontal',
        data: [-60, -3, ]
    },  {
        name: 'Choc arrière',
        data: [-83, -48, ]
    }, {
        name: 'Autre choc',
        data: [-80, -20, ]
    }]
});
