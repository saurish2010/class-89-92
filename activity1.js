var score=0;
function updatescore() {
     score=score+1;
     document.getElementById("score").innerHTML="Score:"+score;

 }
 function savescore(){
     localStorage.setItem("score",score);
 }
 function Nextpage() {
     window.location="activity2.html";
 }