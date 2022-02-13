// remove loader
window.addEventListener("load",()=>{
    document.getElementById("loader").style.display="none";
})

let header=document.querySelector(".header");
let menuIcon=document.querySelector("#menu-icon");
let menuSpans=document.querySelectorAll("#menu-icon span");
let menu=document.querySelector('#menu')


menuSpans[1].style.width="30px";
menuIcon.addEventListener("click",function(){
    if( menuSpans[1].style.width=="30px"){
        menuSpans[0].style.cssText=" transform: rotate(45deg) translateX(1px) translateY(0px);"
        menuSpans[1].style.cssText=" width: 40px;transform: rotate(-45deg);"
        menuSpans[2].style.cssText=" transform:rotate(45deg) translateY(-10px) translateX(10px);"
        // menu.style.display="flex";
        menu.style.cssText="transform: scale(1);transform-origin: top center;"

        // 
    }else{
        menuSpans[0].style.cssText=" transform: rotate(0deg) translateX(0px) translateY(0px);"
        menuSpans[1].style.cssText=" width: 30px;transform: rotate(0deg);"
        menuSpans[2].style.cssText=" transform:rotate(0deg) translateY(0px) translateX(0px);"
        menu.style.cssText="transform: scale(0);"
    }

})

// header from relative to sticky

window.addEventListener("scroll",function(){
    if(scrollY >= 500){
        header.style.position="sticky";
    }else{
        header.style.position="relative";
    }
})

// Progress

let serviceSection=document.querySelector("#service");
let progSpans=document.querySelectorAll(".services .container .right-side .prog-holder .prog span");
// window.setTimeout()
function progress(el){
    let goal=el.dataset.progress;
    el.style.width=goal;
}
window.addEventListener("scroll",function(){
    if(scrollY >= serviceSection.offsetTop +200){
        progSpans.forEach((span)=>progress(span));
    }
})



//===============changing active class on navbar links when scroll 
let lis=document.querySelectorAll("#menu li a");
let sections=document.querySelectorAll(".section")


window.addEventListener("scroll",()=>{
    let current="";
    sections.forEach((section)=>{
        let sectionTop=section.offsetTop;
        if(scrollY >= sectionTop -200){
            current=section.getAttribute("id");
        }
    })
    lis.forEach((li)=>{
        li.classList.remove("home-color");
        if(li.getAttribute("href")==`#${current}`){
            li.classList.add("home-color");
        }
    });
});