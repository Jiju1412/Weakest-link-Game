let bankAmount = 0;
let secondsLeft=60;
let correctAnswer=0;

if( localStorage.getItem("bankAmount"))
{
	bankAmount=localStorage.getItem("bankAmount");
	if(bankAmount<=0)
	{
		location.href="index.html";
	}
	document.querySelector("#bank").innerText="Amount in Bank: $"+bankAmount;
}
const questions = new Array();

// PUT ROUND 2 QUESTIONS AND CORRECT ANSWER HERE

questions.push(new Array("The sampling rate, (how many samples per second are stored) for a CD is...?","44.1 kHz"));
questions.push(new Array("Compact discs, (according to the original CD specifications) hold how many minutes of music?","74 mins"));
questions.push(new Array("The base 10 (or decimal - our normal way of counting) number 65535 is represented in hexadecimal as...?","0xFFFF"));
questions.push(new Array("Where is the headquarters of Microsoft located?","Santa Clara, California"));
questions.push(new Array("In what year was the @ chosen for its use in e-mail addresses?","1972"));
questions.push(new Array("'.BAK' extension refers usually to what kind of file?","Backup file"));
questions.push(new Array("'.MPG' extension refers usually to what kind of file?","Movie file"));
questions.push(new Array("'.JPG' extension refers usually to what kind of file?","Image file"));
questions.push(new Array("Who co-founded Hotmail in 1996 and then sold the company to Microsoft?","Sabeer Bhatia"));
questions.push(new Array("Who co-created the UNIX operating system in 1969 with Dennis Ritchie?","Alan Turing"));


// PUT ROUND 2 ANSWER CHOICES AND CORRECT ANSWER HERE

const answers = new Array();

answers.push(shuffleArray(new Array("44.1 kHz","22,050 Hz","48.4 kHz","48 kHz")));
answers.push(shuffleArray(new Array("56 mins","74 mins","60 mins","90 mins")));
answers.push(shuffleArray(new Array("0xFFFF","0xFFFFF","0xFFF","0xFFFFFF")));
answers.push(shuffleArray(new Array("Redmond, Washington","Richmond, Virginia","Tucson, Arizona","Santa Clara, California")));
answers.push(shuffleArray(new Array("1980","1971","1976","1972")));
answers.push(shuffleArray(new Array("Backup file","Audio file","Animation/movie file","MS Encarta document")));
answers.push(shuffleArray(new Array("WordPerfect Document file","MS Office document","Image file","Movie file")));
answers.push(shuffleArray(new Array("Image file","MS Encarta document","Movie file","System file")));
answers.push(shuffleArray(new Array("Shawn Fanning","Sabeer Bhatia","Ada Byron Lovelace","Ray Tomlinson")));
answers.push(shuffleArray(new Array("George Boole","Jeff Bezos","Alan Turing","Charles Babbage")));






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
		
		document.querySelector("#pendingQuestions").innerText=questions.length;
	}
	else{
			location.href="won.html";
	}
}
  
 
 // Timer function
 
 const timer = setInterval(changeTime, 1000);
  
 
 function changeTime()
 {
	 secondsLeft--;
	 
	 
		if(secondsLeft<=0 && questions.length==0 )
		{
			location.href="won.html";
		}
		else if(secondsLeft<=0 && questions.length>0)
		{
			location.href="lose.html";
		}
	 document.querySelector("#timer").innerText=secondsLeft;
 }
 


// Checking if user has clicked correct answer

function checkAnswer1(){
	if(document.querySelector("#answer1").innerText!=correctAnswer)
	{
		localStorage.setItem("bankAmount", "0");
		location.href="lose.html";
	}
	else{
			showQuestion();
	}
	
}
function checkAnswer2(){
	if(document.querySelector("#answer2").innerText!=correctAnswer)
	{
			localStorage.setItem("bankAmount", "0");
		location.href="lose.html";
	}
	else{
		showQuestion();
	}
	
}
function checkAnswer3(){
	console.log(document.querySelector("#answer3").innerText+"=="+correctAnswer);
	if(document.querySelector("#answer3").innerText!=correctAnswer)
	{
		localStorage.setItem("bankAmount", "0");
		location.href="lose.html";
		
	}
	else{
	showQuestion();	
	}
	
}
function checkAnswer4(){
	if(document.querySelector("#answer4").innerText!=correctAnswer)
	{
		localStorage.setItem("bankAmount", "0");
		location.href="lose.html";
	}
	else{
		showQuestion();
	}
	
}



showQuestion();
document.querySelector("#answer1").addEventListener("click", checkAnswer1);
document.querySelector("#answer2").addEventListener("click", checkAnswer2);
document.querySelector("#answer3").addEventListener("click", checkAnswer3);
document.querySelector("#answer4").addEventListener("click", checkAnswer4);


