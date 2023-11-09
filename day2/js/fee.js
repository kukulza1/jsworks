//fee.js

let age=prompt("나이입력");
let fee=0;

if(age>=1 && age<8){
  document.write("취학전아동입니다.<br>")
  fee=1000;
}else if(age>=8 && age<15){
  document.write("초등학생입니다.<br>")
  fee=1500; 
}else if(age>=15 && age<20){
  document.write("중.고등학생입니다.<br>")
  fee=2000;
}else{
  document.write("성인입니다.<br>")
  fee=3000;
}
document.write("입장료는<span class='accent'>"+fee+"</span>원입니다.")