
//objects
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

//arena
const game = document.querySelector(".game");

//score
const score = document.getElementById("score");


//animations

function jump() 
{    if (dino.classList!="jump") {
        dino.classList.add("jump");
    
        
        setTimeout(function() {
            dino.classList.remove("jump");
        },500)
        
    }
}

function arena() {
    if (cactus.classList!="arena") {
        cactus.classList.add("arena");
    }
}

addEventListener("click" ,  function() {
        if (game.classList!="baslangic") 
        {   
            dino.style.background = "url('dino.gif')";
            dino.style.backgroundSize = "cover";
            game.classList.add("baslangic");
            game.style.width = "70%";
            
            arena();
            jump();
        }
})

//lose mecanizm

var lose =setInterval(function() {
    
    //getting objects positions
    
    var dinobBottom = parseInt(window.getComputedStyle(dino)
        .getPropertyValue("bottom"));
        
    var cactusleft = parseInt(window.getComputedStyle(cactus)
        .getPropertyValue("left"));
    //game over    
        if (dinobBottom < 35 &&
            cactusleft > 0 &&
            cactusleft < 70) 
        {   

            dino.style.background = "url('dino.png')";
            cactus.style.display ="none";
            dino.style.backgroundSize = "cover";
            dino.classList.remove("jump()");
            calculate=0;
            alert("Game Over")

}},10);

var calculate = 0;


let scoreCalculate = setInterval(function () {
    if (cactus.classList=="arena"&& cactus.style.display != "none") 
    {
        calculate++;
        console.log(calculate)
       
        score.innerText = "score : " + calculate;

    }
   
},100)











