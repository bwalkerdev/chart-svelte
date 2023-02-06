import {chartConstructor} from "./aggregateChart.js";
export let randomInt = () => Math.floor(Math.random() * 20)
export let getNextLabel = () => chartConstructor.aggregateChart.data.labels.length + 1