
//array 객체를 사용한 배열
let num = new Array(); //긴배열 생성
console.log(num);
console.log(num.length+"개")

//저장(입력)
num[0] = 10;
num[1] = 20;
num[2] = 30;

console.log(num);

//특정 요소 1개 조회
console.log(num[0]);

//수정
num[1]=40;

//전체요소 조회
for(let i=0; i<num.length; i++){
   document.write(num[i]);
}

document.write("<br>")
//for in 문 사용
for(let i in num){
   document.write(num[i]+ " ");
}


//인덱스로연산
console.log(num[1]-num[2]);
console.log(num[1]<=num[2]);

let suma =0;
let avg
//합계,평균
for(let i=0; i<num.length; i++){
   suma = suma+num[i];
   //suma += num[i];
   
}
avg = (suma/num.length);

console.log(suma);
console.log(avg.toFixed(2));






























