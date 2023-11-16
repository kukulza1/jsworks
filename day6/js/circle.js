
//원의둘레=2*pi*반지름
//원의면적=pi*반지름*반지름

function Circle(radius){
  this.radius=radius;

  this.length=function(){
    return 2*Math.PI*this.radius;
  }

  //원의 면적을 계산하는 함수정의
  this.myun=function(){
    return Math.PI*this.radius*this.radius;
  }
}

//원 1개 생성
let c1 =new Circle(4);
document.write("둘레"+c1.length().toFixed(2)+"cm<br>"); 
document.write("넓이"+c1.myun().toFixed(2)+"cm<sup>2<br>");