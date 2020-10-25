import Photo from "./../assets/photo.png";
import languageFunc from "./language-func.js";
import tailwindAlert from "./tailwind-alert.js";

const loadPageObjects = {
    navUrl: ['home', 'skill', 'education', 'about', 'works'],
    loadPage: function (page) {
        fetch(`pages/${page}.html`)
            .then(response => {
                if (response.status === 404) {
                    tailwindAlert('Permintaan diluar jangkauan.');
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
                else if (page === '404') {
                    tailwindAlert('Halaman tidak ditemukan');

                    loadPageObjects.loadPageNotFound();
                }
            })
            .catch(err => console.log(err));
    },
    checkFirstLoad: function () {
        let page = window.location.hash.substr(1);

        page = loadPageObjects.checkurl(page);

        loadPageObjects.loadPage(page);
    },
    checkurl: function (url) {
        let result = url;
        if (url === "") {
            result = "home";
        } else if (!loadPageObjects.navUrl.includes(url)) {
            result = "404";
        }

        return result;
    },
    loadClickedPage: function () {
        document.querySelectorAll(".nav-item").forEach(navElm => {
            navElm.addEventListener('click', function (event) {
                let pageSelected = this.getAttribute('href').substr(1);

                pageSelected = loadPageObjects.checkurl(pageSelected);

                loadPageObjects.loadPage(pageSelected);
                document.querySelector('#btn-navigation').click();
            })
        })
    },
    loadPageNotFound: function () {
        document.querySelector("#back-home").addEventListener("click", function (event) {
            event.preventDefault();

            const homeButton = document.querySelector("#nav-items ul li:first-child a");
            homeButton.setAttribute('href', '#home');
            homeButton.click();

            document.querySelector('#btn-navigation').click();
        });
    }
}

export default loadPageObjects;