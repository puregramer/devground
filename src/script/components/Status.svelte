<script>
    import {Icon, Divider} from 'svelte-materialify';
    import {mdiChartArc} from '@mdi/js';
    import FusionCharts from 'fusioncharts';
    import Charts from 'fusioncharts/fusioncharts.charts';
    import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
    import SvelteFC, { fcRoot } from 'svelte-fusioncharts';
    import {chartData, chartLearningData} from '@script/data';

    fcRoot(FusionCharts, Charts, FusionTheme);

    let chartConfig = {
        type: 'pie3d',
        width: '100%',
        height: 400,
        renderAt: 'chart-container',
        dataSource: chartData
    };
    let chartLearningConfig = {
        type: 'pie3d',
        width: '100%',
        height: 400,
        renderAt: 'chart-learning',
        dataSource: chartLearningData
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

<div class="text-subtitle-2" style="display:flex; margin-top:30px; margin-bottom:7px;">
    <Icon path={mdiChartArc}/>
    <span style="margin-left:5px;">Skills in Learning</span>
</div>
<Divider/>

<div id="chart-learning" >
    <SvelteFC {...chartLearningConfig} />
</div>

<br>
<br>
<br>
<br>

<style type="text/scss">


</style>