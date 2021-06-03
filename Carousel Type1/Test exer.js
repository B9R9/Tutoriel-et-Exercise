var slides = document.querySelectorAll('.slide');
var slide1 = slides[0];
var slide2 = slides[1];
var slide3 = slides[2];



var butt_right = document.querySelector('.butt-right');

var index = 0; //slide actuel

function next_slide (){
    slides[index].classList.remove('slideactive')//0 - 1
    if (index == 2){
        index = -1
    }
    slides[index+1].classList.add('slideactive')//1 -2 
    index = index +1;
}

butt_right.addEventListener('click',function(){
    slides[index].classList.remove('slideactive')//0 - 1
    if (index == 2){
        index = -1
    }
    slides[index+1].classList.add('slideactive')//1 -2 
    index = index +1;
});

var butt_left = document.querySelector('.butt-left');
butt_left.addEventListener('click',function(){
    slides[index].classList.remove('slideactive')//0 - 1
    if (index == 0){
        index = 3
    }
    slides[index-1].classList.add('slideactive')//1 -2 
    index = index -1;
});

window.setInterval(function()
    {next_slide()},3000
)

    







