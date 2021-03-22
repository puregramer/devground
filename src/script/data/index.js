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

export const lists = [
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