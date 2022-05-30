const txtInput=document.querySelector(".input input");
const checkBtn=document.querySelector(".input button");
const infoTxt=document.querySelector(".info");
let filterInput;
checkBtn.addEventListener("click",()=>{
    let reverseInput=filterInput.split("").reverse().join("");
    infoTxt.style.display= "block";
    if(filterInput !=reverseInput){
        return infoTxt.innerHTML=`No!! <span>'${txtInput.value}'</span> isn't a palindrome`
    }
    return infoTxt.innerHTML=`Yes!! <span>'${txtInput.value}'</span> is a palindrome`

})

txtInput.addEventListener("keyup",()=>{
     filterInput=txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig,"")
    if(filterInput){
        return checkBtn.classList.add("active");
    }
    checkBtn.classList.remove("active");
    infoTxt.style.display= "none";

})