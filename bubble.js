document.addEventListener('DOMContentLoaded',function(){
    let pbtm = document.querySelector('.pbtm');
    let timeVal = document.querySelector('#timer');
    let hitVal=document.querySelector('#hit');
    let scoreVal=document.querySelector('#score')
    let pbtmElement=document.querySelector('.pbtm')
    
    function bubbleMake() {
        var bubbleBox = '';
        for (var i = 1; i <= 70; i++) {
            let bubbleValue = Math.floor(Math.random() * 10)
            bubbleBox += `<div class='bubble'>${bubbleValue}</div>`;
        }
        pbtm.innerHTML = bubbleBox;
    }
    
    var timer = 60;
    function runTime() {
        var timerFun = setInterval(function () {
            if (timer > 0) {
                timer--;
                timeVal.textContent = timer;
    
                if (timer == 0) {
                    timeVal.style.background = 'red';
                    timeVal.style.color = 'white';
                }
            }
                else {
                    clearInterval(timerFun);
                    pbtmElement.innerHTML='';
                    pbtmElement.innerHTML=`<h1>you score is:${score}</h1>`
                }
            }, 1000)
        }
    let hitRandom=0;
    function getHit(){
        hitRandom=Math.floor(Math.random()*10);
        hitVal.textContent=hitRandom;
    };
    
    let score=0;
    function increaseScore(){
        score+= 10;
        scoreVal.textContent=score;
    };
    
    bubbleMake();
    runTime();
    getHit();
    pbtmElement.addEventListener('click',function(e){
        let clickedNum=Number(e.target.textContent);
        if(clickedNum===hitRandom){
            bubbleMake();
            getHit();
            increaseScore()
        }
    })
    })
    

