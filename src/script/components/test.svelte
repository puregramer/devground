<script>
    import {onMount} from 'svelte';
    import { MaterialApp,  } from 'svelte-materialify';
    import Prism from 'prismjs';

    Prism.highlightAll();
    let theme = 'dark';

    onMount(() => {

    });


    //https://ui.toast.com/weekly-pick/ko_20191216
</script>

<MaterialApp {theme}>

    <div class="d-flex justify-center mt-4 mb-4">
        <div class="pa-4" style="flex-grow:1; max-width:700px;">

            <pre><code class="language-js">const test = "hello";</code></pre>


        </div>
    </div>

</MaterialApp>


<style type="text/scss">


</style>