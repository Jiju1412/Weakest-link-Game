let bankAmount = 0;
let roundAmount = 0;
let currentamountLevels = 0;
let secondsLeft=120;
let correctAnswer=0;

const questions = new Array();

// PUT ROUND 2 QUESTIONS AND CORRECT ANSWER HERE

questions.push(new Array("In Harry Potter, who plays Nearly Headless Nick in the movie?","John Cleese"));
questions.push(new Array(" In Harry Potter who plays Mr. Ollivander, the wand maker and merchant in Diagon Alley in the movie?","John Hurt"));
questions.push(new Array("In Harry Potter, who plays Hagrid in the movie?","Robbie Coltrane"));
questions.push(new Array("In Harry Potter who plays Ron Weasley in the movie?","Rupert Grint"));
questions.push(new Array("In Harry Potter, who plays Albus Dumbledore in the movie?","Richard Harris"));
questions.push(new Array("In 'The Sorcerer's Stone' who plays Hermione Granger in the movie?","Emma Watson"));
questions.push(new Array("In 'The Sorcerer's Stone' besides a cake, what does Hagrid get Harry for his birthday?","An owl"));
questions.push(new Array("Who directed the movie 'Goblet of Fire'?","Mike Newell"));
questions.push(new Array("In 'Goblet of Fire', at the end of what task does Ron make up with Harry?","First"));
questions.push(new Array(" In 'Goblet of Fire', how does Wormtail bind Harry to Tom Riddle's grave?","With grim reaper"));
questions.push(new Array("In 'Goblet of Fire', when Harry saw Viktor in the maze, what color were Viktor's eyes?","White"));
questions.push(new Array("In 'Goblet of Fire', who tells Harry to use gillyweed?","Neville"));
questions.push(new Array("In 'Goblet of Fire',Hermione said Everything is going to change, isn't it? What was Harry's response to Hermione?","Yes"));
questions.push(new Array("During the second task, what charm does Cedric use to help him breathe underwater?","Bubblehead charm"));
questions.push(new Array("What does Filch do repeatedly throughout the film?","Lets the cannon off too early"));


const answers = new Array();

// PUT ROUND 2 ANSWER CHOICES AND CORRECT ANSWER HERE

answers.push(shuffleArray(new Array("Nick Nolte","Nicholas Cage","John Cleese","John Hurt")));
answers.push(shuffleArray(new Array("John Hurt","John Cleese","George Harrison","Tom Cruise")));
answers.push(shuffleArray(new Array("Robert DeNiro","John Coltrane","John Cleese","Robbie Coltrane")));
answers.push(shuffleArray(new Array("Robert Grant","Rupert Grint","Robin Pinter","Macaulay Culkin")));
answers.push(shuffleArray(new Array("Richard Burton","Harrison Ford","Richard Harris","Richard Dreyfuss")));
answers.push(shuffleArray(new Array("Emma Watson","Emma Thompson","Emily Watson","Emma Woodhouse")));
answers.push(shuffleArray(new Array("A wand","An owl","A broomstick","Books")));
answers.push(shuffleArray(new Array("Stuart Craig","David Barron","David Heyman","Mike Newell")));
answers.push(shuffleArray(new Array("They never had a fight","Second","First","Third")));
answers.push(shuffleArray(new Array("With rope","With snake skin","With grim reaper","Magically")));
answers.push(shuffleArray(new Array("White","Black","Brown","Red")));
answers.push(shuffleArray(new Array("Neville","Mad-Eye Moody","Hermione","Dobby")));
answers.push(shuffleArray(new Array("Yes","I doubt it","No","Probably")));
answers.push(shuffleArray(new Array("Aquavictora charm","Gillyweed charm","Bubblehead charm","Sharkhead charm")));
answers.push(shuffleArray(new Array("Lets the cannon off too early","Bumps into Dumbledore","Chokes on his drink","Plays the music too early")));



// storing amount level

const amountLevels = new Array();

amountLevels.push("0");
amountLevels.push("1000");
amountLevels.push("5000");
amountLevels.push("10000");
amountLevels.push("50000");
amountLevels.push("75000");
amountLevels.push("125000");
amountLevels.push("250000");
amountLevels.push("500000");


if(localStorage.getItem("PlayerName"))
{
	document.querySelector(".user-info").innerText = "Welcome " + localStorage.getItem("PlayerName");
}

