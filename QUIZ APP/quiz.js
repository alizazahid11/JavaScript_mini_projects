const questions=[{
    question:"what is the capital of Pakistan?",
    options:["islamabad","karachi","lahore","multan"],
    correctIndex:0},
{
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctIndex: 1
},
{
    question: "Which is the Largest city of Pakistan?",
    options: ["islamabad","karachi","lahore","multan"],
    correctIndex: 1
},{
    question: "How many teams are there in psl?",
    options: [7,3,6,5],
    correctIndex: 2
},{
question: "most developed country of the world?",
options: ["china","japan","USA","UAE"],
correctIndex: 1}
]
const quizContainer = document.getElementById("quizContainer");
const resultContainer = document.getElementById("resultContainer");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("optionsContainer");
const nextButton = document.getElementById("nextButton");
