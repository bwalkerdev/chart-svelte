<script>
    import {chartConstructor} from "./aggregateChart.js";
    import Button from "./Button.svelte";
    import {randomInt, getNextLabel} from "./random.js";
    function clickAddData(){
        chartConstructor.addData([0], getNextLabel(), randomInt(), 1);
        chartConstructor.addData([1], getNextLabel(), randomInt());
        console.log('Attempted to Add Data')
    }
    function clickRemoveData(){
        chartConstructor.removeData()
        console.log('Attempted to Remove Data')
    }
</script>

<div class="nav">
    <div class="title">
        <h1>
            Chart Testing Utility
        </h1>
    </div>
    <div class="action-container">
        <Button on:click={clickAddData} > Add Data </Button>
        <Button on:click={clickRemoveData}> Remove Data </Button>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&display=swap');
    * {
        background-color: black;
    }
    .title {
        color: bisque;
        padding: 10px 20px;
        font-family: 'JetBrains Mono', monospace;
    }
    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .action-container{
        padding: 10px 20px;
        align-content: center;
    }
</style>