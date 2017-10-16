 var initConentList = document.querySelectorAll(".content-list");
 var settingHeight = document.querySelector("body").offsetHeight - document.querySelector("header").offsetHeight;


 for(var i = 0; i < initConentList.length; i++){
     initConentList[i].style.height = (settingHeight/3) + "px";
 }