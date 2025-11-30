//  When the player clicks rock
        let rock = document.querySelector(".rock-btn")
        rock.addEventListener("click", function() {
            let randomNumber = Math.random()
            let computerChoose = randomNumber
            let computerChoice = "";

            if (computerChoose >= 0 && computerChoose <= 1/3 ) {
                computerChoice = "rock";
            }
            else if (computerChoose >= 1/3 && computerChoose <= 2/3) {
                computerChoice = "paper";
            }
            else if (computerChoose >= 2/3 && computerChoose <= 1) {
                computerChoice = "scissors";
            }


            let playerChoice = "rock";
            let result = "";

            if (playerChoice === computerChoice) {
                result = "It is a draw"
            }
            else if (
                (playerChoice === "rock" && computerChoice === "scissors")||
                (playerChoice === "paper" && computerChoice === "rock")||
                (playerChoice === "scissors" && computerChoice === "paper")
            ){
                    result = "You won"
                }

                else {
                    result = "You lost"
                }

                let para = document.querySelector(".paragraph");
                para.textContent = `The computer chose ${computerChoice}. ${result}!`;


})


        //  When the player clicks paper
                let paper = document.querySelector(".paper-btn");
                paper.addEventListener("click", function() {
                    
                    let randomNumber = Math.random();
                    let computerChoose = randomNumber;
                    let computerChoice = "";

                    if (computerChoose >= 0 && computerChoose <= 1/3){
                        computerChoice = "rock";
                    }
                    else if (computerChoose >= 1/3 && computerChoose <= 2/3){
                        computerChoice = "paper";
                    }
                    else if (computerChoose >= 2/3 && computerChoose <= 1) {
                        computerChoice = "scissors"
                    }



                    let playerChoice = "paper";
                    let result = "";
            
                    
                    
                    if (playerChoice === computerChoice) {
                result = "It is a draw"
            }
            else if (
                (playerChoice === "rock" && computerChoice === "scissors")||
                (playerChoice === "paper" && computerChoice === "rock")||
                (playerChoice === "scissors" && computerChoice === "paper")
            ){
                 result = "You won!"
                }

                else {
                    result = "You lost"
                }

                    let para = document.querySelector(".paragraph");
                    para.textContent = `The computer chose ${computerChoice}. ${result}!`;
 
                })



                //  When the player clicks scissors
                let scissors = document.querySelector(".scissors-btn");
                scissors.addEventListener("click", function() {
                    
                    let randomNumber = Math.random();
                    let computerChoose = randomNumber;
                    let computerChoice = "";

                    if (computerChoose >= 0 && computerChoose <= 1/3){
                        computerChoice = "rock";
                    }
                    else if (computerChoose >= 1/3 && computerChoose <= 2/3){
                        computerChoice = "paper";
                    }
                    else if (computerChoose >= 2/3 && computerChoose <= 1) {
                        computerChoice = "scissors"
                    }



                    let playerChoice = "scissors";
                    let result = "";
            
                    
                    
                    if (playerChoice === computerChoice) {
                result = "It is a draw"
            }
            else if (
                (playerChoice === "rock" && computerChoice === "scissors")||
                (playerChoice === "paper" && computerChoice === "rock")||
                (playerChoice === "scissors" && computerChoice === "paper")
            ){
                 result = "You won"
                }

                else {
                    result = "You lost"
                }

                    let para = document.querySelector(".paragraph");
                    para.textContent = `The computer chose ${computerChoice}. ${result}!`;
 
                })

