const questions = [
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5"],
        correctAnswer: "4",
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars",
    },
    {
        question: "What is the capital of France?",
        choices: ["Madrid", "Berlin", "Paris"],
        correctAnswer: "Paris",
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        choices: ["Oxygen", "Carbon Dioxide", "Nitrogen"],
        correctAnswer: "Carbon Dioxide",
    },
    {
        question: "What is the largest mammal in the world?",
        choices: ["Elephant", "Giraffe", "Blue Whale"],
        correctAnswer: "Blue Whale",
    },
    {
        question: "Which gas makes up the majority of Earth's atmosphere?",
        choices: ["Oxygen", "Carbon Dioxide", "Nitrogen"],
        correctAnswer: "Nitrogen",
    },
    {
        question: "What is the chemical symbol for gold?",
        choices: ["Au", "Ag", "Fe"],
        correctAnswer: "Au",
    },
    {
        question: "How many continents are there in the world?",
        choices: ["5", "6", "7"],
        correctAnswer: "7",
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Earth", "Mars", "Jupiter"],
        correctAnswer: "Jupiter",
    },
    {
        question: "What is the tallest mountain in the world?",
        choices: ["Mount Everest", "Mount Kilimanjaro", "Mount McKinley"],
        correctAnswer: "Mount Everest",
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci"],
        correctAnswer: "Leonardo da Vinci",
    },
    {
        question: "What is the symbol for the element oxygen?",
        choices: ["O", "Ox", "O2"],
        correctAnswer: "O",
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        choices: ["China", "Japan", "Korea"],
        correctAnswer: "Japan",
    },
    {
        question: "What is the largest organ in the human body?",
        choices: ["Heart", "Liver", "Skin"],
        correctAnswer: "Skin",
    },
    {
        question: "In which year did Christopher Columbus discover America?",
        choices: ["1492", "1620", "1776"],
        correctAnswer: "1492",
    },
    {
        question: "What is the chemical symbol for silver?",
        choices: ["Si", "Ag", "Au"],
        correctAnswer: "Ag",
    },
    {
        question: "Which gas is responsible for the Earth's ozone layer?",
        choices: ["Oxygen", "Carbon Dioxide", "Ozone"],
        correctAnswer: "Ozone",
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        choices: ["William Shakespeare", "Jane Austen", "Charles Dickens"],
        correctAnswer: "William Shakespeare",
    },
    {
        question: "What is the largest desert in the world?",
        choices: ["Gobi Desert", "Sahara Desert", "Atacama Desert"],
        correctAnswer: "Sahara Desert",
    },
    {
        question: "What is the chemical symbol for iron?",
        choices: ["I", "Ir", "Fe"],
        correctAnswer: "Fe",
    }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(questions);

const quizContainer = document.querySelector('.quiz-container');
const resultsContainer = document.getElementById('results');

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    if (currentQuestion < questions.length) {
        const questionData = questions[currentQuestion];
        const choices = questionData.choices.map((choice, index) => {
            return `<li><input type="radio" name="q${currentQuestion + 1}" value="${choice}">${String.fromCharCode(65 + index)}. ${choice}</li>`;
        });
        quizContainer.innerHTML = `
            <h1>Quiz Title</h1>
            <div class="question">
                <p>${questionData.question}</p>
                <ul class="choices">${choices.join('')}</ul>
            </div>
            <button id="submit">Next</button>
            <div id="results">${currentQuestion + 1}/${questions.length} Questions</div>
        `;
        const nextButton = document.getElementById('submit');
        nextButton.addEventListener('click', () => {
            checkAnswer();
        });
    } else {
        quizContainer.innerHTML = `<h1>Quiz Completed!</h1><div id="results">Your Score: ${score}/${questions.length}</div>`;
        submitButton.style.display = 'none';
    }
}

function checkAnswer() {
    const selectedAnswer = document.querySelector(`input[name="q${currentQuestion + 1}"]:checked`);
    if (selectedAnswer) {
        if (selectedAnswer.value === questions[currentQuestion].correctAnswer) {
            score++;
            displayFeedback(true);
        } else {
            displayFeedback(false);
        }
        currentQuestion++;
        setTimeout(() => {
            displayQuestion();
        }, 1000); //Delay the next question by 1 second
    }
}

function displayFeedback(isCorrect) {
    const feedback = document.createElement('div');
    feedback.className = isCorrect ? 'correct' : 'incorrect';
    feedback.textContent = isCorrect ? 'Correct!' : 'Incorrect';
    quizContainer.appendChild(feedback);
}

displayQuestion();