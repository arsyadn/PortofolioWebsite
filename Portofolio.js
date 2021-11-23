const pekerjaan = ['Laboratory Asistant at Gunadarma University', 'bachelor degree on Informatics Engineering at Gunadarma University'];

let count = 0;
let textIndex = 0;
let currentText = '';
let words = '';

(function efekBannerNgetik(){
    if(count == pekerjaan.length){
        count = 0;
    }

    currentText = pekerjaan[count];

    words = currentText.slice(0, ++textIndex);
    document.querySelector('.typeeffect').textContent = words;

    if(words.length == currentText.length){
        count++;
        textIndex = 0;
    }

    setTimeout(efekBannerNgetik, 200)


})();