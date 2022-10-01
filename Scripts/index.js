window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".logo img").style.height = "32px";
    document.querySelector(".logo img").style.width = "320px";
    document.querySelector(".logo img").style.margin = "0 0 50px 0 ";
    document.querySelector(".sbmenu").style.width = "1080px";
    document.querySelector(".sbmenu").style.height = "21px";
    document.querySelector("#header").style.height = "100px";
   
  } else {
    document.querySelector(".logo img").style.width = "360px";
    document.querySelector(".logo img").style.height = "40px";
    document.querySelector(".sbmenu").style.width = "1110px";
    document.querySelector("#header").style.height = "110px";
  }
}