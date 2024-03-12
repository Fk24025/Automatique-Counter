let currentCount = 0;
let counterCount = 0;
let reduceCount = 0;
let addCount = 0;

let increaseButton = document.getElementById("increaseButton");
let decreaseButton = document.getElementById("decreaseButton");
let total = document.getElementById("total");
let playTimes = document.getElementById("playTimes")

  increaseButton.addEventListener("click",function(){
    addCount+= 1;
    increaseButton.textContent = addCount;
    total.textContent = totalCount();
  })
  
  decreaseButton.addEventListener("click", function(){
reduceCount-= 1;
decreaseButton.textContent = reduceCount;
total.textContent = totalCount();
});

 

function totalCount(){
let totalpoint = addCount + reduceCount;
return totalpoint
}

total.textContent = totalCount();

function totalPlay(){
  currentCount+=1;
return currentCount;
}
  
    increaseButton.addEventListener("click",function(){
      totalPlay();
    updatedTotalPlay();
    });
    decreaseButton.addEventListener("click",function(){
      totalPlay();
    updatedTotalPlay();
    });

  function updatedTotalPlay(){
let playCount = totalPlay();
playTimes.textContent = `You played ${playCount} times`;

  }
function resetButton(){
 decreaseButton.textContent = 0;
increaseButton.textContent = 0;
total.textContent = 0;
addCount = 0;
reduceCount = 0;
currentCount = 0;
playTimes.textContent = `You played 0 time`;
}


