<script>
    import {onMount} from 'svelte';
    import { MaterialApp, AppBar, Button, Icon, Footer, Menu, ListItem, Card, CardTitle, CardSubtitle, CardActions,
        Divider, Row, Col, Tabs, Tab, Window, WindowItem, Chip, TextField} from 'svelte-materialify';
    import { slide } from 'svelte/transition';
    import { mdiMenu, mdiDevTo, mdiChevronDown, mdiChartArc, mdiDomain, mdiFileCodeOutline, mdiToyBrick,
        mdiTagTextOutline, mdiGithub, mdiCopyright } from '@mdi/js';
    import Prism from 'prismjs';
    Prism.highlightAll();

    import kitImg from "@assets/kit.PNG";
    import pdfForPCImg from "@assets/pdfForPC.PNG";
    import pdfViewerImg from "@assets/pdfViewer.PNG";
    import reactEpubViewerImg from "@assets/reactEpubViewer.PNG";
    import flipEpubViewerImg from "@assets/flipEpubViewer.PNG";
    import wordRacingImg from "@assets/wordRacing.PNG";
    import musicSyncImg from "@assets/musicSync.PNG";
    import hooksQuizImg from "@assets/hooksQuiz.PNG";
    import webcraftImg from "@assets/webcraft.PNG";
    import platformerImg from "@assets/platformer.PNG";

    let theme = 'dark';
    let value = 0;

    const lists = [
        {
            img: kitImg,
            title: "내가 만든 오디오북 KIT",
            subTitle: "Electron 기반 ePub 컨텐츠 기반 오디오북 제작툴",
            // description: "▶ Features <br> - electron <br> - vue <br> - webpack <br> - nodejs",
            featureTag: ["electron", "vue", "webpack", "nodejs"],
            url: "https://www.millie.co.kr/h4/event/myAudioBook/",
            active: false
        },
        {
            img: pdfForPCImg,
            title: "Electron PDF Viewer",
            subTitle: "Electron 기반 WIN/MAC용 PDF 뷰어",
            // description: "▶ Features <br> - electron <br> - vue <br> - pdfjs <br> - webpack <br> - turnjs (migrated ES6) ",
            featureTag: ["electron", "vue", "pdfjs", "webpack", "turnjs(migrated ES6)"],
            url: "https://www.millie.co.kr/customer/app.html?tab=desktop",
            active: false
        },
        {
            img: pdfViewerImg,
            title: "PDF Viewer Library",
            subTitle: "Page Flip 효과가 적용된 PDF 뷰어 라이브러리",
            // description: "▶ Features <br> - ES6+ <br> - pdfjs <br> - webpack <br> - turnjs (migrated ES6) ",
            featureTag: ["ES6+", "pdfjs", "webpack", "turnjs(migrated ES6)"],
            url: "https://puregramer.github.io/pdfViewer/dist/",
            active: false
        },
        {
            img: reactEpubViewerImg,
            title: "React ePub3 Viewer",
            subTitle: "React 기반 ePub3 뷰어",
            // description: "▶ Features <br> - react <br> - redux <br> - greenSock animation platform (gsap) <br> - webpack",
            featureTag: ["react", "redux", "greenSock animation platform(gsap)", "webpack"],
            url: "https://puregramer.github.io/react-epub3-viewer/dist/",
            github: "https://github.com/puregramer/react-epub3-viewer",
            active: false
        },
        {
            img: flipEpubViewerImg,
            title: "ePub3 PageFlip Viewer",
            subTitle: "ES6 기반 PageFlip ePub3 뷰어",
            // description: "▶ Features <br> - ES6 <br> - webpack <br> - turnjs (migrated ES6)",
            featureTag: ["ES6", "webpack", "turnjs(migrated ES6)"],
            url: "https://puregramer.github.io/es6-flip-epub3-viewer/dist/",
            github: "https://github.com/puregramer/es6-flip-epub3-viewer",
            active: false
        },
        {
            img: wordRacingImg,
            title: "React RacingWordGame",
            subTitle: "React 기반 Sprite Animation 워드 게임",
            // description: "▶ Features <br> - react <br> - redux <br> - greenSock animation platform (gsap) <br> - react-responsive-spritesheet <br> - webpack",
            featureTag: ["react", "redux", "greenSock animation platform(gsap)", "react-responsive-spritesheet", "webpack"],
            url: "https://puregramer.github.io/react-racingWordGame/dist/",
            github: "https://github.com/puregramer/react-racingWordGame",
            active: false
        },
        {
            img: musicSyncImg,
            title: "SVG MusicNoteSync",
            subTitle: "SVG 악보 노트 싱크 프로그램",
            // description: "▶ Features <br> - ES6 <br> - webpack",
            featureTag: ["ES6", "webpack"],
            url: "https://puregramer.github.io/svgMusicNoteSync/test/1/02_greensea/02_greensea.html",
            github: "https://github.com/puregramer/svgMusicNoteSync",
            active: false
        },
        {
            img: hooksQuizImg,
            title: "React Hooks QuizGame",
            subTitle: "React Hooks 기반 퀴즈 게임",
            // description: "▶ Features <br> - react <br> - react hooks <br> - greenSock animation platform (gsap) <br> - react-responsive-spritesheet <br> - webpack",
            featureTag: ["react", "react hooks", "greenSock animation platform(gsap)", "react-responsive-spritesheet", "webpack"],
            url: "https://puregramer.github.io/react-hooks-quizGame/",
            github: "https://github.com/puregramer/react-hooks-quizGame",
            active: false
        },
        {
            img: webcraftImg,
            title: "Webcraft",
            subTitle: "[Toy Project] canvas 기반 2D tileMap 고전게임 remake",
            // description: "▶ Features <br> - ES5 <br> - requireJS <br> - a* pathfinder algorithm <br> [마우스 좌 클릭으로 이동, 적 캐릭터 마우스 좌 클릭으로 공격]",
            featureTag: ["ES5", "requireJS", "a* pathfinder algorithm"],
            description: "마우스 좌 클릭으로 이동, 적 캐릭터 마우스 좌 클릭으로 공격",
            url: "https://puregramer.github.io/Webcraft/",
            github: "https://github.com/puregramer/Webcraft",
            active: false
        },
        {
            img: platformerImg,
            title: "Web And Dragon",
            subTitle: "[Toy Project] canvas 기반 2D platformer 게임 분석",
            // description: "▶ Features <br> - ES6 <br> - webpack <br> [방향키로 이동이 가능하며, q(대쉬), w(점프), e(공격) 버튼]",
            featureTag: ["ES6", "webpack"],
            description: "방향키로 이동이 가능하며, q(대쉬), w(점프), e(공격) 버튼",
            url: "https://puregramer.github.io/WebAndDragon/dist/",
            github: "https://github.com/puregramer/WebAndDragon",
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
            <div class="text-subtitle-2" style="display:flex; margin-bottom:7px;">
                <Icon path={mdiChartArc}/>
                <span style="margin-left:5px;">Skills</span>
            </div>
            <Divider/>
            <p>

            </p>
        </WindowItem>
        <WindowItem>
            <div class="text-subtitle-2" style="display:flex; margin-bottom:7px;">
                <Icon path={mdiFileCodeOutline}/>
                <span style="margin-left:5px;">ES6 ToDo List</span>
            </div>
            <Divider/>
            <p>

            </p>
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
                        {:else if i === 8}
                            <div class="text-subtitle-1" style="display:flex; margin-bottom:7px;">
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

    <Footer class="justify-center pa-2" absolute>
       2021 <Icon path={mdiCopyright} size={15}></Icon> puregramer@gmail.com
    </Footer>
</MaterialApp>


<style type="text/scss">


</style>