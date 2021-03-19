/*
    create by Charlie 20210309
*/

import Devground from "@components/Devground.svelte";
import Test from "@components/test.svelte";
import "@style/style.css";

const testInstance = new Test({
    target: document.getElementById("appRoot"),
    props: {}
});
/*const DevgroundInstance = new Devground({
    target: document.getElementById("appRoot"),
    props: {}
});*/
// export default DevgroundInstance;

export default testInstance;

