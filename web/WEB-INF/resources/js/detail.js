
/* slider url
 https://www.w3schools.com/howto/howto_js_rangeslider.asp*/



var content = document.querySelector(".content");
var tag = document.querySelector(".nav");

tag.addEventListener('click', activeNav);

function activeNav(e){
    var findIndexOfActive = 0;

    for (var i = 0; i < tag.childElementCount; i++) {
        if (tag.children[i].className == "activeB") {
            findIndexOfActive = i;
        }
    }

    var target = e.target;
    var parent = e.target.parentNode;

    if (target.className == "map") {
        console.log("map is clicked");
        content.children["list"].style.overflow = "hidden";
        content.children["list"].style.height = "0";
        content.children["map"].style.height = "100%";

    }else { // if target == enter
        console.log("list is clikced");
        content.children["list"].style.overflow = "scroll";
        content.children["list"].style.height = "auto";
        content.children["map"].style.height = "0px";
    }

    changeActive(parent, findIndexOfActive);
}

function changeActive(parent, index){
    tag.children[index].className = "";
    parent.className = "activeB";
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'ko', includedLanguages: 'ko,zh-CN', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}
