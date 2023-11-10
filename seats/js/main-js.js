//입장객 수에 따른 행과 열, 줄수 개선
let customer,colNum,rowNum;
customer=prompt("입장객수 입력");
colNum=prompt("좌석열수 입력");

//나머지의 유무에따른 조건문
if(customer%colNum == 0){
  rowNum= customer/colNum
}else{
  rowNum= parseInt(customer/colNum)+1;
}

document.write("<table>")
for(let i=0; i<rowNum;i++){
  for(let j=1; j<=colNum;j++){
    let seatNum =colNum*i+j;
    if(customer<seatNum)break; 
     document.write("<td>좌석"+seatNum+" </td>");
  }
  document.write("<tr>");
}
document.write("</table>")