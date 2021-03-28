<script>
    import { MaterialApp, Button } from 'svelte-materialify';
    import Stars from './Stars/Stars.svelte';
    import Devground from "./Devground.svelte";

    let warp = 0;
    let isContentBoxShow = true;

    function enterHandler() {
        warp = 1;

        setTimeout(() => {
            warp = 0;
            isContentBoxShow = false;
        }, 3000);
    }

</script>

<div class="intro">
    <div class="backgroundApp">
        <Stars warp={warp}/>
    </div>
    <div style={isContentBoxShow ? 'display:block;': 'display:none;'}>
        <MaterialApp>
            <div class="contentBox" >
                <div class="infoBox">
                    <h1>Devground in Space</h1>
                    <p>puregramer@gmail.com</p>
                    <Button on:click={enterHandler} class="orange">Enter</Button>
                </div>
            </div>
        </MaterialApp>
    </div >
    <Devground visible={!isContentBoxShow}/>
</div>

<style type="text/scss">
    .intro {
        //overflow: hidden;
        position: relative;
        height: 100vh;

        .backgroundApp {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background: #000;

        }

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

</style>