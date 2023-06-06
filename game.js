players1_name = localStorage.getItem("player1_name");
players2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

setTimeout(SetStuff, 500)

function SetStuff()
{
    document.getElementById("player1_name").innerHTML = players1_name +  ": ";
    document.getElementById("player2_name").innerHTML = players2_name +  ": ";

    document.getElementById("player1_score").innerHTML = player1_score;
    document.getElementById("player2_score").innerHTML = player2_score;

    document.getElementById("player_question").innerHTML = "Question Turn - " + players1_name;
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + players2_name;
}

function send()
{

    number1 = document.getElementById("answerInput1").value;
    number2 = document.getElementById("answerInput2").value;

    actualAnswer = parseInt(number1)*parseInt(number2);
    
    questionWord = "<h4 style='font-weight: 600'> Q. " + number1 + " X " + number2 + "</h4>";
    inputBox = "<br> Answer: <input id='input_answer' type='number' placeholder='Answer'";
    button = "<br><br><br><button class='btn btn-danger' onclick='check()'>Check<button>";

    row = questionWord + inputBox + button;
    document.getElementById("output").innerHTML = row;

    document.getElementById("answerInput1").value = " ";
    document.getElementById("answerInput2").value = " ";
}

questionTurn = "player1";
answerTurn = "player2";