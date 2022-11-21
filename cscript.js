 




// Nav Menu Script
var marker = document.querySelector('.marker');
var item = document.querySelectorAll('nav .mk');


function indicator(e){
 marker.style.left = e.offsetLeft+"px";
 marker.style.width = e.offsetWidth+"px";
} 

item.forEach(link => {
 link.addEventListener('mouseover', (e)=>{
   indicator(e.target);
 })
})
// End of Nav Menu Script


// Morphing Burger Icon{}
let menu = document.querySelector('.menu')
let burger = document.querySelector('.burger')
let navlinks = document.querySelector('header nav')
let head = document.querySelector('header')

menu.addEventListener('click', ()=>{
   menu.classList.toggle('swish')
   burger.classList.toggle('swish')
   navlinks.classList.toggle('swish')
   head.classList.toggle('swish')
})


// End of Morphing Burger Icon{}

// Mobile Menu Slide View

// End of Mobile Menu Slide View

// HEADER STICKY ON UP-SCROLL
const body = document.body
let lastScroll = 0

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset

  if(currentScroll <= 0){
    body.classList.remove("scroll-up")
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")){
    body.classList.remove("scroll-up")
    body.classList.add("scroll-down")
  }
  if (currentScroll < lastScroll && body.classList.contains("scroll-down")){
    body.classList.remove("scroll-down")
    body.classList.add("scroll-up")
  }


  lastScroll = currentScroll


})
// END OF HEADER STICKY ON UP-SCROLL


// ***************Contact Form Script
const inputs = document.querySelectorAll('.input');

function focusFunc(){
  let parent = this.parentNode;
  parent.classList.add('focus')

}
function blurFunc(){
  let parent = this.parentNode;
  if(this.value == ""){
  parent.classList.remove('focus')
  }

}

inputs.forEach((input) => {
  input.addEventListener('focus', focusFunc);
  input.addEventListener('blur', blurFunc);

})

// Clear Form Function
function submitFor() {
  let cform = document.getElementById('cform');

  cform.submit();
  cform.reset();
  }

// ******************End of Contact Form Script