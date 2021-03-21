/*
    create by Charlie 20210309
*/

import Devground from "@components/Devground.svelte";
import "@style/style.css";

const DevgroundInstance = new Devground({
    target: document.getElementById("appRoot"),
    props: {}
});
export default DevgroundInstance;


