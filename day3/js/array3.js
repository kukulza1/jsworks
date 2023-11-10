//1~10자연수 저장
let n1 = new Array(10);

console.log(n1.length);

//저장
//n1=[1,2,3,4,5,6,7,8,9,10];

for(let i=0; i<10;i++){
  n1[i]=i+1;
}

for(let i=0; i<n1.length;i++){
  document.write(n1[i]+" ");
}
document.write("<br>")
for(let num in n1){
  document.write(n1[num]+" ");
}

//알파벳 대문자를 저장-26개
//아스키 코드값으로 저장
let n2 =new Array(26);
let ch='A';
//console.log(ch.charAt(0));
ch=ch.charCodeAt(0);//'A'를 코드값65로 변환

document.write("<br>");
for(let i=0; i<n2.length;i++){

    n2[i]=ch; //ch=65;
    ch++;
    //console.log(n2[i]+" ");
}

for(let i=0; i<n2.length;i++){
  console.log(n2[i]+" "+String.fromCharCode(n2[i]));
}

