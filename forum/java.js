window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0)
})

//getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

//if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user entered data
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user char to lowercase and return only those
            // word/sentence which are starts with user entered word
            return data.toLocaleLowerCase().match(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>' + data +'</li>';
        });
        console.log(emptyArray);
        searchWrapper.classList.add("active"); //show autocomplete data
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++){
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick","select(this)");

        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete data
    }
}

function select(element){
    let selectUserData = element.textContent;
    inputBox.value = selectUserData; //passing the user selected list item data in textfield
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>' + 'No result found for '  + '"' + userValue + '"' +'</li>';
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}