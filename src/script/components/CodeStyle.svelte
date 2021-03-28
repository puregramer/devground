<script>
    import {onMount} from 'svelte';
    import Prism from 'prismjs';
    onMount(() => {
        Prism.highlightAll();
    });

</script>
<br>
<h2 class="text-h6 mb-3">ES6로 To Do list 만들기</h2>

<h4 class="text-subtitle-1">1. 개발환경 세팅</h4>
<div class="text-body-2 ml-3 mb-1">· git repository 생성</div>
<div class="text-body-2 ml-3">· 프로젝트 폴더 생성 & git 초기화 <kbd>git init</kbd></div>
<div class="text-body-2 ml-3">· repository 연결 <kbd>git remote add origin [repo url]</kbd></div>
<div class="text-body-2 ml-3">· package.json 생성 <kbd>npm init</kbd></div>
<div class="text-body-2 ml-3">· webpack 관련 패키지 설치 및 설정 <kbd>npm i webpack  webpack-cli webpack-dev-server --save-dev</kbd></div>
<div class="text-body-2 ml-3">· babel 관련 패키지 설치 <kbd>npm i @babel/core @babel/preset-env babel-loader --save-dev</kbd></div>
<div class="text-body-2 ml-3">· babel.config.js 생성</div>
<pre class="line-numbers" data-src="https://puregramer.github.io/todo-list/babel.config.js"></pre>
<div class="text-body-2 ml-3">· style 관련 패키지설치 <kbd>npm i css-loader node-sass sass-loader style-loader --save-dev</kbd></div>
<div class="text-body-2 ml-3">·  html-webpack-plugin 설치 <kbd>npm i html-webpack-plugin --save-dev</kbd></div>
<div class="text-body-2 ml-3">· webpack.config.js 생성 및 설정</div>
<pre class="line-numbers" data-src="https://puregramer.github.io/todo-list/webpack.config.js"></pre>
<div class="text-body-2 ml-3">· index.html 생성 </div>
<pre class="line-numbers" data-src="https://puregramer.github.io/todo-list/src/index.html"></pre>
<div class="text-body-2 ml-3">· main.js 생성 </div>
<pre class="line-numbers" data-src="https://puregramer.github.io/todo-list/src/script/main.js"></pre>
<div class="text-body-2 ml-3">· style.scss  생성 </div>
<pre class="line-numbers" data-src="https://puregramer.github.io/todo-list/src/style/style.css"></pre>

<h4 class="text-subtitle-1">2. 클래스 생성</h4>
<div class="text-body-2 ml-3 mb-1">· ToDo class 생성 (UI 렌더링 및 추가/삭제/전체삭제 등 주요기능 담당)</div>
<pre class="line-numbers" data-src="https://puregramer.github.io/todo-list/src/script/Todo.js"></pre>
<div class="text-body-2 ml-3 mb-1">· DOM static class 생성 (DOM 생성 담당)</div>
<pre class="line-numbers" data-src="https://puregramer.github.io/todo-list/src/script/DOM.js"></pre>
<div class="text-body-2 ml-3 mb-1">· Storage class 생성 (localStorage 생성/저장/삭제 담당)</div>
<pre class="line-numbers" data-src="https://puregramer.github.io/todo-list/src/script/Storage.js"></pre>
<h4 class="text-subtitle-1">3. ToDo list 실행</h4>
<iframe src="https://puregramer.github.io/todo-list/dist/" title="todo list demo"></iframe>
<br>
<br>
<br>

<style type="text/scss">

iframe{
  border: 0;
  width: 100%;
  min-height: 300px;
}

</style>