const hamburger=document.querySelector('.hamburger')
const background1=document.querySelector('.background-1')
const menu=document.querySelector('.navbar')
const abouts=document.querySelectorAll(".feature")
const whybox=document.querySelector(".slider")
const section=document.querySelector(".why-me")
const whytext=document.querySelector(".why-text")
const image=document.querySelector(".image")
const why=document.querySelectorAll(".why")
const firstpart=document.querySelector(".background-1")
const secondpart=document.querySelector(".part-2")
const launch=document.querySelector(".launch-portfolio")

launch.addEventListener('click',()=>{
    firstpart.classList.toggle('isactive')
    secondpart.classList.toggle('isactive')
    firstpart.parentElement.classList.toggle('isactive')
    menu.classList.toggle('burger-2')
})



const checker=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            window.addEventListener('load',()=>{
                // window.location.href="home.html"
                firstpart.classList.toggle('isactive')
                secondpart.classList.toggle('isactive')
                firstpart.parentElement.classList.toggle('isactive')
                menu.classList.toggle('burger-2')

            })
        }
    })
})

// abouts.forEach(about=>{
//     checker.observe(about)
// })

checker.observe(secondpart)



launch.addEventListener('mouseover',()=>{
    background1.classList.toggle('darkened')
})

launch.addEventListener('mouseout',()=>{
    background1.classList.toggle('darkened')
})


hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('isactive')
    menu.classList.toggle('isactive')
    
})


const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle("show",entry.isIntersecting)
        if(entry.isIntersecting) observer.unobserve(entry.target)
    })
},
{
    //the percentage of intersection at which the show class
    //becomes toggled
    threshold:0.6,
    rootMargin:"40px"
})


abouts.forEach(about=>{
    observer.observe(about)
})


// alert("hl")




let position=0;
let value=0
if(position<why.length){
    // whybox.style.border="2px solid yellow"
}

let mover=setInterval(()=>{
    if(position<why.length-1){
        whytext.style.opacity=0;
        whybox.style.opacity=1;
        // section.style.background=colors[position]
        section.style.background=`linear-gradient(to right,${colors[position][1]},${colors[position][0]})`
        whybox.style.transform=`translateY(${-value}vh)`
        position+=1   
        value=value+100
    }
    else if(position=why.length-1){
        whybox.style.opacity=0;
        // whybox.style.transition="1s"
        setTimeout(()=>{ 
        whytext.style.opacity=1;
        whybox.style.transform=`translateY(${value-50}vh)`
        position=0
        value=0
        },1500)
    }
},10000)



const colors=[
    ["purple","lightsalmon"],
    ["blue","orange"],
    ["yellow","green"],
    ["white","lightorange"],
    ["lightgreen","blue"]
]

console.log(colors[4][1])
// alert(colors[0][0])

