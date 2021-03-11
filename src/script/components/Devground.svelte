<script>
    import {onMount} from 'svelte';
    import { MaterialApp, AppBar, Button, Icon } from 'svelte-materialify';
    import { mdiMenu } from '@mdi/js';
    let theme = 'dark';

    onMount(() => {

    });


</script>


<MaterialApp {theme}>
    <AppBar flat="true">
        <div slot="icon">
            <Button fab depressed>
                <Icon path={mdiMenu} />
            </Button>
        </div>
        <span slot="title">Devground</span>
    </AppBar>
</MaterialApp>


<style type="text/scss">


</style>