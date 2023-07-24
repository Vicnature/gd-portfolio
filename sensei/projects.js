// menu
const hamburger=document.querySelector('.hamburger')
const menu=document.querySelector('.navbar')


// view buttons
const viewbutton1=document.querySelector('.view-one')
const viewbutton2=document.querySelector('.view-two')
const viewbutton3=document.querySelector('.view-three')
const viewbutton4=document.querySelector('.view-four')
const viewbutton5=document.querySelector('.view-five')

//project divs
const project1=document.querySelector('.project-one')
const project2=document.querySelector('.project-two')
const project3=document.querySelector('.project-three')
const project4=document.querySelector('.project-four')
const project5=document.querySelector('.project-five')

// brand names(left side of every project)
const moved1=document.querySelector('.moved-one')
const moved2=document.querySelector('.moved-two')
const moved3=document.querySelector('.moved-three')
const moved4=document.querySelector('.moved-four')
const moved5=document.querySelector('.moved-five')


// project description (right side of every projecview


//details buttons
const details1=document.querySelector('.details-one')
const details2=document.querySelector('.details-two')
const details3=document.querySelector('.details-three')
const details4=document.querySelector('.details-four')
const details5=document.querySelector('.details-five')


//boolean facilitating change of the VIEW/CLOSE value
let state1=true
viewbutton1.innerText="VIEW"
viewbutton2.innerText="VIEW"
viewbutton3.innerText="VIEW"
viewbutton4.innerText="VIEW"
viewbutton5.innerText="VIEW"


//hamburger menu
hamburger.addEventListener('click',()=>{
   hamburger.classList.toggle('isactive')
   menu.classList.toggle('isactive')
   
})


viewbutton1.addEventListener('click',()=>{
   if(!state1){
      project1.classList.remove('show')
   }
     project1.classList.toggle('moved')
     project1.classList.toggle('described')
     details1.addEventListener('click',()=>{
      project1.classList.toggle('show')
     })
     if(state1){
     viewbutton1.innerText="close"
     state1=false
    }
     else{
        viewbutton1.innerText="VIEW"
        state1=true
     }
})


let state2=true
viewbutton2.addEventListener('click',()=>{
   if(!state2){
      project2.classList.remove('show')
   }
    project2.classList.toggle('moved')
    project2.classList.toggle('described')
    details2.addEventListener('click',()=>{
     project2.classList.toggle('show')
    })
    if(state2){
    viewbutton2.innerText="close"
    state2=false
   }
    else{
       viewbutton2.innerText="VIEW"
       state2=true
    }
})

let state3=true
viewbutton3.addEventListener('click',()=>{
   if(!state3){
      project3.classList.remove('show')
   }
    project3.classList.toggle('moved')
    project3.classList.toggle('described')
    details3.addEventListener('click',()=>{
     project3.classList.toggle('show')
    })
    if(state3){
    viewbutton3.innerText="close"
    state3=false
   }
    else{
       viewbutton3.innerText="VIEW"
       state3=true
    }
})

let state4=true
viewbutton4.addEventListener('click',()=>{
   if(!state4){
      project4.classList.remove('show')
   }
    project4.classList.toggle('moved')
    project4.classList.toggle('described')
    details4.addEventListener('click',()=>{
     project4.classList.toggle('show')
    })
    if(state4){
    viewbutton4.innerText="close"
    state4=false
   }
    else{
     viewbutton4.innerText="VIEW"
       state4=true
    }
})

let state5=true
viewbutton5.addEventListener('click',()=>{
   if(!state5){
      project5.classList.remove('show')
   }
    project5.classList.toggle('moved')
    project5.classList.toggle('described')
    details5.addEventListener('click',()=>{
     project5.classList.toggle('show')
    })
    if(state5){
    viewbutton5.innerText="close"
    state5=false
   }
    else{
       viewbutton5.innerText="VIEW"
       state5=true
    }
})




