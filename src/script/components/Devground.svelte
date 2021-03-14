<script>
    import {onMount} from 'svelte';
    import { MaterialApp, AppBar, Button, Icon, Footer, Menu, ListItem, Card, CardTitle, CardSubtitle, CardActions, Divider, Row, Col, } from 'svelte-materialify';
    import { slide } from 'svelte/transition';
    import { mdiMenu, mdiDevTo, mdiChevronDown } from '@mdi/js';
    let theme = 'dark';


    const lists = [
        {
            img: "",
            title: "테스트입니다11",
            subTitle: "부제입니다",
            description: "설명입니다~~~~~",
            url: "www.naver.com",
            active: false
        },
        {
            img: "",
            title: "테스트입니다22",
            subTitle: "부제입니다",
            description: "설명입니다~~~~~",
            url: "www.naver.com",
            active: false
        },
        {
            img: "",
            title: "테스트입니다33",
            subTitle: "부제입니다",
            description: "설명입니다~~~~~",
            url: "www.naver.com",
            active: false
        },
    ];

    function toggle(idx) {
        console.log(idx);
        lists[idx].active = !lists[idx].active;
    }

    onMount(() => {

    });

</script>

<MaterialApp {theme}>
    <AppBar flat="true">
        <div slot="icon">
            <Button fab depressed>
                <Icon path={mdiDevTo} class="orange-text"/>
            </Button>
        </div>
        <span slot="title">Devground</span>
        <div style="flex-grow:1" />
        <Menu right>
            <div slot="activator">
                <Button fab depressed>
                    <Icon path={mdiMenu} />
                </Button>
            </div>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
        </Menu>
    </AppBar>
    <div class="d-flex justify-center mt-4 mb-4">
        <div class="pa-4" style="flex-grow:1; max-width:700px;">
        {#each lists as list, i}
            <Card>
                <Row>
                    <Col>
                        <CardTitle>{list.title}</CardTitle>
                        <CardSubtitle>{list.subTitle}</CardSubtitle>
                        <CardActions>
                            <Button text>demo</Button>
                            <Button text fab size="small" class="ml-auto" on:click={() =>  toggle(i)}>
                                <Icon path={mdiChevronDown} rotate={list.active ? 180 : 0} />
                            </Button>
                        </CardActions>
                        {#if list.active}
                            <div transition:slide>
                                <Divider />
                                <div class="pl-4 pr-4 pt-2 pb-2">
                                    {list.description}
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
    <Footer class="justify-center pa-2" absolute>
        puregramer@gmail.com
    </Footer>
</MaterialApp>


<style type="text/scss">


</style>