/* give  start */


const openMenu = document.querySelector('.select-menu')
const sBtntext = document.querySelector('.sBtn-text')
const options = document.querySelectorAll('.option')
const Menu  = document.querySelector('.options')
const chevBtn = document.querySelector('.fa-chevron-down')

chevBtn.addEventListener('click', function(){
    Menu.classList.toggle('active')
  console.log("clicked")
})



options.forEach(function(option){
  option.addEventListener('click' , function() {
    let selected = option.querySelector('.option-text').textContent

sBtntext.textContent = selected
Menu.classList.remove('active')
    console.log(selected)

  })
})

/* give  ends */