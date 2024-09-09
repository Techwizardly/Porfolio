let menu=document.querySelector("#menu");
let cancel=document.querySelector("#cancel");
menu.addEventListener("click", function(){
    let anchor=menu.parentElement.nextElementSibling;
    anchor.style.right="0";
    console.log(anchor);
});
cancel.addEventListener("click", function(){
    let close=cancel.parentElement;
    close.style.right="-200px";
    
    console.log(close);
});
