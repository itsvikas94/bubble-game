var hitrn;
var score = 0;
var timer = 60;

function startgame(){
    document.querySelector("#start").addEventListener("click", function(dets){
    var startbox = document.querySelector("#startbox");
        startbox.style.display="none";
        // console.log("hello");
        increaseScore();
        getNewHit();
        makebubble();
        runtimer();
    })
}

function increaseScore(){
    document.querySelector("#scoreval").textContent = score;
    score += 10;
}

function getNewHit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makebubble(){
var clutter = "";
for(var i=1; i<=160; i++){
    var rn = Math.floor(Math.random() * 10)
    clutter += `<div class="bubble">${rn}</div>`; 
}
document.querySelector(".panelbtm").innerHTML = clutter;
}


function runtimer(){
    var vartimer = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(vartimer);
            document.querySelector(".panelbtm").innerHTML = `<div><h1>Game Over</h1><button id="rbtn">Restart</button></div>`;
            document.querySelector("#rbtn").addEventListener("click", function(dets){
                score = 0;
                timer = 60;
                increaseScore();
                getNewHit();
                makebubble();
                runtimer();
            })
        }
    }, 1000)

    
}

document.querySelector(".panelbtm").addEventListener("click", function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makebubble();
        getNewHit();
    }
});


makebubble();
startgame();