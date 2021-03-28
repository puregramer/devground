<script>
    import { MaterialApp, Button } from 'svelte-materialify';
    import {fade} from 'svelte/transition';
    import Stars from './Stars/Stars.svelte';
    import Devground from "./Devground.svelte";
    import {onMount} from 'svelte';

    let warp = 0;
    let isContentBoxShow;
    let isDevgroundBoxShow = false;

    function enterHandler() {
        warp = 1;
        isContentBoxShow = false;
        setTimeout(() => {
            warp = 0;
            isDevgroundBoxShow = true;
        }, 3000);
    }
    onMount(() => {
        isContentBoxShow = true;
    });

</script>

<div class="intro">
    <div class="backgroundApp">
        <Stars warp={warp}/>
    </div>

    {#if isContentBoxShow}
        <div class="intro-title" in:fade={{duration: 500}} out:fade={{duration: 300}} >
            <MaterialApp>
                <div class="contentBox" >
                    <div class="infoBox">
                        <h1>Devground in Space</h1>
                        <p>puregramer@gmail.com</p>
                        <Button on:click={enterHandler} class="orange">Enter</Button>
                    </div>
                </div>
            </MaterialApp>
        </div>

    {/if}
    {#if isDevgroundBoxShow}
        <Devground visible={isDevgroundBoxShow}/>
    {/if}



</div>

<style type="text/scss">
    .intro {
        //overflow: hidden;
        position: relative;
        height: 100vh;
        background-color: #000;

        .backgroundApp {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background: #000;

        }

        .intro-title{
            .contentBox {
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                color: #fff;

                .infoBox {
                    height: 75%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    h1 {
                        text-align: center;
                        margin-bottom: 0;
                        font-size: 3em;
                    }

                    p {
                        font-size: 1.5em;
                        text-align: center;
                    }

                    button {
                        flex: 0 0 auto;
                        text-align: center;
                        //margin-bottom: 100px;
                        padding: 10px;
                        background-color: #ff9900;
                    }
                }

            }
        }



    }

</style>