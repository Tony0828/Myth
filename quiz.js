const questions = [
    {
        question: "You should only drink cold water if you are sick.",
        answers: [
            { text: "True", correct: false},
            { text: "False", correct: false},
         
        ]
    },
    {
        question: "What are the benefits of warm water?",
        answers: [
            { text: "Reduce fever and reduce cough", correct: false},
            { text: "Soothes the throat, helps digestion and clears conjestion", correct: true},
            { text: "Improves immune system and relieves pain", correct: false},
            { text: "Increase energy, maintains blood sugar and pressure", correct: false},
        ]
    },
    {
        question: "How much of our brain do we use everyday?",
        answers: [
            { text: "We have no idea", correct: false},
            { text: "Around 100%", correct: true},
            { text: "Around 10%", correct: false},
            { text: "Around 75%", correct: false},
        ]
    },
    {
        question: "What likely started the myth that we only use 10% of our brain?",
        answers: [
            { text: "Book by William James", correct: true},
            { text: "Research paper by Einstein", correct: false},
            { text: "Book by Camillo Golgi", correct: false},
            { text: "Speech by Max Planck", correct: false},
        ]
    },
    {
        question: "What did scientific studies conclude about sugar and hyperactivity?",
        answers: [
            { text: "Sugar causes hyperactivity in all kids", correct: false},
            { text: "Sugar has no impact of children's hyperactivity", correct: true},
            { text: "Sugar only affects kids with ADHD", correct: false},
            { text: "Sugar only affects 20% of kids and has minimal effects on them", correct: false},
        ]
    },
    {
        question: "How does the confirmation bias make parents believe that sugar makes their kid hyper?",
        answers: [
            { text: "Parents rely on scientific evidence rather than personal observations", correct: false},
            { text: "It does not play a role in keeping this myth alive", correct: false},
            { text: "Parents focus on behaviors that confirm their expectations", correct: true},
            { text: "Parents who believe in the myth unconsciously limit their child’s sugar intake", correct: false},
        ]
    }, 
    {
        question: "What cause the common cold?",
        answers: [
            { text: "Viruses", correct: true},
            { text: "Cold temperatures", correct: false},
            { text: "Bacteria", correct: false},
            { text: "Lack of sunlight", correct: false},
        ]
    },
    {
        question: "Why do more people get sick during the winter?",
        answers: [
            { text: "The cold temperature creates new viruses", correct: false},
            { text: "The wind blows viruses into your body, infecting you", correct: false},
            { text: "Toxins from the snow weakens your immune system", correct: false},
            { text: "More people stay indoors causing it to spread more easily", correct: true},
        ]
    },
    {
        question: "What are the risks of drinking red wine?",
        answers: [
            { text: "The resveratrol in the wine cancels out the negative side effects", correct: false},
            { text: "Contains a harmful bacteria called Listeria", correct: false},
            { text: "Increased risk of liver damage and cancer", correct: true},
            { text: "Drinking red wine can cause major weight gain", correct: false},
        ]
    },
    {
        question: "How can people get the benefits of resveratrol without drinking red wine?",
        answers: [
            { text: "Eating grapes and berries", correct: true},
            { text: "Drinking milk", correct: false},
            { text: "Drinking coffee", correct: false},
            { text: "Eating broccoli, red peppers and purple cabbages", correct: false},
        ]
    },
    {
        question: "Why does the sun appear yellow to us?",
        answers: [
            { text: "Debree and dust in space filters out the other colours of light", correct: false},
            { text: "The earths atmosphere scatters the shorter wave lengths of light leaving behind yellow", correct: true},
            { text: "The earths atmosphere only absorbs yellow light", correct: false},
            { text: "The earths atmosphere scatters the longer wave lengths of light leaving behind yellow", correct: false},
        ]
    },
    {
        question: "Why does the sun change colour during sunset and sunrise?",
        answers: [
            { text: "The sun is farther away affecting what light reaches you", correct: false},
            { text: "The components of the atmosphere changes throughout the day", correct: false},
            { text: "The sun goes through phases, often changing colour", correct: false},
            { text: "The sunlight travels throught a thicker layer of the atmosphere", correct: true},
        ]
    },
    {
        question: "How do puppies age compared to older dogs?",
        answers: [
            { text: "They age faster as they get older", correct: false},
            { text: "Older dogs age faster than puppies", correct: false},
            { text: "They age faster when they are puppies", correct: true},
            { text: "They age at a similar speed", correct: false},
        ]
    },
    {
        question: "What size of dogs tend to live the longest",
        answers: [
            { text: "Larger breeds", correct: false},
            { text: "Smaller breeds", correct: true},
            { text: "Medium sized breeds", correct: false},
            { text: "All live a similar length of time", correct: false},
        ]
    },
    {
        question: "Which fish can remember the scent of their birthplace?",
        answers: [
            { text: "Tuna", correct: false},
            { text: "Salmon", correct: true},
            { text: "Octopus", correct: false},
            { text: "Sunfish", correct: false},
        ]
    },
    {
        question: "Why do people belive that fishes have a terrible memory?",
        answers: [
            { text: "The perform repeating behaviors such as wimming in circles", correct: true},
            { text: "Their brains are too small to have a good memory", correct: false},
            { text: "There is no scientific research on their memory", correct: false},
            { text: "Fishes cannot learn from past experiences", correct: false},
        ]
    },
    {
        question: "Why do people shrink as they age?",
        answers: [
            { text: "Gravity slowly compresses the body over time", correct: false},
            { text: "Spinal discs gets compressed and bones get less dense", correct: true},
            { text: "The immune system weakens", correct: false},
            { text: "The body absorbs the calcium from the bones, making them smaller", correct: false},
        ]
    },
    {
        question: "How much height does a person typically lose?",
        answers: [
            { text: "0.5-1 inch", correct: false},
            { text: "2.5-5 inches", correct: false},
            { text: "3-4 inches", correct: false},
            { text: "1-3 inches", correct: true},
        ]
    },
    {
        question: "How much energy does our brain use?",
        answers: [
            { text: "Around 5%", correct: false},
            { text: "Around 20%", correct: true},
            { text: "Around 10%", correct: false},
            { text: "Around 35%", correct: false},
        ]
    },
    {
        question: "What is the scattering of the light from the atmosphere called?",
        answers: [
            { text: "Solar scattering", correct: false},
            { text: "Volta diffusion", correct: false},
            { text: "Rayleigh scattering", correct: true},
            { text: "Atmospheric reflection", correct: false},
        ]
    },
    {
        question: "At around what age do people start shrinking?",
        answers: [
            { text: "70s", correct: false},
            { text: "30s", correct: true},
            { text: "20s", correct: false},
            { text: "60s", correct: false},
        ]
    },
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
    nextButton.innerHTML = "Try Again";
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

