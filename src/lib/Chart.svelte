<script>
    import {onMount} from "svelte";
    import Chart from 'chart.js/auto'; // TODO Make Tree-Shakeable
    import {chartConstructor} from "./aggregateChart.js";
    let ctx;

    onMount(async () => {
        chartConstructor.constructChart(ctx)
    })
</script>

<canvas id="myChart" height="100" bind:this={ctx}></canvas>

<style>

</style>