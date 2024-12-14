let boxes= document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset")
let msg_Container= document.querySelector(".msgContainer");
let msgBtn= document.querySelector("#msg");



turnO=true;


const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO===true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    })
})

const showWinner=(winner)=>{
    msgBtn.innerText=`Congrats,The winner is ${winner}`
    msg_Container.classList.remove("hide")
     disableBtn();
    

};

const checkWinner=()=>{
    for(patterns of winPattern){
        

        let pos1=boxes[patterns[0]].innerText;
        let pos2=boxes[patterns[1]].innerText;
        let pos3=boxes[patterns[2]].innerText;

        if(pos1!="" && pos2!=""&& pos3!=""){

        if(pos1===pos2 && pos2===pos3){
            showWinner(pos1);

            
        }
    }


    }
}

const disableBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
          box.innerText=""
    }
}

const resetGame=()=>{
   
        enableBoxes();
        turnO=true;
      
        msg_Container.classList.add("hide");
    }


    resetBtn.addEventListener("click",resetGame);

    
    

