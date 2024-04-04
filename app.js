let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame=() =>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
       if(turn0){ //PLAYER O
        box.innerText="O";
        turn0=false;
       }
       else{ // PLAYER X
        box.innerText="X";
        turn0=true;
       }
    box.disabled=true;

    checkwinner();
    });
});

const disableboxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableboxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner =(winner)=>{
    msg.innerText=`CONGRATULATIONS ,WINNER IS ${winner}`;
    msgcontainer.classList.remove("hide");
    let video = document.createElement("video");
    video.src = "cat.mp4";
    video.controls = true; // Add controls to the video player
    video.classList.add("winner-video");

    // Append the video to the message container
    msgcontainer.appendChild(video);
    disableboxes();
}



const checkwinner =() =>{
    for( let pattern of winpatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
            );
            let position1_value=boxes[pattern[0]].innerText;
            let position2_value=boxes[pattern[1]].innerText;
            let position3_value=boxes[pattern[2]].innerText;

            if(position1_value !="" && position2_value !="" && position3_value!=""){
                if(position1_value===position2_value && position2_value === position3_value){
                    showwinner(position1_value);
                }
            }
    }
};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

