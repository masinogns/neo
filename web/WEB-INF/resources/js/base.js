
//------밑에 코드 메뉴 토글 동작코드

var menuModalList = document.querySelector(".menu-modal-list");
var menuModal = document.querySelector(".menu-modal");
var menuBtn = document.querySelector(".menu-item");



menuBtn.addEventListener('click',function(e){
    menuModal.style.height = "calc(100vh - 10rem)"
},false);

menuModal.addEventListener('click',function(e){
    if(e.target.className == "menu-modal")
        menuModal.style.height = "0px"
},true)


function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'ko', includedLanguages: 'ko,zh-CN', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}


var btnModal = document.getElementById('btn-modal');
var modal = document.getElementById('modal');
var btnClose = document.getElementById('close');

btnModal.addEventListener("click", function(){
    console.log("modal button is clicked");
    modal.style.display = "block";
});

btnClose.addEventListener("click", function(){
    console.log("close button is clicked");
    modal.style.display = "none";
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var home = document.getElementById('home');
// var close = document.getElementsByTagName('iframe')[0].contentWindow.document.getElementsByClassName("goog-close-link").

home.addEventListener("click", function(){
    console.log("close button is clicked");
    // close.
});
