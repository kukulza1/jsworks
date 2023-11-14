//인사말이 2초간격으로 변경되게
//콜백함수 기능 - 자기가 자신을 부르는 재귀적용법
window.onload=function(){//script가
let message=["오늘도 좋은 하루!!","goodluck!","잘지내?"];


let i=0;
myGreeting();//

function myGreeting(){
  let msg = document.getElementById("demo")
   msg.innerHTML = message[i];
   msg.style.color="blue";
  i++
  if(i == message.length){ i=0;}

  setTimeout(myGreeting,2000);
}

}



