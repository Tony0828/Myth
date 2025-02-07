const questions = [
    {
        question: "What color is the sun when observed from space?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Shawn", correct: true},
            { text: "SpongeBob Squarepants", correct: false},
            { text: "Poseidon", correct: false},
        ]
    },
    {
        question: "tony?",
        answers: [
            { text: "Shasrk", correct: false},
            { text: "Shawsdan", correct: true},
            { text: "SpongeBdaob Squarepants", correct: false},
            { text: "Poseidon", correct: false},
        ]
    },
    {
        question: "What is the 400m im world record?",
        answers: [
            { text: "Shaadrk", correct: false},
            { text: "Shawdan", correct: true},
            { text: "SpondageBob Squarepants", correct: false},
            { text: "Posedaidon", correct: false},
        ]
    },
    {
        question: "Who lives in the Pineapple under the sea?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Shawadn", correct: true},
            { text: "SpdaongeBob Squarepants", correct: false},
            { text: "Poseidon", correct: false},
        ]
    },
    {
        question: "Who lives in the Pineapple under the sea?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Shadawn", correct: true},
            { text: "SpongeBob Squarepants", correct: false},
            { text: "Poseidon", correct: false},
        ]
    },
    {
        question: "Who lives in the Pineapple under the sea?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Shadawn", correct: true},
            { text: "SpongeBob Squarepants", correct: false},
            { text: "Poseidon", correct: false},
        ]
    }, 
    {
        question: "Who lives in the Pineapple under the sea?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Sdahawn", correct: true},
            { text: "SpongeBob Squarepants", correct: false},
            { text: "Poseidon", correct: false},
        ]
    },
    {
        question: "Who lives in the Pineapple under the sea?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Shadawn", correct: true},
            { text: "SpongeBob Squarepants", correct: false},
            { text: "Poseidon", correct: false},
        ]
    },
    {
        question: "Who lives in the Pineapple under the sea?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Shadawn", correct: true},
            { text: "SpongeBob Squarepants", correct: false},
            { text: "Poseidon", correct: false},
        ]
    },
    {
        question: "Who lives in the Pineapple under the sea?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Shawn", correct: true},
            { text: "SpodangeBob Squarepants", correct: false},
            { text: "Poseidon", correct: false},
        ]
    },
    {
        question: "Who lives in the Pineapple under the sea?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Shawn", correct: true},
            { text: "SpondageBob Squarepants", correct: false},
            { text: "Poseidon", correct: false},
        ]
    },
    {
        question: "Who lives in the Pineapple under the sea?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Shawn", correct: true},
            { text: "SpongeBob Squarepants", correct: false},
            { text: "Posedaidon", correct: false},
        ]
    },
    {
        question: "Who lives in the Pineapple under the sea?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Shawn", correct: true},
            { text: "SpongeBob Squarepants", correct: false},
            { text: "Posedidon", correct: false},
        ]
    },
    {
        question: "Who lives in the Pineapple under the sea?",
        answers: [
            { text: "Shdaark", correct: false},
            { text: "Shawn", correct: true},
            { text: "SpongeBob Squarepants", correct: false},
            { text: "Poseidon", correct: false},
        ]
    },
    {
        question: "Who lives in the Pineapple under the sea?",
        answers: [
            { text: "Shadark", correct: false},
            { text: "Shawn", correct: true},
            { text: "SpongeBob Squarepants", correct: false},
            { text: "Poseidon", correct: false},
        ]
    },
    {
        question: "Who lives in the Pineapple under the sea?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Shadawn", correct: true},
            { text: "SpongeBob Squarepants", correct: false},
            { text: "Poseidon", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
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

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
        }else{
            startQuiz();
        }
});


startQuiz();

