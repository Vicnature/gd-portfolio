const hamburger=document.querySelector('.hamburger')
const menu=document.querySelector('.navbar')


hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('isactive')
    menu.classList.toggle('isactive')
})