const btns = document.querySelectorAll(".box");
const inputtag = document.querySelector("input");
let string = "";

let btnsarray = Array.from(btns); // array.from() is a function . its make all btns in array from ok

btnsarray.forEach(button =>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            inputtag.value=string;
        }else if(e.target.innerHTML== 'C'){
            string="";
            inputtag.value= string;
        }else{

            string += e.target.innerHTML;
            inputtag.value = string; 
        }
    })
})



 

