window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0)
})

let form = document.querySelector('#create.account.form');
let lapid = document.getElementById('ID');
let numPC = document.getElementById('num_pc');
let date = document.getElementById('Date');

document.querySelector("button").addEventListener("click" , (event) => {
    validateForm();

    if (isFormValid() === true){
        form.button();
    }
});

function isFormValid (){
    const inputContainers = form.querySelectorAll('.input-box');
    let result = true;
    inputContainers.forEach((container) => {
        if (container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}

function validateForm ()
{
    if (lapid.value.trim() === ''){
        setError(lapid , "Laboratory id can not be empty");
    }
    else if (lapid.value.trim().length < 6 || lapid.value.trim().length > 9){
        setError(lapid,"Laboratory id must be between 6 characters and 9 characters");
    }
    else {
        setSuccess(lapid);
    }
    if (numPC.value.trim()===''){
        setError(numPC,"enter the num of pc");
    }
    else if (numPC.value.trim() < 0 || numPC.value.trim() > 100){
        setError(numPC,"num of pc must be between 0 and 100");
    }
    else {
        setSuccess(numPC);
    }
}

function setError (input , errorMessage){
    let parent = input.parentElement;
    let messageEle =parent.querySelector("p.value");
    messageEle.style.visibility="visible";
    messageEle.innerText=errorMessage;
}

function setSuccess (input) {
    let parent = input.parentElement;
    let messageEle = parent.querySelectorAll("p");
    messageEle.style.visibility="visible";
    messageEle.innerText="successful";
}