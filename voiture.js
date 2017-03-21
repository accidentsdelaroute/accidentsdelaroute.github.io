<!DOCTYPE HTML>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>Montants investis par arrondissement</title>

		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
		<style type="text/css">
${demo.css}
		</style>
		<script type="text/javascript">
$(function () {
    $('#container').highcharts({
        chart: {
            zoomType: 'xy'
        },title: {
            text: ' '
        },
        
        
        xAxis: [{
            categories: ['Voiture'],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value} hab',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            title: {
                text: '',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            opposite: true
        }, { // Secondary yAxis
            gridLineWidth: 0,
            title: {
                text: 'Réduction du nombre de tués (%)',
                style: {
                    color: '#130c09'
                }
            },
            labels: {
                format: '{value} %',
                style: {
                    color: '#130c09'
                }
            }
        }, { // Tertiary yAxis
            gridLineWidth: 0,
            title: {
                text: '',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            labels: {
                format: '{value} €',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 80,
            verticalAlign: 'top',
            y: 5,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        exporting : {enabled : false},
        credits : {enabled : false},
        series: [{
            name: 'Choc frontal',
            type: 'column',
            color:'#ff8000',
            yAxis: 1,
            data: [-91],
            tooltip: {
                valueSuffix: '%'
            }
        },{
            name: 'Choc arrière',
            type: 'column',
            yAxis: 1,
            data: [-95],
            tooltip: {
                valueSuffix: '%'
            }
        },{
            name: 'Autre choc',
            type: 'column',
            yAxis: 1,
            data: [-89],
            tooltip: {
                valueSuffix: '%'
            }
        }]
    });
});
</script>
	</head>
	<body>

<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>

<div id="container" style="min-width: 400px; height: 400px; margin: 0 auto"></div>
</body>
</html>
