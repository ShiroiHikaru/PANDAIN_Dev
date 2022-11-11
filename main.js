var chat = ['흥민', '영희', '철수', '재석'];

var score = [10, 20, 30, 40, 50];

// function name(이름){

//  for(let i = 0; i < chat.length; i++){
//    if(chat[i] == 이름){
//      console.log('있어요');
//    }else{
//      console.log('없어요');
//    }
//  }
// }

// function 구구단(숫자){
//   for(let i = 1; i < 10; i++){
//    console.log(숫자*i);
//   }
// }

function 점수(이번점수){
  let s = 0;
  for(let i = 0; i < score.length; i++){
    s = s + score[i]; 
  } 
    
  let a = 0;
  a = s / score.length;

  let b = 이번점수 - a;

  if(a < 이번점수 ){
    console.log('평균보다'+ b +'점이 올랐어요');
  }else if(a > 이번점수){
    console.log('평균이 '+ b +'점이 떨어졌어요');
  };
  }




  // 자료를 가지고 원하는 값을 구할 수 있는지.
  


  // ajax - 개념정리
  
  // get : 데이터를 읽을 때 , post : 데이터를 보낼 때

  // ajax : 새로고침 없이 get, post 요청하는 기능

  $.get('https://codingapple1.github.io/price.json')
    .done(function(data){
      console.log(data.price)//.은 ~~의
    })
    .fail(function(){
      console.log('실패함')
    })


    var products = [
      { id : 0, price : 70000, title : 'Blossom Dress' },
      { id : 1, price : 50000, title : 'Springfield Shirt' },
      { id : 2, price : 60000, title : 'Black Monastery' }
    ]; 


    function column(itembox){
      let tagArea = document.querySelector('.row');
      let title = document.createElement('div');
  
      
  title.setAttribute('class', 'col-sm-4');
  title.innerHTML = `<img src="https://via.placeholder.com/600" class="w-100">'
  <h5>${itembox.title}</h5>
  <p>${itembox.price}</p>`;
  
  tagArea.appendChild(title);

  };



let count = 0;

//더보기를 클릭할 때 마다 count가 1씩 증가


let url2 = 'https://codingapple1.github.io/js/more2.json';
``
  $('.btn').click(function(){
    if(count == 0){
    $.get('https://codingapple1.github.io/js/more1.json')
    .done(function(itembox){
      count++;
      console.log(itembox);
      itembox.forEach(element => {
        column(element);
      });
    
    })
  }else if(count == 1){
      test(url2);
      $('.btn').css('display','none');
  }



})


// 중복되는 역할이 있을 경우 함수화 시키는게 깔끔함
function test(ab){
  $.get(ab)
    .done(function(itembox){
      count++;
      console.log(itembox);
      itembox.forEach(element => {
        column(element);
      });
})
};
//element의 역활은 변수 역활, 항상 console.log로 출력해서 확인