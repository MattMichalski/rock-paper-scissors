class Player {
    constructor(name, wins, loses, draws, score){
        this.name = name;
        this.score = 0;
        this.wins = 0;
        this.loses = 0;
        this.draws = 0;
    }

    win(){
        this.wins += 1;
    }

    lose(){
        this.loses += 1;
    }

    draw(){
        this.draws += 1;
    }

    scores(){
        this.score += 1;
    }
    players(){
        console.log("This is " + this.name);
        console.log("");
    }
}

let player1 = new Player("Player 1");
let player2 = new Player("Computer");


function result(x, y){
    console.log(x);
    console.log(y);
    if (x === y){
        player1.draw();
        player2.draw();
        let p1 = roundx();
        let p2 = roundy();
        result(p1, p2);
    }

    else if(x === "rock"){
        if(y === "paper"){
            player2.win();
            player1.lose();         
        }else{
            player1.win();
            player2.lose();
        }
    }

    else if(x === "paper"){
        if(y === "scissors"){
            player2.win();
            player1.lose(); 
        }else{
            player1.win();
            player2.lose();
        }
    }

    else if(x === "scissors"){
        if(y === "rock"){
            player2.win();
            player1.lose();
        }else{
            player1.win();
            player2.lose();   
        }
    }
    
}


function winner(){
   if (player1.wins === 10){
        console.log(player1.name+" won!");
   }else if (player2.wins === 10){
        console.log(player2.name+" won!");
   }else{
        let p1 = roundx();
        let p2 = roundy();
        result(p1, p2);
        winner();
   }

}

function roundx(){
    let x = Math.floor(Math.random() * 3 - 1 +1)+1
    if (x === 1){
        x = "rock";
   }else if (x === 2){
        x = "paper";
   }else if (x === 3){
        x = "scissors";
   }
   return x
}

function roundy(){
    let y = Math.floor(Math.random() * 3 - 1 +1)+1
    if (y === 1){
        y = "rock";
   }else if (y === 2){
        y = "paper";
   }else if (y === 3){
        y = "scissors";
   }
   return y
}

let p1 = roundx();
let p2 = roundy();
result(p1, p2);
winner();
console.log("Game Over")