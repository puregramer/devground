import kitImg from "@assets/kit.png";
import pdfForPCImg from "@assets/pdfForPC.PNG";
import pdfViewerImg from "@assets/pdfViewer.PNG";
import reactEpubViewerImg from "@assets/reactEpubViewer.PNG";
import flipEpubViewerImg from "@assets/flipEpubViewer.PNG";
import wordRacingImg from "@assets/wordRacing.PNG";
import musicSyncImg from "@assets/musicSync.PNG";
import hooksQuizImg from "@assets/hooksQuiz.PNG";
import webcraftImg from "@assets/webcraft.PNG";
import platformerImg from "@assets/platformer.PNG";
import brandImg from "@assets/brand.PNG";

export const lists = [
    {
        img: kitImg,
        title: "내가 만든 오디오북 KIT",
        subTitle: "Electron 기반 ePub 컨텐츠 오디오북 제작툴",
        // description: "▶ Features <br> - electron <br> - vue <br> - webpack <br> - nodejs",
        featureTag: ["electron", "vuejs", "webpack", "nodejs"],
        url: "https://www.millie.co.kr/h4/event/myAudioBook/",
        active: true
    },
    {
        img: pdfForPCImg,
        title: "Electron PDF Viewer",
        subTitle: "Electron 기반 WIN/MAC용 PDF 뷰어",
        // description: "▶ Features <br> - electron <br> - vue <br> - pdfjs <br> - webpack <br> - turnjs (migrated ES6) ",
        featureTag: ["electron", "vuejs", "pdfjs", "webpack", "turnjs(migrated ES6)"],
        url: "https://www.millie.co.kr/customer/app.html?tab=desktop",
        active: true
    },
    {
        img: brandImg,
        title: "브랜드 페이지",
        subTitle: "인터렉션 브랜드 페이지",
        // description: "▶ Features <br> - electron <br> - vue <br> - webpack <br> - nodejs",
        featureTag: ["ES6", "webpack", "animejs", "lax.js"],
        url: "https://www.devground.co.kr/brand/",
        active: true
    },
    {
        img: pdfViewerImg,
        title: "PDF Viewer Library",
        subTitle: "Page Flip 효과가 적용된 PDF 뷰어 라이브러리",
        // description: "▶ Features <br> - ES6+ <br> - pdfjs <br> - webpack <br> - turnjs (migrated ES6) ",
        featureTag: ["ES6+", "pdfjs", "webpack", "turnjs(migrated ES6)"],
        url: "https://puregramer.github.io/pdfViewer/dist/",
        active: true
    },
    {
        img: reactEpubViewerImg,
        title: "React ePub3 Viewer",
        subTitle: "React 기반 ePub3 뷰어",
        // description: "▶ Features <br> - react <br> - redux <br> - greenSock animation platform (gsap) <br> - webpack",
        featureTag: ["react", "redux", "greenSock animation platform(gsap)", "webpack"],
        url: "https://puregramer.github.io/react-epub3-viewer/dist/",
        github: "https://github.com/puregramer/react-epub3-viewer",
        active: true
    },
    {
        img: flipEpubViewerImg,
        title: "ePub3 PageFlip Viewer",
        subTitle: "ES6 기반 PageFlip ePub3 뷰어",
        // description: "▶ Features <br> - ES6 <br> - webpack <br> - turnjs (migrated ES6)",
        featureTag: ["ES6", "webpack", "turnjs(migrated ES6)"],
        url: "https://puregramer.github.io/es6-flip-epub3-viewer/dist/",
        github: "https://github.com/puregramer/es6-flip-epub3-viewer",
        active: true
    },
    {
        img: wordRacingImg,
        title: "React RacingWordGame",
        subTitle: "React 기반 Sprite Animation 워드 게임",
        // description: "▶ Features <br> - react <br> - redux <br> - greenSock animation platform (gsap) <br> - react-responsive-spritesheet <br> - webpack",
        featureTag: ["react", "redux", "greenSock animation platform(gsap)", "react-responsive-spritesheet", "webpack"],
        url: "https://puregramer.github.io/react-racingWordGame/dist/",
        github: "https://github.com/puregramer/react-racingWordGame",
        active: true
    },
    {
        img: musicSyncImg,
        title: "SVG MusicNoteSync",
        subTitle: "SVG 악보 노트 싱크 프로그램",
        // description: "▶ Features <br> - ES6 <br> - webpack",
        featureTag: ["ES6", "webpack"],
        url: "https://puregramer.github.io/svgMusicNoteSync/test/1/02_greensea/02_greensea.html",
        github: "https://github.com/puregramer/svgMusicNoteSync",
        active: true
    },
    {
        img: hooksQuizImg,
        title: "React Hooks QuizGame",
        subTitle: "React Hooks 기반 퀴즈 게임",
        // description: "▶ Features <br> - react <br> - react hooks <br> - greenSock animation platform (gsap) <br> - react-responsive-spritesheet <br> - webpack",
        featureTag: ["react", "react hooks", "greenSock animation platform(gsap)", "react-responsive-spritesheet", "webpack"],
        url: "https://puregramer.github.io/react-hooks-quizGame/",
        github: "https://github.com/puregramer/react-hooks-quizGame",
        active: true
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
        active: true
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
        active: true
    },

];

