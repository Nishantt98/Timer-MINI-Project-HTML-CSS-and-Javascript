const endDate = "14 Feb 2024 11:47 PM";

document.getElementById("end-date").innerHTML = endDate;
let inputs = document.querySelectorAll('input');

function clock(){                               // Function
    const end = new Date(endDate);   
    const now = new Date();
    const diff = (end - now)/1000;
  
    if(diff < 0)return;

    inputs[0].value = Math.floor(diff/3600/24)   //set No of Days
    inputs[1].value = Math.floor(diff/3600)%24;  //set No of Hours
    inputs[2].value = Math.floor(diff/60)%60;    //set No of Minutes
    inputs[3].value = Math.floor(diff)%60;       //set No of Seconds
}
clock();

setInterval (       //use for non stop work
    ()=>{           // Arrow Funtion
        clock();    
    },1000
)