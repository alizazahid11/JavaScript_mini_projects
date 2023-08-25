const questions = [{
    question: "what is the capital of Pakistan?",
    options: ["islamabad", "karachi", "lahore", "multan"],
    correctIndex: 0
},
{
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctIndex: 1
},
{
    question: "Which is the Largest city of Pakistan?",
    options: ["islamabad", "karachi", "lahore", "multan"],
    correctIndex: 1
}, {
    question: "How many teams are there in psl?",
    options: [7, 3, 6, 5],
    correctIndex: 2
}, {
    question: "most developed country of the world?",
    options: ["china", "japan", "USA", "UAE"],
    correctIndex: 1
}
]
const quizContainer = document.getElementById("quizContainer");
const resultContainer = document.getElementById("resultContainer");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("optionsContainer");
const nextButton = document.getElementById("nextButton");
const scoreElement=document.getElementById("scoreElement")

// Function to start the quiz
function startQuiz() {
    quizContainer.style.display = "block"; // Show the quiz container
    resultContainer.style.display = "none"; // Hide the result container
    showquestion(); // Show the first question
}

// Add event listener to the "Start Quiz" button
const startButton = document.getElementById("submitButton");
startButton.addEventListener("click", startQuiz);

let currentquestion = 0;
let score = 0;
function showquestion() {
    const questiondata = questions[currentquestion];
    questionElement.textContent = questiondata.question;
    optionsContainer.innerHTML = questiondata.options.map((option, index) => `<button>${option}</button>`).join("");
    /*here map iterates over each option in option array &
    generates an HTML button element with 
    the option's text inside it. 
    The ${option} is a template string that inserts the option text into the HTML.
    join ensures that there are no extra separators between the HTML button strings.*/
}
function checkanswer(selectedindex){
if(selectedindex===questions[currentquestion].answer){
    score++;

}
currentquestion++;
if(currentquestion<questions.length){
    showquestion();
}else{
    showresult();
}
}
function showresult(){
    resultContainer.style.display="block";
    scoreElement.textContent=`Your score: ${score} out of ${questions.length}`;
}
nextButton.addEventListener("click",()=>{
    currentquestion=0;
    score=0;
    showquestion();
    resultContainer.style.display = "none"
})
showquestion();