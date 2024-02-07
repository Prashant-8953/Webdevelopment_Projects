let boxbtns = document.querySelectorAll(".box");
let rest = document.querySelector(".reset");
let newGamebtn = document.querySelector(".newbtn");

let turnO = true; //player x,player O

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],

    [1,4,7],
    [2,5,8],
    [2,4,6],

    [3,4,5],
    [6,7,8]

]


const resetbtn=()=>{
    turnO = true;
    enabledbox();
}

const disabledbox = ()=>{
    for(let box of boxbtns){
        box.disabled = true;
        
    }
}


const enabledbox = ()=>{
    for(let box of boxbtns){
        box.disabled = false;
        box.innerText="";
        
    }
}

boxbtns.forEach((box)=>{
    box.addEventListener("click",()=>{
    //  box.innerText = "abcd";
        if(turnO){ //  turn O ka hai 
            box.innerText = "O";
            turnO = false; // now turn x ko dedega.


        }else{
            box.innerText = "X"; // x ki turn hai
            turnO = true; // uske O ko dedega.
            
            

        }
        box.disabled = true;

        checkWinner(); 
    });
});



const checkWinner = ()=>{
    for(let pattern of winPatterns){
      
        let pos1Val = boxbtns[pattern[0]].innerText;
        let pos2Val = boxbtns[pattern[1]].innerText;
        let pos3Val = boxbtns[pattern[2]].innerText;
    
        if(pos1Val != "" && pos2Val != "" && pos3Val != "")
        {
            if(pos1Val===pos2Val && pos2Val === pos3Val){
                alert(` Congratulation your winner ${pos1Val}`);
               disabledbox();
            }
        }
    }

    
    } 


    newGamebtn.addEventListener("click",resetbtn);
    rest.addEventListener("click",resetbtn);