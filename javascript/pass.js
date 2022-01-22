const pswrdField = document.querySelector(".from .field input[type='Password']"),
toggleBtn = document.querySelector(".from .field i");

toggleBtn.onclick = ()=>{
    if(pswrdField.type = "Password"){
        pswrdField.type = 'text';
        toggleBtn.classList.add("active");
    }else{
        pswrdField.type = "Password";
        toggleBtn.classList.remove("active");
    }
 
}
 