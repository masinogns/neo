var mainTitle = document.querySelector(".title");
var menuIcon = document.querySelector(".menu-item");
var mainTitleBox = document.querySelector(".main-title");

var initConentList = document.querySelectorAll(".content-list");
var settingHeight = document.querySelector("body").offsetHeight - document.querySelector("header").offsetHeight;

//--------밑에 메뉴 3등분으로 나누는 코드

mainTitle.style.paddingTop = (mainTitleBox.offsetHeight/2 - mainTitle.offsetHeight/2) + "px";
menuIcon.style.marginTop = (mainTitleBox.offsetHeight/2 - menuIcon.offsetHeight/2) + "px";


 for(var i = 0; i < initConentList.length; i++){
     initConentList[i].style.height = (settingHeight/3) + "px";
 }

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
