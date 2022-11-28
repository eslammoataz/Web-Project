window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0)
})
let form = document.querySelector('#create.account.form');
let Laboratory_Id = document.querySelector('#Labid');
let Laboratory_Name = document.querySelector('#Labname');
let Building_Number = document.querySelector('#Buildname');

document.querySelector("button").addEventListener("click",(event)=>{
    validateForm();

   if(isFormValid()==true){
       form.button();
   }
   else
   {
        event.preventDefault();
   }
});



// function isFormValid(){
//     const inputContainers = form.querySelectorAll('.input-group');
//     let result = true;
//     inputContainers.forEach((container)=>{
//         if(container.classList.contains('error'))
//         {
//               result = false;
//         }
//     });
//     return result;
// }
function validateForm()
{
    if(Laboratory_Id.value.trim()==='')
    {
        setError(Laboratory_Id,"Laboratory id can not be empty")
    }
    else if(Laboratory_Id.value.trim().length < 6 || Laboratory_Id.value.trim().length>9)
    {
       setError(Laboratory_Id,"Id must be min 6 max 9 charecters")
    }
    else
    {
       setSuccess(Laboratory_Id);
    }
    if(Laboratory_Name.value.trim()==='')
    {
        setError(Laboratory_Name, "Laboratory Name can not be empty");
    }
    else if(Laboratory_Name.value.trim().length < 5 || Laboratory_Name.value.trim().length>15)
    {
        setError(Laboratory_Name, "Id must be min 5 max 15 charecters");
    }
    else
    {
        setSuccess(Laboratory_Name);
    }
}
// function setError (input, errorMessage)
// {
//     let parent = input.parentElement;
//     let messageEle =parent.querySelector("p");
//     messageEle.style.visibility="visible";
//     messageEle.innerText=errorMessage ;
// }
// function setSuccess(input)
// {
//     let parent =  input.parentElement;
//     let messageEle =parent.querySelector("p");
//     messageEle.style.visibility="hidden";
//     messageEle.innerText="";
// }

function check(){
    var x = document.getElementById('ID').value;
    if (x === ''){
        alert("you must fill the ID laboratory");
        return false;
    }
}

window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0)
})
