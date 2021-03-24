<script>
    import FusionCharts from 'fusioncharts';
    import Charts from 'fusioncharts/fusioncharts.charts';
    import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
    import SvelteFC, { fcRoot } from 'svelte-fusioncharts';
    import {chartData} from '@script/data';

    fcRoot(FusionCharts, Charts, FusionTheme);

    let chartConfig = {
        type: 'pie3d',
        width: '600',
        height: '400',
        renderAt: 'chart-container',
        dataSource: chartData
    };
</script>

<div id="chart-container" >
    <SvelteFC {...chartConfig} />
</div>


<style type="text/scss">


</style>