export const chartData = {
    "chart": {
        "caption": "Skill Stack",
        "subCaption": "프로젝트에 사용했었던 스킬들",
        "subcaptionFontSize": "12",
        "subcaptionFontColor": "555",
        "captionFontSize": "15",
        "captionFontColor": "777",
        "captionFontBold": "1",
        "showValues": "0",
        "showPercentInTooltip": "0",
        // "numbersuffix": "%",
        "enableMultiSlicing": "1",
        "theme": "candy",
        "bgColor": "#000",
        "bgAlpha": "90",
        "labelFontColor": "fff",
        "labelFontSize": "11",
        "labelFontBold": "1",
        "labelAlpha": "70"
    },
    "data": [
        {
            "label": "ES6+",
            "value": "50"
        },
        {
            "label": "ES5",
            "value": "10"
        },
        {
            "label": "Nodejs",
            "value": "20"
        },
        {
            "label": "ASP",
            "value": "10"
        },
        {
            "label": "Vuejs",
            "value": "30"
        },
        {
            "label": "React",
            "value": "15"
        },
        {
            "label": "React Hooks",
            "value": "10"
        },
        {
            "label": "Electron",
            "value": "20"
        },
        {
            "label": "Angularjs 1",
            "value": "5"
        },
        {
            "label": "Svelte",
            "value": "15"
        },
        {
            "label": "Gulp",
            "value": "10"
        },
        {
            "label": "Webpack",
            "value": "20"
        },
        {
            "label": "MongoDB",
            "value": "5"
        },
        {
            "label": "NeDB",
            "value": "15"
        },
        {
            "label": "MSSQL",
            "value": "10"
        }
    ]
};

export const chartLearningData = {
    "chart": {
        "caption": "Learing Skills",
        "subCaption": "현재 습득중인 스킬들",
        "subcaptionFontSize": "12",
        "subcaptionFontColor": "555",
        "captionFontSize": "15",
        "captionFontColor": "777",
        "captionFontBold": "1",
        "showValues": "0",
        "showPercentInTooltip": "0",
        "enableMultiSlicing": "1",
        "theme": "candy",
        "bgColor": "#000",
        "bgAlpha": "90",
        "labelFontColor": "fff",
        "labelFontSize": "11",
        "labelFontBold": "1",
        "labelAlpha": "70"
    },
    "data": [
        {
            "label": "Svelte",
            "value": "30"
        },
        {
            "label": "React Native",
            "value": "30"
        },
        {
            "label": "GraphQL",
            "value": "25"
        },
        {
            "label": "Apollo",
            "value": "10"
        },
        {
            "label": "Prisma",
            "value": "15"
        },
        {
            "label": "Expo",
            "value": "10"
        },
        {
            "label": "PostgreSQL",
            "value": "5"
        },
        {
            "label": "TypeScript",
            "value": "10"
        }
    ]
};
