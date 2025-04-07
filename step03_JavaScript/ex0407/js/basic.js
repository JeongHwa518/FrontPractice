//여기는 javascript문법입니다.
/*여러줄 주석*/

//브라우저에 출력
document.write("<h1 style='color:red'>출력되니?</h1>");

//콘솔 출력
console.log("난 어디에 출력돼?");

//마우스 오버했을때 기능
function mouseOver(th) { //th변수는 this가 전달된다.
    th.style.backgroundColor="red";
    th.style.color="white";
}

//마우스 아웃했을때 기능
function mouseOut(th) { //th변수는 this가 전달된다.
    th.style.backgroundColor="white";
    th.style.color="black";
}
