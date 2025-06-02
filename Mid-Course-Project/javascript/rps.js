let scores = JSON.parse(localStorage.getItem('scores'));
        if(!scores){
            scores = {
                playerWins: 0,
                compWins: 0,
                ties: 0
            }
        }
        updateScore();

		function pickCompChoice(compChoice){
			if(compChoice >= 0 && compChoice < (1/3)){
				compMove = 'rock';
			} 
			else if(compChoice >= (1/3) && compChoice < (2/3)){
				compMove = 'paper';
			}
			else if(compChoice >= (2/3) && compChoice < 1){
				compMove = 'scissors';
			}
			return compMove;
		}

        function compareChoice(pM, cM){
            if(pM === 'rock'){
                if(cM == 'rock'){
				    gameResult = 'Tie';
                }
                else if (cM == 'paper'){
                    gameResult = 'Computer Wins!';
                }
                else{
                    gameResult = 'Player Wins!';
                }
            }
            else if(pM === 'paper'){
                if(cM == 'rock'){
                    gameResult = 'Player Wins!';
                }
                else if(cM == 'paper'){
                    gameResult = 'Tie';
                }
                else{
                    gameResult = 'Computer Wins!';
                }
            }
            else{
                if(cM == 'rock'){
                    gameResult = 'Computer Wins!';
                }
                else if(cM == 'paper'){
                    gameResult = 'Player Wins!';
                }
                else{
                    gameResult = 'Tie';
                }
            }
            return gameResult;
        }

        function countScore(result, obj){
            if(result === 'Tie'){
                obj.ties++;
            }
            else if (result === 'Computer Wins!'){
                obj.compWins++;
            }
            else{
                obj.playerWins++;
            }
            localStorage.setItem('scores', JSON.stringify(scores));
            updateScore();
            return obj;
        }   

        function updateScore(){
            document.querySelector('.js-score').innerHTML = 
            `<p>SCORES:</p>
            <p class= "wins-text">Player Wins: ${scores.playerWins}</p> 
            <p class = "wins-text">Computer Wins: ${scores.compWins}</p> 
            <p class = "wins-text">Ties: ${scores.ties}</p>`;
        }

        function updateChoices(playerChoice, computerChoice){
            document.querySelector('.js-choices').innerHTML = 
            `Player: 
            <img class = "move-icon" src = "rps-icons/${playerChoice}-emoji.png">
            Computer:
            <img class = "move-icon" src = "rps-icons/${computerChoice}-emoji.png">`;
        }

        function resultOfGame(gameResult){
            document.querySelector('.js-result').innerHTML = `${gameResult}`;
        }