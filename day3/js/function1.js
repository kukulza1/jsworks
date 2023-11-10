
//함수정의
function sayhello(){
   document.write("안녕하세요<br>")
}
//매개변수가 있는함수(매개변수에 자료형이 생략됨)
function sayhello2(name){
   document.write(name+"님 안녕하세요<br>")
}


//함수사용-호출
sayhello();
sayhello2("SB");

//구구단을 출력하는함수 정의
function gugudan(dan){
   for(var i=1;i<10;i++){
    document.write(dan+"x"+i+"="+(dan*i)+"<br>")
    
   }
}
//구구단호출
gugudan(4);
