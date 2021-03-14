<script>
    import {onMount} from 'svelte';
    import { MaterialApp, AppBar, Button, Icon, Footer, Menu, ListItem, Card, CardTitle, CardSubtitle, CardActions, Divider, Row, Col, } from 'svelte-materialify';
    import { slide } from 'svelte/transition';
    import { mdiMenu, mdiDevTo, mdiChevronDown } from '@mdi/js';

    import kitImg from "@assets/kit.PNG";
    import pdfViewerImg from "@assets/pdfViewer.PNG";
    import reactEpubViewerImg from "@assets/reactEpubViewer.PNG";
    import flipEpubViewerImg from "@assets/flipEpubViewer.PNG";
    import wordRacingImg from "@assets/wordRacing.PNG";
    import musicSyncImg from "@assets/musicSync.PNG";
    import hooksQuizImg from "@assets/hooksQuiz.PNG";
    import webcraftImg from "@assets/webcraft.PNG";
    import platformerImg from "@assets/platformer.PNG";

    let theme = 'dark';



    const lists = [
        {
            img: kitImg,
            title: "내가 만든 오디오북 KIT",
            subTitle: "ePub 컨텐츠 기반 오디오북 제작툴",
            description: "▶ Features <br> - electron <br> - vue <br> - webpack <br> - nodejs",
            url: "https://www.millie.co.kr/h4/event/myAudioBook/",
            active: false
        },
        {
            img: pdfViewerImg,
            title: "PDF Viewer Library",
            subTitle: "Page Flip 효과가 적용된 PDF 뷰어 라이브러리",
            description: "▶ Features <br> - ES6+ <br> - pdfjs <br> - webpack <br> - turnjs (migrated ES6) ",
            url: "https://puregramer.github.io/pdfViewer/dist/",
            active: false
        },
        {
            img: reactEpubViewerImg,
            title: "React ePub3 Viewer",
            subTitle: "React 기반 ePub3 뷰어",
            description: "▶ Features <br> - react <br> - redux <br> - greenSock animation platform (gsap) <br> - webpack",
            url: "https://puregramer.github.io/react-epub3-viewer/dist/",
            active: false
        },
        {
            img: flipEpubViewerImg,
            title: "ePub3 PageFlip Viewer",
            subTitle: "ES6 기반 PageFlip ePub3 뷰어",
            description: "▶ Features <br> - ES6 <br> - webpack <br> - turnjs (migrated ES6)",
            url: "https://puregramer.github.io/es6-flip-epub3-viewer/dist/",
            active: false
        },
        {
            img: wordRacingImg,
            title: "React RacingWordGame",
            subTitle: "React 기반 Sprite Animation 워드 게임",
            description: "▶ Features <br> - react <br> - redux <br> - greenSock animation platform (gsap) <br> - react-responsive-spritesheet <br> - webpack",
            url: "https://puregramer.github.io/react-racingWordGame/dist/",
            active: false
        },
        {
            img: musicSyncImg,
            title: "SVG MusicNoteSync",
            subTitle: "SVG 악보 노트 싱크 프로그램",
            description: "▶ Features <br> - ES6 <br> - webpack",
            url: "https://puregramer.github.io/svgMusicNoteSync/test/1/02_greensea/02_greensea.html",
            active: false
        },
        {
            img: hooksQuizImg,
            title: "React Hooks QuizGame",
            subTitle: "React Hooks 기반 퀴즈 게임",
            description: "▶ Features <br> - react <br> - react hooks <br> - greenSock animation platform (gsap) <br> - react-responsive-spritesheet <br> - webpack",
            url: "https://puregramer.github.io/react-hooks-quizGame/",
            active: false
        },
        {
            img: webcraftImg,
            title: "Webcraft",
            subTitle: "[Toy Project] canvas 기반 2D tileMap 고전게임 복원",
            description: "▶ Features <br> - ES5 <br> - requireJS <br> - a* pathfinder algorithm <br> [마우스 좌 클릭으로 이동, 적 캐릭터 마우스 좌 클릭으로 공격]",
            url: "https://puregramer.github.io/Webcraft/",
            active: false
        },
        {
            img: platformerImg,
            title: "Web And Dragon",
            subTitle: "[Toy Project] canvas 기반 2D platformer 게임 분석",
            description: "▶ Features <br> - ES6 <br> - webpack <br> [방향키로 이동이 가능하며, q(대쉬), w(점프), e(공격) 버튼]",
            url: "https://puregramer.github.io/WebAndDragon/dist/",
            active: false
        },
    ];

    function toggle(idx) {
        console.log(idx);
        lists[idx].active = !lists[idx].active;
    }

    function openLink(url) {
        console.log("openLink: ", url);
        window.open(url);
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
                                    {@html list.description}
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