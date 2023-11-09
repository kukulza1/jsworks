
while(true){
  let key=prompt("반복하시겠습니까?");
  if(key == 'y'|| key == 'Y'){
    alert("계속반복합니다");
  }else if(key=='n'|| key =='N'){
    alert("반복중단");
    break;
  }else{
    alert("지원하지않는 키입니다.");
   
  }
  document.write("프로그램을 종료합니다");
}