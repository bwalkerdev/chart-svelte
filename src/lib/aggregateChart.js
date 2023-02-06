import Chart from 'chart.js/auto'; // TODO Make Tree-Shakeable
export let chartConstructor = {
    aggregateChart: null,
    constructChart: function (canvas) {
        this.aggregateChart = new Chart(canvas, {
            type: 'line',
            data: {
                labels: [1, 2, 3, 4, 5, 6],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    borderWidth: 1,
                    tension: 0.3
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    },
    addData: function(label, data) {
        this.aggregateChart.data.labels.push(label);
        this.aggregateChart.data.datasets.forEach((dataset) => {
            dataset.data.push(data)
        });
        this.aggregateChart.update();
    }
}