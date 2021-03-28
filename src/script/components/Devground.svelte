<script>
    import {onMount} from 'svelte';
    import {
        MaterialApp, AppBar, Button, Icon, Footer, Menu, ListItem, Card, CardTitle, CardSubtitle, CardActions,
        Divider, Row, Col, Tabs, Tab, Window, WindowItem, Chip, TextField
    } from 'svelte-materialify';
    import {slide, fade, fly} from 'svelte/transition';
    import {
        mdiMenu, mdiDevTo, mdiChevronDown, mdiChartArc, mdiDomain, mdiFileCodeOutline, mdiToyBrick,
        mdiTagTextOutline, mdiGithub, mdiCopyright
    } from '@mdi/js';
    import {lists} from "@script/data";
    import CodeStyle from "./CodeStyle.svelte";
    import Status from "./Status.svelte";

    export let visible;
    let theme = 'dark black';
    let value = 0;

    function toggle(idx) {
        console.log(idx);
        lists[idx].active = !lists[idx].active;
    }

    function openLink(url) {
        console.log("openLink: ", url);
        window.open(url);
    }

    function refresh() {
        window.location.reload();
    }

    onMount(() => {

    });

</script>

{#if visible}
<div class="devground-box" in:fly={{y: -100, duration: 800}} out:fade={{duration: 300}}>
    <MaterialApp {theme}>
        <AppBar flat="true">
            <div slot="icon">
                <Button fab depressed on:click={refresh}>
                    <Icon path={mdiDevTo} class="orange-text"/>
                </Button>
            </div>
            <span slot="title">Devground</span>
            <div style="flex-grow:1" />
            <div slot="extension">
                <Tabs class="green-text" bind:value fixedTabs>
                    <div slot="tabs">
                        <Tab>Status</Tab>
                        <Tab>Code Style</Tab>
                        <Tab>Projects</Tab>
                    </div>
                </Tabs>
            </div>
            <Menu right>
                <div slot="activator">
                    <Button fab depressed>
                        <Icon path={mdiMenu} />
                    </Button>
                </div>
                <ListItem on:click={()=>openLink('https://github.com/puregramer/devground')}><div class="text-overline"><Icon path={mdiGithub}/> github</div></ListItem>
            </Menu>
        </AppBar>
        <Window {value} class="ma-4">
            <WindowItem>
               <Status/>
            </WindowItem>
            <WindowItem>
                <div class="text-subtitle-2" style="display:flex; margin-bottom:7px;">
                    <Icon path={mdiFileCodeOutline}/>
                    <span style="margin-left:5px;">ES6 ToDo List</span>
                </div>
                <Divider/>
                <CodeStyle/>
            </WindowItem>
            <WindowItem>
                <div class="d-flex justify-center mt-4 mb-4">
                    <div class="pa-4" style="flex-grow:1; max-width:700px;">
                        {#each lists as list, i}
                            {#if i === 0}
                                <div class="text-subtitle-1" style="display:flex; margin-bottom:7px;">
                                    <Icon path={mdiDomain}/>
                                    <span style="margin-left:5px;">Company Projects</span>
                                </div>
                                <Divider/>
                            {:else if i === 9}
                                <div class="text-subtitle-1" style="display:flex; margin-top:30px; margin-bottom:7px;">
                                    <Icon path={mdiToyBrick}/>
                                    <span style="margin-left:5px;">Toy Projects</span>
                                </div>
                                <Divider/>
                            {/if}

                            <Card>
                                <Row>
                                    <Col>
                                        <img src={list.img} alt="img" />
                                        <CardTitle>{list.title}</CardTitle>
                                        <CardSubtitle>{list.subTitle}</CardSubtitle>
                                        <CardActions>
                                            <Button text on:click={() => openLink(list.url)} class="orange">demo</Button>
                                            <Button text fab size="small" class="ml-auto" on:click={() =>  toggle(i)}>
                                                <Icon path={mdiChevronDown} rotate={list.active ? 180 : 0} />
                                            </Button>
                                        </CardActions>
                                        {#if list.active}
                                            <div transition:slide>
                                                <Divider />
                                                <div class="pl-4 pr-4 pt-2 pb-2">
                                                    <div class="text-overline"><Icon path={mdiTagTextOutline}/> Features</div>
                                                    {#each list.featureTag as feature, i}
                                                        <Chip label class="ma-2 primary-color">{feature}</Chip>
                                                    {/each}
                                                    {#if list.github}
                                                        <br>
                                                        <div class="text-overline"><Icon path={mdiGithub}/> Github</div>
                                                        <a href={list.github} target="_blank" class="text-decoration-none">{list.github}</a>
                                                    {/if}
                                                    {#if list.description}
                                                        <br><br>
                                                        <TextField readonly filled value={list.description}>Description</TextField>
                                                    {/if}

                                                </div>
                                            </div>
                                        {/if}

                                    </Col>
                                </Row>
                            </Card>
                            <br />
                        {/each}
                    </div>
                </div>

            </WindowItem>
        </Window>

        <Footer class="justify-center pa-2">
           2021 <Icon path={mdiCopyright} size={15}></Icon> puregramer@gmail.com
        </Footer>
    </MaterialApp>
</div>
{/if}

<style type="text/scss">
    .devground-box {
    }
</style>