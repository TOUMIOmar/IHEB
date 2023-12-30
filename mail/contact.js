var form=document.getElementById("contactForm")

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log("hello")
    emailjs.sendForm('service_zwczger', 'template_0bpczzg', {name:"ihebtest"},'pN8e-I9PbQy-bQw6R')
})
console.log(form)   