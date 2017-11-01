
/* slider url
https://www.w3schools.com/howto/howto_js_rangeslider.asp*/



var content = document.querySelector(".content");

var tag = document.querySelector(".nav");
tag.addEventListener('click', activeNav);

function activeNav(e){
  var findIndexOfActive = 0;

  for (var i = 0; i < tag.childElementCount; i++) {
    if (tag.children[i].className == "active") {
      findIndexOfActive = i;
    }
  }

  var target = e.target;
  var parent = e.target.parentNode;

  if (target.className == "map") {
    console.log("map is clicked");
    content.children["list"].style.height = "0";
    content.children["map"].style.height = "100%";

  }else { // if target == enter
    console.log("list is clikced");
    content.children["list"].style.height = "100%";
    content.children["map"].style.height = "0px";
  }

  changeActive(parent, findIndexOfActive);
}

function changeActive(parent, index){
  tag.children[index].className = "";
  parent.className = "active";
}
