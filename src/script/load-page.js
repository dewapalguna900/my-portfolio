import Photo from "./../assets/photo.png";
import languageFunc from "./language-func.js";
import tailwindAlert from "./tailwind-alert.js";

const loadPageObjects = {
    loadPage: function (page) {
        fetch(`pages/${page}.html`)
            .then(response => {
                if (response.status === 404) {
                    tailwindAlert('Halaman tidak ditemukan.');
                    return false;
                }

                return response.text();
            })
            .then(responseText => {
                document.querySelector('#body-content').innerHTML = responseText;
                if (page === 'home') {
                    document.querySelector("#profile-img").src = Photo;
                }
                else if (page === 'about') {
                    languageFunc.aboutMeTextTranslate();
                }
            })
            .catch(err => console.log(err));
    },
    checkFirstLoad: function () {
        let page = window.location.hash.substr(1);
        const pagesUrl = ['home', 'skill', 'education', 'about'];
        if (page === "" || !pagesUrl.includes(page)) {
            page = "home";
        }
        loadPageObjects.loadPage(page);
    },
    loadClickedPage: function () {
        document.querySelectorAll(".nav-item").forEach(navElm => {
            navElm.addEventListener('click', function (event) {
                const pageSelected = this.getAttribute('href').substr(1);
                loadPageObjects.loadPage(pageSelected);
                document.querySelector('#btn-navigation').click();
            })
        })
    }
}

export default loadPageObjects;