//let limit_speed=55;
/*if(limit_speed>=50){
  document.write("안전속도위반입니다!")
}
document.write("시속" + limit_speed+"km입니다.")*/
let limit_speed=prompt("주행속도 입력");
//null처리
if(limit_speed === null){
  document.write("입력이취소되었습니다.")
}else{
  if(parseInt(limit_speed)>=50){
    document.write("안전속도위반입니다!<br>")
  }else{
    document.write("안전속도준수!<br>")
  }
  document.write("시속" + limit_speed+"km입니다.")
}

