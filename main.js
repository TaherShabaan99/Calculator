const btns = document.querySelectorAll('.btns');
const wholescreen = document.querySelector('.whole-screen');
const equalbtn11 = document.querySelector('.equalbtn');
const clearbtn11 = document.querySelector('.clearbtn');

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (){
    let num = btns[i].getAttribute('data-num');
    wholescreen.value += num;
    //console.log(wholescreen.value);
  })
}

equalbtn11.addEventListener("click", function (){
  //In case there are no input to calculate
  if(wholescreen.value == ''){
    alert("No input to calculate");
  }else{
  let value1 = eval(wholescreen.value);
  wholescreen.value = value1;
  }
})

clearbtn11.addEventListener('click', function () {
  wholescreen.value = '';
})