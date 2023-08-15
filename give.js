
/* const openMenu = document.querySelector('.select-menu')
const sBtntext = document.querySelector('.sBtn-text')
const options = document.querySelectorAll('.option')
const Menu  = document.querySelector('.options')
const chevBtn = document.getElementById('chevDown')

chevBtn.addEventListener('click', function(){
    Menu.classList.add('active')
  console.log("clicked")
})



options.forEach(function(option){
  option.addEventListener('click' , function() {
    let selected = option.querySelector('.option-text').textContent

sBtntext.textContent = selected
Menu.classList.remove('active')
    console.log(selected)

  })
})  */


const openMenu = document.querySelector(".select-menu")
const sBtntext = document.querySelector(".sBtn-text")
const options = document.querySelector(".options")
const menu = document.querySelectorAll(".option")
const chevDown  = document.getElementById("chevDown")


chevDown.addEventListener("click" , function(){
  console.log("clicked")
  options.classList.toggle("active")
})

menu.forEach((option) =>{
  option.addEventListener("click",()=>{
    console.log(option.textContent)
    let selected = option.textContent
    


    sBtntext.textContent = selected
    options.classList.remove("active")

  })
})



const openMenu1 = document.querySelector(".select-menu1")
console.log(openMenu1)
const sBtntext1 = document.querySelector(".sBtn-text1")
console.log(sBtntext)
const options1 = document.querySelector(".options1")
console.log(options1)
const menu1 = document.querySelectorAll(".option11")
console.log(menu1.textContent)
const chevDown1  = document.getElementById("chevDown1")
console.log(chevDown1)


chevDown1.addEventListener("click" , function(){
  console.log("clicked")
  options1.classList.toggle("active")
})

menu1.forEach((option11) =>{
  option11.addEventListener("click",()=>{
    console.log(option11.textContent)
    let selected1 = option11.textContent
    console.log(selected1)
    


    sBtntext1.textContent = selected1
    options1.classList.remove("active")

  })
})