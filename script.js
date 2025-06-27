const questions = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},  
        ]
    },
    {
        question: "Which is smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true},
            { text: "Bhutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Shri Lanka", correct: false},  
        ]
    },
    {
        question: "Which is largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: false},
            { text: "Sahara", correct: false},
            { text: "Antarctica", correct: true},  
        ]
    },
    {
        question: "Which is smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Austrelia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},  
        ]
    },
    {
        question: "How many wonders in the world?",
        answers: [
            { text: "One", correct: false},
            { text: "Nine", correct: false},
            { text: "Seven", correct: true},
            { text: "Four", correct: false},  
        ]
    },
    {
        question: "Which is the longest river in the world?",
        answers: [
            { text: "Nile", correct: true},
            { text: "Amazon", correct: false},
            { text: "Yangtze", correct: false},
            { text: "Misissippi-Missouri", correct: false},  
        ]
    },
    {
        question: "Which ocean is the largest in the world?",
        answers: [
            { text: "Pacific", correct: true},
            { text: "Atlantic", correct: false},
            { text: "Arctic", correct: false},
            { text: "Southern", correct: false},  
        ]
    },
    {
        question: "Which country has the largest population in the world?",
        answers: [
            { text: "India", correct: false},
            { text: "Japan", correct: false},
            { text: "China", correct: true},
            { text: "Russia", correct: false},  
        ]
    },
    {
        question: "Which is tallest mountain in the world?",
        answers: [
            { text: "Kangchenjunga", correct: false},
            { text: "Mount Everest", correct: true},
            { text: "Lhotse", correct: false},
            { text: "Makalu", correct: false},  
        ]
    },
    {
        question: "How many oceans on the Earth?",
        answers: [
            { text: "Three", correct: false},
            { text: "Seven", correct: false},
            { text: "Five", correct: true},
            { text: "Nine", correct: false},  
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentquestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

//Display the question
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

//Display the answers or option buttons
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";  
}
function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else{
        startQuiz();
    }
})
startQuiz(); //calling this function to display the output