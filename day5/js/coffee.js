let bigpic=document.querySelector("#pic");
     let smallpics =document.querySelectorAll(".small");

     for(let i=0;i<smallpics.length;i++){
      smallpics[i].onclick=function(){
      bigpic.setAttribute("src",this.src);}
     }

     let view= document.querySelector("#view");//상세설명보기
     let detail= document.querySelector("#detail");//상세설명보기
     let sw = true;

     view.onclick = function(){
        if(sw){
        detail.style.display="block";
        view.innertext="상세설명닫기";
        sw=false;
        }else{
          detail.style.display="none";
          view.innertext="상세설명보기";
          sw=true;
        }
     }