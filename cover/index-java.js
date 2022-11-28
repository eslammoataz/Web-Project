function reveal(){
    var transitions=document.querySelectorAll(".transition");
    for (var i=0;i<transitions.length;i++){
        var windowHeight=window.innerHeight;
        var elementTop=transitions[i].getBoundingClientRect().top;
        var elementVisible=300;
        if(elementTop<windowHeight-elementVisible){
            transitions[i].classList.add("active");
        }
        // else {
        //     transitions[i].classList.remove("active");
        // }
    }
}
window.addEventListener("scroll",reveal);