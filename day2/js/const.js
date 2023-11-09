//상수(constant variable)

let current_year =2023;
current_year=2022;

console.log(current_year);

//상수-재할당 할수 없음
const MONTH=12;
//MONTH=13;

console.log("1년은"+MONTH+"달이 있습니다.");

//원의넓이 계산하기
//circleArea=PI*radius*radius
const PI=3.14;
let radius =4;
let circleArea;

circleArea=PI*radius*radius;

//document.write("원의넓이"+circleArea);

//공의속도를 변환하는 프로그램 작성
//km->mile, 변환상수=1.609, 1mile=1.609km
//마일=킬로미터/1.609
let kph,mph;
const rate_kph_mph=1.609;

kph=prompt("공의속도");

kph-parseFloat(kph);//문자를 실수로 변환

//연산
mph = kph/rate_kph_mph;
//kph = mph*1.609;

//출력-자리수 설정함수:tofixed(자리수)
document.write(kph+"는"+mph.toFixed(2)+"mile입니다.");