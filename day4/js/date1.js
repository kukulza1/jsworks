//date 객체(날짜와시간)

const now = new Date();


document.write("현재년도:" + now.getFullYear()+'<br>');
document.write("현재 월:" + (now.getMonth()+1)+'<br>');
document.write("현재 일:" + now.getMonth()+'<br>');

document.write("현재 시:" + now.getHours()+'<br>');
document.write("현재 분:" + now.getMinutes()+'<br>');
document.write("현재 초:" + now.getSeconds()+'<br>');

//현재까지의 시간 측정(1970.1.1 자정부터 밀리초로 변환)
document.write("현재까지의 시간" + 
now.getTime()/1000+'<br>');
document.write("날(일)로환산"+Math.floor
(now.getTime()/1000+'<br>'));