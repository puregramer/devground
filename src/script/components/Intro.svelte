<script>
    import Stars from './Stars/Stars.svelte';
</script>

<div class="intro">
    <div class="backgroundApp">
        <Stars />
    </div>

    <div class="contentBox">
        <div class="infoBox">
            <h1>Devground</h1>
            <p>puregramer@gmail.com</p>
            <button>Enter</button>
        </div>
    </div>

</div>

<style type="text/scss">
    .intro {
        overflow: hidden;
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
                    margin-bottom: 100px;
                }
            }

        }

    }

</style>