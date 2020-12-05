document.querySelector(".open-links").addEventListener("click",function(){
    document.querySelector(".overlay").style.height = "100%";
    document.querySelector("body").style.overflow = "hidden";
  });
  
  document.querySelector(".close-links").addEventListener("click",function(){
    document.querySelector(".overlay").style.height = 0;
    document.querySelector("body").style.overflow = "visible";
  });