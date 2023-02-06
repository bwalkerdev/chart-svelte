<script>
    let buttonProps = {
        class:[$$restProps.class]
    }
</script>

<button on:click
        on:mouseover
        on:mouseenter
        on:mouseleave
        {...buttonProps}>
    <slot/>
</button>

<style>
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&display=swap');
    button {
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&display=swap');
        font-family: 'JetBrains Mono', monospace;
        color: bisque;
        font-size: 16px;
        background-color: blue;
        outline: bisque 5px;
        text-align: center;
        padding: 15px 30px;
        display: inline-block;
    }
</style>