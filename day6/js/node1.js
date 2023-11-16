
function myFunction(){
  let newp=document.createElement("li");
  let newtext=document.createTextNode("tea");
  newp.appendChild(newtext);

 let ul= document.getElementById("mylist");
 ul.appendChild(newp);
}