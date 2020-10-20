import "./css/style.css";
import loadPageObjects from "./script/load-page.js";
import toogleNav from "./script/toogle-nav.js";

document.addEventListener("DOMContentLoaded", function () {
    toogleNav.toogleNavMenu();

    loadPageObjects.checkFirstLoad();
    loadPageObjects.loadClickedPage();
});
