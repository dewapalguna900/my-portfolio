const languageFunc = {
    aboutMeTextTranslate: function () {
        const toogleLanguage = document.querySelector("#toogle-language");

        toogleLanguage.addEventListener('click', function () {
            if (this.dataset.status === 'ina') {
                this.dataset.status = 'eng';
                this.innerHTML = `<i class="fas fa-xs fa-toggle-off"></i>`;

                document.querySelector("#language-sign").classList.replace('text-red-600', 'text-blue-600');

                document.querySelector("#about-me #para-1").innerHTML = languageFunc.translatePara1;
                document.querySelector("#about-me #para-2").innerHTML = languageFunc.translatePara2;
                document.querySelector("#about-me #para-3").innerHTML = languageFunc.translatePara3;
            } else {
                this.dataset.status = 'ina';
                this.innerHTML = `<i class="fas fa-xs fa-toggle-on"></i>`;

                document.querySelector("#language-sign").classList.replace('text-blue-600', 'text-red-600');

                document.querySelector("#about-me #para-1").innerHTML = languageFunc.indoPara1;
                document.querySelector("#about-me #para-2").innerHTML = languageFunc.indoPara2;
                document.querySelector("#about-me #para-3").innerHTML = languageFunc.indoPara3;
            }
        });
    },
    indoPara1: "Nama saya I Dewa Gede Palguna. Saya lahir dan besar di Pulau Bali, Indonesia. Dari kecil saya diajarkan untuk disiplin dalam hal apapun. Saat masih Sekolah Dasar, saya ikut beladiri Karate karena terkagum atas teknik Karate yang diperlihatkan oleh Kakek saya. Sejak ikut Karate, saya mulai bisa menerapkan disiplin baik dalam waktu, makanan, latihan maupun belajar.",
    indoPara2: "Singkat cerita, pada SMK saya mengambil jurusan Multimedia dengan tujuan dapat membuat animasi dan game sendiri. Di sini saya kenal dengan pembuatan animasi 2D, animasi 3D, pembuatan video dengan set kamera dan teknik editing videonya, pembuatan desain logo, poster dan lainnya.",
    indoPara3: "Masuk ke jenjang Kuliah, saya mengambil jurusan Sistem Informasi yang mendalami tentang pengembangan software/aplikasi sesuai target market. Di sini saya mendalami Programming, dimulai dari web development, lanjut ke desktop software development sampai ke android development. Pernah juga juara 3 pada Event Kompetisi Programming yang diadakan oleh Kampus. Untuk penelitian Tugas Akhir, saya membahas tentang sistem yang dapat mengelola dan mengorganisir data penduduk di tingkat desa dan kecamatan. Saat Covid-19 terjadi di Indonesia, semua warga disarankan untuk di rumah saja. Selama itu, saya ikut berbagai macam pelatihan online tentang programming yang diadakan oleh IDCamp dari Indosat Ooredoo, Digital Talent Scholarship dari Kementrian Kominfo Indonesia dan beberapa kursus online lainnya yang saya ikuti di Udemy, Sololearn dan lainnya.",
    translatePara1: "My name is I Dewa Gede Palguna. I was born and grow on the Bali Island, Indonesia. From childhood I was taught to be disciplined in any case. When I was in elementary school, I participated in Karate martial arts because amazed by the Karate techniques shown by my grandfather. Since doing Karate, I was able to apply the discipline in terms of time, food, training and study.",
    translatePara2: "Short story, at High School I take Multimedia majority with purpose of being able to create my own animations and games. When this time I start learning about making 2D animation, 3D animation, making video with a camera set and video editing techniques, make design of logo, posters, and others.",
    translatePara3: "Entering College, I take Information Systems as majority that learn about application/software development that meet the requirements of market or clients. In college, I focused to learn about programming, start from web development, then desktop software development, and next to android development. I won 3rd place in the Programming Competition Event held by the Campus. For my final project research, I am developing a system/website that can manage and organize population data on the village and sub-district levels. When Covid-19 happen in Indonesia, all residents were advised to stay at home. Durint that time, I participated in various kinds of programming online course held by IDCamp from Indosat Ooredoo, Digital Talent Scholarship(DTS) from the Government(Kementrian Kominfo Indonesia), and also several other online courses from Udemy, Sololearn, and others."
}

export default languageFunc;