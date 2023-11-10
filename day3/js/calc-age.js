//나이 계산 프로그램
//write()->getElementById().innerHTML


function calcage(){
  let age,birthday;
  const currentyear = 2023;
  birthday=prompt("태어난연도를 입력하세요","YYYY");
  if(birthday==null){
    document.getElementById("print").innerHTML="입력이 취소되었습니다.";
  }else if(isNaN(birthday)){
    document.getElementById("print").innerHTML="숫자를입력해주세요.";
  }else{
    birthday=parseInt(birthday);
    age =currentyear-birthday;
    document.getElementById("print").innerHTML="2023년 현재, "+birthday+
    "년에 태어난사람의 나이는"+age+"세입니다";
  }
}