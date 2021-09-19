question_turn="player1";
answer_turn="player2";
player1_name=localStorage.getItem("Player1_name");
player2_name=localStorage.getItem("Player2_name");
update_player1_score=0;
update_player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name;
document.getElementById("player2_name").innerHTML=player2_name;
document.getElementById("player1_score").innerHTML=update_player1_score;
document.getElementById("player2_score").innerHTML=update_player2_score;
document.getElementById("question_turn").innerHTML=question_turn;
document.getElementById("answer_turn").innerHTML=answer_turn;

function send() {
    m1=document.getElementById("m1").value;
    m2=document.getElementById("m2").value;
    actual_answer=parseInt(m1)*parseInt(m2);
    question_number="<h4>"+m1+" X "+m2+"</h4>";
    input="<br> Answer:<input type='number' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check Answer</button>";
    row=question_number+input+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("m1").value="";
    document.getElementById("m2").value="";
}


function check() {
    get_answer=document.getElementById("input_check_box").value;
    if(get_answer==actual_answer)
    {
        if(answer_turn=="player1")
        update_player1_score=player1_score+1;
        document.getElementById("player1_score").innerHTML=update_player1_score;

    }
    else{
        update_player2_score=player1_score+1;
        document.getElementById("player2_score").innerHTML=update_player2_score;
    }
}
if(question_turn=="player1"){
    question_turn="player2"
    document.getElementById("question_turn").innerHTML="Question Turn: "+player2_name;
}
else{
    question_turn="player1"
    document.getElementById("question_turn").innerHTML="Question Turn: "+player1_name;
}
if(answer_turn=="player2"){
    answer_turn="player1"
    document.getElementById("question_turn").innerHTML="Answer Turn: "+player1_name;
}
else{
    answer_turn="player2"
    document.getElementById("answer_turn").innerHTML="Answer Turn: "+player2_name;
}