//시계 생성
setInterval(myWatch,1000);

function myWatch(){
  const now = new Date();//날짜와 시간이 함께생성
  let time = now.toLocaleTimeString(); //시간만 출력
  console.log(time);

  let watch = document.getElementById("show")
  watch.innerHTML = time;
  watch.style.color="blue";
}

