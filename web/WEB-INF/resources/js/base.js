var mainTitle = document.querySelector(".title");
var menuIcon = document.querySelector(".menu-item");
var mainTitleBox = document.querySelector(".main-title");

var initConentList = document.querySelectorAll(".content-list");
var settingHeight = document.querySelector("body").offsetHeight - document.querySelector("header").offsetHeight;

mainTitle.style.paddingTop = (mainTitleBox.offsetHeight/2 - mainTitle.offsetHeight/2) + "px";
menuIcon.style.marginTop = (mainTitleBox.offsetHeight/2 - menuIcon.offsetHeight/2) + "px";


 for(var i = 0; i < initConentList.length; i++){
     initConentList[i].style.height = (settingHeight/3) + "px";
 }

