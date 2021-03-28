/*
    create by Charlie 20210309
*/

import Intro from "@components/Intro.svelte";
import "@style/style.css";

const introInstance = new Intro({
    target: document.getElementById("appRoot"),
    props: {}
});

export default introInstance;


