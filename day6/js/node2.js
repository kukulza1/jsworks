
//p태그 생성
function addp(){
let newp = document.createElement("p");
let newText = document.createTextNode("숨겨진텍스트입니다.")
newp.appendChild(newText);//p태그에 내용추가

//div태그에 p태그 추가
let div = document.getElementById("info");
div.appendChild(newp);
}