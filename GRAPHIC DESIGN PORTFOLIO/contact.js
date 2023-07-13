const form=document.getElementById('form')
const email=document.getElementById('email')
const username=document.getElementById('name')
const contact=document.getElementById('contact')
const remarks=document.getElementById('remarks')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    validateInputs()
})

const setError=(element,message)=>{
    const inputControl=element.parentElement
    const errorDisplay=inputControl.querySelector('.error')

    errorDisplay.innerText=message
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

const setSuccess=element=>{
    const inputControl=element.parentElement
    const errorDisplay=inputControl.querySelector('.error')

    errorDisplay.innerText=''
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}

const isValidEmail=email=>{
    const re= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

const validateInputs= ()=>{
const usernameValue=username.value.trim()
const emailValue=email.value.trim()
const contactValue=contact.value.trim()
const remarksValue=remarks.value.trim()

if(usernameValue===''){
     setError(username,'Your name is required')
}

else{
    setSuccess(username)
}


if(emailValue===''){
setError(email,'Email is required')
}
else if(!isValidEmail(emailValue)){
    setError(email,'Kindly provide a valid email address')
}
else{
    setSuccess(email)
}

if(contactValue===''){
    setError(contact,'Please input your contact')
}

else if(contactValue.length<10){
    setError(contact,'Contact must be at least 10 characters')
}

else{
    setSuccess(contact)
}


// if(password2Value===''){
//     setError(password2,'Please confirm your password')
// }

// else if (password2Value !== passwordValue) {
//     setError(password2,"Passwords doesn't match")
// } else {
//     setSuccess(password2)
// }
}
