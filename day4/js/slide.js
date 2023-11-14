//이미지 슬라이드
window.onload=function(){

  let picture = ["img/cup-8.jpg","img/cup-7.jpg","img/cup-6.jpg"];

  let i= 0;
 showSlide();

  function showSlide(){
    document.getElementById("pic").src=picture[i];    
    i++
    if(i == picture.length){ i=0;}
  
    setTimeout(showSlide,2000);
  }
  



}