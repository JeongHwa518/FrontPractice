//초기 데이터 
let mockData = [ 
      {id:0, isDone:false, content:"React study", date: new Date().getTime()}, 
      {id:1, isDone:true, content:"친구만나기", date: new Date().getTime()}, 
      {id:2, isDone:false, content:"낮잠자기", date: new Date().getTime()}, 
      ]; 
 
// 요일 출력을 위한 배열 
let days =["일","월","화","수","목","금","토"];

onload = ()=> {
    initData(mockData);

    //현재 날짜 출력
    let today = new Date();
    let year = today.getFullYear();
    let month = (today.getMonth()+1);
    let date = today.getDate();
    let day = today.getDay();

   document.querySelector("h1").innerHTML = `${year}년 ${month}월 ${date}일 ${days[day]}요일`;


}

const initData = (printData)=> {
    printData.forEach((data)=> {
        document.querySelector(".todo-item").innerHTML = data;

        const todoWrapper = document.querySelector("[class = todos-wrapper]");
        todoWrapper.innerHTML += `<div class="todo-item"> 
                              <input type="checkbox"> <div class="content"></div>
                              <div class="date"></div>
                              <button onclick="">삭제</button></div>`;
        
        //체크박스
        let checkBox = document.querySelector("[type = checkbox]");
        checkBox.onchange = () => {
            if(data.isDone) checkBox.setAttribute("checked", "true");
        }
        
        //삭제 버튼
        document.querySelector("button").setAttribute("name", `${data.id}`);
        document.querySelector("button").setAttribute("onclick", `todoDel${this}`);
    })
    
}

//추가 기능
let idIndex = 3; //id의 값을 증가 시킬 변수(초기데이터가 2까지 있으므로 3부터 시작)
document.querySelector(".editor > button").onclick =(e) =>{ 
    e.preventDefault(); //전송기능 막음 
    let record = document.querySelector(".editor > input").value;
    let newData = {id: idInex++, isDone:false, content: record, date: newDate().getTime()};

    mockData.push(newData);
    initData(mockData); //호출한다.(다시 화면 랜더링) 
}  

//수정 기능
const onUpdate = (targetId)=>{ //TodoItem에서 호출할 때 전달한 id 
    /* mockData의 state의 값들 중에 targetId와 일치하는 todoitem의 isDone 변경 
        map함수를 이용한다. map함수의 결과를 mockData에 저장한다. 
    */ 
    
 
    initData(mockData); //호출한다.(다시 화면 랜더링) 
}

//삭제 기능
const todoDel = (th)=>{ 
    //filter()함수를 이용해서 삭제하려는 대상이외의 todo만 추출해서 mockData에 담든다.


    initData(mockData); //호출한다.(다시 화면 랜더링)
}

//검색 기능
document.querySelector("#keyword").onkeyup = (e)=>{ 
 
    let searchedTodos = getFilterData(e.target.value); 
     
    initData(searchedTodos); 
    
 } 
 
 
 const getFilterData = (search) =>{ 
      //검색어가 없으면 mockData를 리턴한다. 
       if(search===""){ 
         return  mockData; 
      } 

      //filter함수를 이용해서 search(검색어)를 포함하고 있는 todo들를 받는다 
      
//filter의 결과를 리턴 한다. 
 }

