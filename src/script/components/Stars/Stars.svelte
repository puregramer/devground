<script>
    /**
     * This is recreated from a pixi.js example
     *
     * https://github.com/pixijs/examples/blob/gh-pages/examples/js/demos-advanced/star-warp.js
     */

    import * as PIXI from 'pixi.js';
    import { Pixi, Text } from 'svelte-pixi';
    import { onMount } from 'svelte';
    import Star from './Star.svelte';

    export let warp;
    // console.log("warp: ", warp);
    $: console.log("watch warp: ", warp);

    const app = new PIXI.Application();

    const starAmount = 1000;
    let cameraZ = 0;
    const speed = 0.025;
    // const speed = 1;

    let warpSpeed = 0;


    let stars = Array(starAmount).fill(null);

    onMount(() => {
        function tick(delta) {
            warpSpeed += (warp - warpSpeed) / 20;
            cameraZ += delta * 10 * (speed + warpSpeed);
        }

        app.ticker.add(tick);
        return () => app.ticker.remove(tick);
    });

    function resize(node) {
        function handler() {
            app.renderer.resize(node.offsetWidth, node.offsetHeight);
        }
        window.addEventListener('resize', handler);
        setTimeout(() => {
            handler();
        })
        return {
            destroy: () => {
                window.removeEventListener('resize', handler);
            },
        }
    }
</script>

<div class="wrapper" use:resize>
    <Pixi {app}>
        {#each stars as star, i}
            <Star {app} {cameraZ} {warpSpeed}/>
        {/each}
    </Pixi>
</div>

<style type="text/scss">
    .wrapper {
        width: 100%;
        height: 100%;
        background: black;
    }
</style>