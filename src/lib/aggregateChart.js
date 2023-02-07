import Chart from 'chart.js/auto'; // TODO Make Tree-Shakeable
export let chartConstructor = {
    aggregateChart: null,
    ctx: null,
    setCtx: function(canvas) {
        this.ctx = canvas
    },

    constructChart: function () {
        this.aggregateChart = new Chart(this.ctx, {
            type: 'line',
            responsive: true,
            data: {
                labels: [1, 2, 3, 4, 5, 6],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    borderColor: '#000000',
                    borderWidth: 4
                },{
                    label: 'Second Dataset',
                    data: [9, 15, 19, 3, 5, 12],
                    borderColor: '#FFFFFF',
                    borderWidth: 4
                }]
            },
            options: {
                animations: {
                    x: {

                    },
                    y: {

                    }
                },
                tension: 0.3,
            }
        });
    },
    addData: function(dataset, label, data, pushLabel) {
        if (pushLabel === 1) {
            this.aggregateChart.data.labels.push(label);
        }
        this.aggregateChart.data.datasets[dataset].data.push(data) // Updates Each line individually
        this.aggregateChart.update();
    },
    removeData: function() {
        this.aggregateChart.data.labels.pop();
        this.aggregateChart.data.datasets.forEach((dataset) => {
            dataset.data.pop();
        });
        this.aggregateChart.update();
    }
}
