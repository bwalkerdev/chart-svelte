<script>
    import {chartConstructor} from "./aggregateChart.js";
    import Button from "./Button.svelte";
    import {randomInt, getNextLabel} from "./random.js";
    function handleClick(){
        chartConstructor.addData(getNextLabel(), randomInt())
        console.log('Attempted to Add Data')
    }
</script>

<div class="nav">
    <div class="title">
        <h1>
            Chart Testing Utility
        </h1>
    </div>
    <div class="action-container">
        <Button on:click={handleClick} > Click Me! </Button>
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