/**
 * Shuffles array in place.
  */
function shuffleArray(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}


// Display Next Question

const showQuestion=function()
{
	if(questions.length>0)
	{
		let questionNo = Math.floor(Math.random() * questions.length ) ;
		let answersOptions = answers[questionNo];
		document.querySelector(".question-text").innerText=questions[questionNo][0];
		document.querySelector("#answer1").innerText=answersOptions[0];
		document.querySelector("#answer2").innerText=answersOptions[1];
		document.querySelector("#answer3").innerText=answersOptions[2];
		document.querySelector("#answer4").innerText=answersOptions[3];
		
		correctAnswer = questions[questionNo][1];
		
		questions.splice(questionNo,1);
		answers.splice(questionNo,1);
	}
	else{
		addToBank();
			
			
		location.href="round2.html";
		
	}
}
  
 // timer function
 
 const timer = setInterval(changeTime, 1000);
 
 function changeTime()
 {
	 secondsLeft--;
	 
	 
		if(secondsLeft<=0 && bankAmount>0 )
		{
			addToBank();
			
			location.href="round2.html";
			
		}
		else if(secondsLeft<=0 && bankAmount==0)
		{
			location.href="lose.html";
		}
	 document.querySelector("#timer").innerText=secondsLeft;
 }
 
 // If user give correct answer, add amount to his winning amount
 
 function addToRoundAmount()
 {
	 document.querySelector("#amount-level-"+currentamountLevels).classList.remove('current-amount-level');
	 
	 currentamountLevels++;
	 document.querySelector("#amount-level-"+currentamountLevels).classList.add('current-amount-level');
	 roundAmount=parseInt(roundAmount) + parseInt(amountLevels[currentamountLevels]);
	 document.querySelector("#winningamount").innerText="$" + roundAmount;
	 
	 
 }

// making winning amount to zero on wrong answer

 function makeRoundAmountZero()
 {
	 roundAmount=0;
	 
	 document.querySelector("#winningamount").innerText="$" + roundAmount;

	 document.querySelector("#amount-level-"+currentamountLevels).classList.remove('current-amount-level');
	 
	 	 currentamountLevels=0;
	 document.querySelector("#amount-level-"+currentamountLevels).classList.add('current-amount-level');
	 
	 
 }

// Checking if user has clicked correct answer

function checkAnswer1(){
	if(document.querySelector("#answer1").innerText==correctAnswer)
	{
		addToRoundAmount();
		console.log("correct");
	}
	else{
		makeRoundAmountZero();
	}
	showQuestion();
}
function checkAnswer2(){
	if(document.querySelector("#answer2").innerText==correctAnswer)
	{
		addToRoundAmount();
		console.log("correct");
	}
	else{
		makeRoundAmountZero();
	}
	showQuestion();
}
function checkAnswer3(){
	console.log(document.querySelector("#answer3").innerText+"=="+correctAnswer);
	if(document.querySelector("#answer3").innerText==correctAnswer)
	{
		addToRoundAmount();
		console.log("correct");
	}
	else{
		makeRoundAmountZero();
	}
	showQuestion();
}
function checkAnswer4(){
	if(document.querySelector("#answer4").innerText==correctAnswer)
	{
		addToRoundAmount();
		console.log("correct");
	}
	else{
		makeRoundAmountZero();
	}
	showQuestion();
}

// Add to bank event listener

const addToBank=function()
{
		
		
		bankAmount=parseInt(bankAmount)+parseInt(roundAmount);
		localStorage.setItem("bankAmount", bankAmount);
		if(bankAmount>500000)
		{
				bankAmount=500000;
				localStorage.setItem("bankAmount", bankAmount);
				location.href="round2.html";
		}
		
		document.querySelector("#bank").innerText="Amount in Bank: $"+bankAmount;
		
		makeRoundAmountZero();
}

showQuestion();
document.querySelector("#answer1").addEventListener("click", checkAnswer1);
document.querySelector("#answer2").addEventListener("click", checkAnswer2);
document.querySelector("#answer3").addEventListener("click", checkAnswer3);
document.querySelector("#answer4").addEventListener("click", checkAnswer4);

document.querySelector("#btnBankIt").addEventListener("click", addToBank);
