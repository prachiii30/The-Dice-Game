var random_no1=Math.floor(Math.random()*6)+1;
var randomimageDice1="./images/dice"+ random_no1 +".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimageDice1);

var random_n2=Math.floor(Math.random()*6)+1;
var randomimageDice2="./images/dice"+random_n2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimageDice2);

if(random_no1>random_n2){
    document.querySelector("h1").innerHTML="🚩 Player1 Wins!"
}
else if(random_n2>random_no1){
    document.querySelector("h1").innerHTML="🚩 Player2 Wins!"
}
else{
    document.querySelector("h1").innerHTML="☠️ Match Draw!"
}
 

