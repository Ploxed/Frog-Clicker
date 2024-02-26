let t = 0;
const interval = 0.1 * 60; // there are 60 ticks per second

var FrogPoints = 0;

var FrogPointsIncrement = 1;

window.addEventListener("load", (event) => {
    console.log("page is loaded");
    var audio = new Audio('BGMusic.mp3');
    audio.volume = 0.1;
    audio.loop = true;
    audio.play();
    FrogPoints = 0;
    MuchRandomness();
    window.alert("Trying to load data...");
    if(localStorage.getItem('frogpoints') == null)
    {
        window.alert("No save data 😟")
    }
    else if(localStorage.getItem('frogpoints') != null)
    {
        window.alert("Save data found! 🐸")
        FrogPoints = Number(localStorage.getItem('frogpoints'))
        FrogPointsIncrement = Number(localStorage.getItem('frogPointsIncrement'))
    }
});

function Home(){
    window.location.href = "index.html";
}

//Handle Update
function render() {
    if (++t % interval == 0)
      Update()
  
    requestAnimationFrame(render)
  }

function Update()
{
    const frogpointsP = document.getElementById("frogpoints");
    const fpi = document.getElementById("fpi");
    console.log("updated")
    frogpointsP.innerHTML = FrogPoints + " 🐸"
    fpi.innerHTML = "+" + FrogPointsIncrement + " 🐸"


}


function MuchRandomness()
{
    
}

function HandleClick()
{
    FrogPoints = FrogPoints + FrogPointsIncrement
    localStorage.setItem('frogpoints', FrogPoints); 
    var audio = new Audio('ribbit.mp3');
    audio.play();
}

function DeleteProgress()
{
    FrogPoints = 0;
    FrogPointsIncrement = 1;
    localStorage.setItem('frogPointsIncrement', 1);
    var audio = new Audio('Boom.mp3');
    audio.play();
}

//Handles Upgrades
function Upgrade()
{
    window.location.href = "shop.html";
}

function increaseIncrement(Increment, RA)
{
    if(FrogPoints >= RA)
    {
        FrogPointsIncrement = FrogPointsIncrement + Increment;
        localStorage.setItem('frogPointsIncrement', FrogPointsIncrement);
        FrogPoints = FrogPoints - RA;
        localStorage.setItem('frogpoints', FrogPoints); 
        var audio = new Audio('kaChing.mp3');
        audio.play();
        Update();
    }
}

//Final Things - Render starts the update cycle
render();