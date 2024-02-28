let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let mas=document.querySelector("#msg");
let turno=true;//player X and O
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [3,7,8],
];

const resetGame=()=>{
    turno=true;
    enableBoxe();
    msgContainer.classList.add("hide");

};


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      //console.log("box was clicked"); 
      if(turno) //player o turn
     { box.innerText="O";
     turno=false;
    }

    else{// player X turn
        box.innerText="X";
        turno=true;
        
    }
    box.disabled=true;
    checkWinner();

    })
});

const disableBoxe=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxe=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};


const showWinner=(winner)=>{
     msg.innerText=`Congratulation, winner is ${winner}`;
     msgContainer.classList.remove("hide");
     disableBoxe();
};


const checkWinner=()=>{
    for(let pattern of winPattern){   
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;
    if(pos1Val !=""&& pos2Val !=""&& pos3Val!=""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            //console.log("Winner!",pos1Val);
            showWinner(pos1Val);

        }
    }
}
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);