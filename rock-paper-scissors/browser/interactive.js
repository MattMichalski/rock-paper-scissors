
class Player {
    constructor(name, wins, losses, draws, score, result){
        this.name = name;
        this.score = 0;
        this.wins = 0;
        this.losses = 0;
        this.draws = 0;
        this.result = "";
        this.selection = "";
    }

    win(){
        this.wins += 1;
    }

    lose(){
        this.losses += 1;
    }

    draw(){
        this.draws += 1;
    }

    scores(){
        this.score += 1;
    }
    players(){
        console.log("This is " + this.name);
    }
}

let comp = new Player("Computer");

function startGame(){
    let user = document.getElementById("playerName").value
    if (user == ""){
        window.alert("Please enter your name");
        return false;
    }
    let playerOne = new Player(user)
    document.getElementById("register").remove();

    //////////////////////////////////////////////////////////////  ROW 1
    let row = document.createElement("div");
    row.className = "row justify-content-center mt-3";
    row.id = "r1";
    let column = document.createElement("div");
    column.className = "col col-lg-12";
    row.appendChild(column);

    let head = document.createElement("h1");
    head.innerHTML = "Welcome! Who Will Win 10 Rounds?!"
    column.appendChild(head);


    /////////////////////////////////////////////////////////////   ROW 2
    let row2 = document.createElement("div");
    row2.className = "row justify-content-center game mt-3";
    row2.id = "r2";
    let column1 = document.createElement("div");
    column1.className = "col col-lg-4";
    let head1 = document.createElement("h1");
    head1.className = "my-2";
    head1.innerHTML = playerOne.name;
    let win1 = document.createElement("h3");
    win1.className = "mt-3";
    win1.innerHTML = "Wins: " + playerOne.wins;
    let draw1 = document.createElement("h3");
    draw1.className = "mt-2";
    draw1.innerHTML = "Draws: " + playerOne.draws;
    let playerSelection = document.createElement("h2");
    playerSelection.id = "playerDecision";
    playerSelection.style.visibility = "hidden";
    playerSelection.innerHTML = "desicions";
   
    

    
    column1.appendChild(head1);
    column1.appendChild(win1);
    //column1.appendChild(lose1);
    column1.appendChild(draw1);
    column1.appendChild(playerSelection);


    row2.appendChild(column1);


    let column2 = document.createElement("div");
    column2.className = "col col-lg-4 offset-lg-4";
    let head2 = document.createElement("h1");
    head2.className = "my-2";
    head2.innerHTML = comp.name;
    let win2 = document.createElement("h3");
    win2.className = "mt-3"
    win2.innerHTML = "Wins: " + comp.wins;
    let draw2 = document.createElement("h3");
    draw2.className = "mt-2";
    draw2.innerHTML = "Draws: " + comp.draws;
    let computerSelection = document.createElement("h2");
    computerSelection.id = "compDecision";
    computerSelection.style.visibility = "hidden";
    computerSelection.innerHTML = "decisions";
    
    

    column2.appendChild(head2);
    column2.appendChild(win2);
    column2.appendChild(draw2);
    column2.appendChild(computerSelection);



    row2.appendChild(column2);


    let container = document.getElementById("contain");
    container.appendChild(row);
    container.appendChild(row2);
    ///////////////////////////////////////////////////////////////// ROW 3
    let row3 = document.createElement("div")
    row3.className = "row justify-content-center game my-5";
    row3.id = "r3";
    let col1 = document.createElement("div");
    col1.className = "col col-lg-4";
    let rockbtn = document.createElement("button");
    rockbtn.className = "btn btn-primary btn-lg px-5 my-3";
    rockbtn.innerHTML="Rock";
    rockbtn.onclick = function rok(){
        playerOne.selection = "rock";
        playerSelection.innerHTML = playerOne.selection;
        playerSelection.style.visibility = "visible";
        let x = Math.floor(Math.random() * 3 - 1 +1)+1;
        if (x === 1){
            comp.selection = "rock";
       }else if (x === 2){
            comp.selection = "paper";
       }else if (x === 3){
            comp.selection = "scissors";
       }
       computerSelection.innerHTML = comp.selection;
       computerSelection.style.visibility = "visible";
       results(playerOne.selection, comp.selection);
       winner();
    }

    col1.appendChild(rockbtn);
    row3.appendChild(col1);

    let col2 = document.createElement("div");
    col2.className = "col col-lg-4";
    let paperbtn = document.createElement("button");
    paperbtn.className = "btn btn-primary btn-lg px-5 my-3";
    paperbtn.innerHTML = "Paper";
    paperbtn.onclick = function pap(){
        playerOne.selection = "paper";
        playerSelection.innerHTML = playerOne.selection;
        playerSelection.style.visibility = "visible";
        let x = Math.floor(Math.random() * 3 - 1 +1)+1;
        if (x === 1){
            comp.selection = "rock";
       }else if (x === 2){
            comp.selection = "paper";
       }else if (x === 3){
            comp.selection = "scissors";
       }
       computerSelection.innerHTML = comp.selection;
       computerSelection.style.visibility = "visible";
       results(playerOne.selection, comp.selection);
       winner();
    }
    col2.appendChild(paperbtn);
    row3.appendChild(col2);

    let col3 = document.createElement("div");
    col3.className = "col col-lg-4";
    let scissorsbtn = document.createElement("button");
    scissorsbtn.className = "btn btn-primary btn-lg px-5 my-3";
    scissorsbtn.onclick = function scis(){
        playerOne.selection = "scissors";
        playerSelection.innerHTML = playerOne.selection;
        playerSelection.style.visibility = "visible";
        let x = Math.floor(Math.random() * 3 - 1 +1)+1;
        if (x === 1){
            comp.selection = "rock";
       }else if (x === 2){
            comp.selection = "paper";
       }else if (x === 3){
            comp.selection = "scissors";
       }
       computerSelection.innerHTML = comp.selection;
       computerSelection.style.visibility = "visible";

       results(playerOne.selection, comp.selection);
       winner();
    }
    
    scissorsbtn.innerHTML="Scissors";
    col3.appendChild(scissorsbtn);
    row3.appendChild(col3);

    container.appendChild(row3);






function results(x, y){
    if (x === y){
        playerOne.draw();
        comp.draw();
        draw1.innerHTML = "Draws: " + playerOne.draws;
        draw2.innerHTML = "Draws: " + comp.draws;
    }

    else if(x === "rock"){
        if(y === "paper"){
            comp.win();
            playerOne.lose();
            win2.innerHTML = "Wins: " + comp.wins;          
        }else{
            playerOne.win();
            comp.lose();
            win1.innerHTML = "Wins: " + playerOne.wins;
        }
    }

    else if(x === "paper"){
        if(y === "scissors"){
            comp.win();
            playerOne.lose();
            win2.innerHTML = "Wins: " + comp.wins; 
        }else{
            playerOne.win();
            comp.lose();
            win1.innerHTML = "Wins: " + playerOne.wins;
        }
    }

    else if(x === "scissors"){
        if(y === "rock"){
            comp.win();
            playerOne.lose();
            win2.innerHTML = "Wins: " + comp.wins;
        }else{
            playerOne.win();
            comp.lose();
            win1.innerHTML = "Wins: " + playerOne.wins; 
        }
    }

    
}

function winner(){
    if (playerOne.wins === 10){
        let container = document.getElementById("contain");
        let x = document.getElementById("r1");
        x.remove(); 
        let y = document.getElementById("r2");
        y.remove(); 
        let z = document.getElementById("r3");
        z.remove(); 
        console.log(playerOne.name+" won!");
        let row = document.createElement("div");
        row.className = "row justify-content-center my-5";
        let col = document.createElement("div");
        col.className = "col col-lg-12 my-5";
        let display = document.createElement("h1");
        display.innerHTML = "Congratulations, " + "you won " + playerOne.name + "!" + " You are the Champion!";
        let again = document.createElement("button");
        again.className = "btn btn-primary btn-lg my-5 px-5";
        again.innerHTML = "Play Again!";
        again.onclick = function playAgain(){
            window.location.reload(true);
        };
        let close = document.createElement("button");
        close.className = "btn btn-outline-dark btn-lg px-5 mx-5";
        close.innerHTML = "Close Game";
        close.onclick = function closeGame(){
            window.top.close(true);
        };
        col.appendChild(display);
        col.appendChild(again);
        col.appendChild(close);
        row.appendChild(col);
        container.appendChild(row);

         return true;
    }else if (comp.wins === 10){
        let x = document.getElementById("r1");
        x.remove();
        let y = document.getElementById("r2");
        y.remove(); 
        let z = document.getElementById("r3");
        z.remove();  
        console.log(comp.name+" won!");
        let row = document.createElement("div");
        row.className = "row justify-content-center my-5";
        let col = document.createElement("div");
        col.className = "col col-lg-12 my-5";
        let display = document.createElement("h1");
        display.className = "align-items-center"
        display.innerHTML = "The " + comp.name + " won. Try Again to Earn the Title of Champion!";
        let again = document.createElement("button");
        again.className = "btn btn-primary btn-lg my-5 px-5 align-items-center";
        again.innerHTML = "Play Again!";
        again.onclick = function playAgain(){
            window.location.reload(true);
        };
        let close = document.createElement("button");
        close.className = "btn btn-outline-dark btn-lg mx-5 px-5";
        close.innerHTML = "Close Game";
        close.onclick = function closeGame(){
            window.top.close(true);
        };

        col.appendChild(display);
        col.appendChild(again);
        col.appendChild(close);
        row.appendChild(col);
        container.appendChild(row);
         return true;
    }
    return false;

 }
}

