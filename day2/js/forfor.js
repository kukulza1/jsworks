//중첩for문

//5행5열에 문자출력
for(let i=1;i<6 ; i++){
  for(let j=1;j<6;j++){
    document.write("$");
  }
  document.write("<br>")
}

//구구단
for(let i=2; i<10; i++){
  for(let j=1;j<10; j++){
    document.write(i+"x"+j+"="+(i*j)+" ,");
  }
  document.write("<br>")
}

//직각삼각형모양으로 출력하기
for(let i=1;i<6 ; i++){ //행
  for(let j=1;j<=i;j++){ //열
    document.write("$");
  }
  document.write("<br>")
}

for(let i=1;i<6 ; i++){
  for(let j=1;j<=(6-i);j++){
    document.write("$");
  }
  document.write("<br>")
}

for(let i=1;i<6 ; i++){
  for(let j=5;j>i;j--){
    document.write("$");
  }
  document.write("<br>")
}

for(let i=1;i<5 ; i++){
  for(let j=1;j<6;j++){
    document.write((5*i)+j);
  }
  document.write("<br>")
}
