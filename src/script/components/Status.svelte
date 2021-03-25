<script>
    import {Icon, Divider} from 'svelte-materialify';
    import {mdiChartArc} from '@mdi/js';
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

<div class="text-subtitle-2" style="display:flex; margin-bottom:7px;">
    <Icon path={mdiChartArc}/>
    <span style="margin-left:5px;">Skills</span>
</div>
<Divider/>

<div id="chart-container" >
    <SvelteFC {...chartConfig} />
</div>

<div class="text-subtitle-2" style="display:flex; margin-bottom:7px;">
    <Icon path={mdiChartArc}/>
    <span style="margin-left:5px;">Skills in Learning</span>
</div>
<Divider/>


<style type="text/scss">


</style>