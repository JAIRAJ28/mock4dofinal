let logintog=document.getElementById("logintoggle")
let register=document.getElementById("registertoggle")

const logshow=document.getElementById("login")
const registerform=document.getElementById("register")


logintog.addEventListener("click",(e)=>{
    logshow.style.display="block"
    registerform.style.display="none"
    logintog.style.color="black"
    logintog.style.backgroundColor="white"
    register.style.color="white"
    register.style.backgroundColor=""
    
})

register.addEventListener("click",(e)=>{
    logshow.style.display="none"
    registerform.style.display="block"
    register.style.color="black"
    register.style.backgroundColor="white"
    logintog.style.color="white"
    logintog.style.backgroundColor="#454545"
})


registerform.addEventListener("submit",(e)=>{
    let check=registerform.checkbox.checked
    e.preventDefault()
    let obj={
        user:registerform.username.value,
        emailId:registerform.userregister.value,
        password:registerform.rpassword.value,
        doctorCheckbox:registerform.checkbox.checked
    }
console.log(JSON.stringify(obj))
    if(!check){
        fetch("https://mock4-rho.vercel.app/users",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
                 body: JSON.stringify(obj)
        })
        .then((res)=>{
            console.log(res.json())
        })
        .then((res)=>{
            console.log(res)
        })
        .catch((Err)=>console.log(Err))

    }
})

