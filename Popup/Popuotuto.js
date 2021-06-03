    // var modalBtns = [...document.querySelectorAll(".button")];
    //   modalBtns.forEach(function(btn){
    //     btn.onclick = function() {
    //       var modal = btn.getAttribute('data-modal');
    //       document.getElementById(modal).style.display = "block";
    //     }
    //   });
      
    //   var closeBtns = [...document.querySelectorAll(".close")];
    //   closeBtns.forEach(function(btn){
    //     btn.onclick = function() {
    //       var modal = btn.closest('.modal');
    //       modal.style.display = "none";
    //     }
    //   });
      
    //   window.onclick = function(event) {
    //     if (event.target.className === "modal") {
    //       event.target.style.display = "none";
    //     }
    //   }
              /*FOCUS IN AND OUT POP UP*/
  var boxText = document.querySelectorAll('input')
  var textArea= document.querySelector('textarea')
    
  boxText.forEach(function(element){
      element.addEventListener('focusin',function (){
        element.style.border= '1px solid black'
      })
  })
    boxText.forEach(function(element){
      element.addEventListener('focusout',function (){
        element.style.border= 'none'
      })
  })

      textArea.addEventListener('focusin',function (){
        textArea.style.border= '1px solid black'
      })
  
    
      textArea.addEventListener('focusout',function (){
        textArea.style.border= 'none'
      })

/* MISE EN AVANT ET EN RETRAIT DU POP UP*/

var openbtn= document.querySelector('.open')
openbtn.addEventListener ('click',function (){
  document.querySelector('#popupcontaineur').style.top='0'
})

var closebtn = document.querySelectorAll('.close')

closebtn.forEach(function (btn) {
  btn.addEventListener ('click', function(){
    document.querySelector('#popupcontaineur').style.top='-1000px'
  })
})















  //  var modalBtns = document.querySelectorAll(".open")
  //     modalBtns.forEach(function(btn){
  //       btn.onclick = function() {
  //         var modal = btn.getAttribute('data-modal');
  //         document.getElementById(modal).style.display = "block";
  //       }
  //     });


// var openbtn= document.getElementsByClassName('.open')
// console.log(openbtn)
// openbtn.addEventListener('click',function(){
//   var popup= document.querySelectorAll('.popupcontaineur')
//   popup.style.display='block'
// })




// var closebtn= document.querySelectorAll('.close')

// closebtn.forEach(function(btn){
//     btn.onclick = function(){
//       var popup= btn.closest('.popupcontaineur')
//       popup.style.display='none'
//     }
// })

//  window.onclick = function(event) {
//         if (event.target.className === "modal") {
//           event.target.style.display = "none";
//         }
//       }

