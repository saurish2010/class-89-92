player1_input=localStorage.getItem("player1_input");
player2_input=localStorage.getItem("player2_input");
var player1_score=0;
var player2_score=0;
document.getElementById("Player1_name").innerHTML=player1_input+":";
document.getElementById("Player2_name").innerHTML=player2_input+":";
document.getElementById("Player1_score").innerHTML=Player1_score;
document.getElementById("Player2_score").innerHTML=player2_score;
document.getElementById("Player_Question").innerHTML="Question turn-"+player1_input;
document.getElementById("Player_Answer").innerHTML="Answer turn-"+player2_input;
function send(){
 get_word=document.getElementById("word").value;
 word=get_word.toLowerCase();
 console.log("word in lowercase="+word);
}
charAt1=word.CharAt(1);
console.log(CharAt1);
 
length_divide_2=Math.floor(word.length/2);
charAt2=word.charAt(length_divide_2);
console.log(charAt2);

var length_minus_1=word.length-1;
charAt3=word.charAt(length_minus_1);
console.log(charAt3);

remove_charAt1=word.replace(charAt1,"_");
remove_charAt2=remove_charAt1.replace(charAt2,"_");
remove_charAt3=remove_charAt2.replace(charAt3,"_");
console.log(remove_charAt3);

question_word = "<h4 id='word_display'>Q. "+remove_charAt3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("word").value = "";

    question_turn="player1";
	answer_turn="player2";

    function check(){
        get_answer=document.getElementById("input_check_box").value;
        answer=get_word.toLowerCase();
        console.log("answer in lowercase="+answer);
        
        if(answer==word)
        {
            if(answer_turn=="player1")
            {
                player1_score=player1_score+1;
                document.getElementById("Player1_score").innerHTML=player1_score;
            }
            else 
            {
                player2_score=player2_score+1;
                document.getElementById("Player2_score").innerHTML=player2_score;
            }
        }
        if(question_turn=="player1")
        {
            question_turn="player2";
            document.getElementById("player_question").innerHTML="Question turn-"+player2_input;
        }
        else{
            question_turn="player1";
            document.getElementById("player_question").innerHTML="Question turn-"+player1_input;
        
        }
        if(answer_turn=="player1")
        {
            answer_turn="player2";
            document.getElementById("player_answer").innerHTML="answer turn-"+player2_input;
        }
        else{
            question_turn="player2";
            document.getElementById("player_question").innerHTML="Question turn-"+player1_input;
        
        }
    }