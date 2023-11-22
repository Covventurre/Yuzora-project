var number = 10;
var string = 'Hello There';
var isRad = True;

if(number == 10){
  console.log('Yeah Buddy');
} else {
  console.log('Nope!');
}
document.getElementById('box').innerHTML = number + 5;

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {

    header.classList.add("sticky");
  } else {

    header.classList.remove("sticky");
    }
}