// Number of questions. Max=25.
const NUMQUESTIONS = 5;


// List of questions.
let questionsMap = new Map();

// The sequence of the quiz.
let quizSequence = [];

// Store the quiz stats.
let quizStats = {
    counter: 0,
    correct: 0,
    wrong: 0,
    currentQuestion: 0,
};

// questions.
function quizQuestions() {
    questionsMap.set(1, {
        question: "Who is Seyi Onifade?",
        a: "Footballer.",
        b: "CEO of Hng.",
        c: "Artist.",
        d: "Cartel leader .",
        answer: "b",
    });
    questionsMap.set(2, {
        question: "What year did Mark Essien step down as CEO of HNG?",
        a: "Aug 11 2010.",
        b: "Aug 11 2011.",
        c: "Aug 11 2017.",
        d: "Aug 11 2019.",
        answer: "d",
    });
    questionsMap.set(3, {
        question: "What State is Hng situated?",
        a: "Abuja.",
        b: "Lagos.",
        c: "Imo.",
        d: "Oyo.",
        answer: "b",
    });
    questionsMap.set(4, {
        question: "Hng began in what year?",
        a: "2016.",
        b: "2012.",
        c: "2015.",
        d: "2014.",
        answer: "a",
    });
    questionsMap.set(5, {
        question: "What is the full meaning of Hng?",
        a: "Higher Nigerian Gamers.",
        b: "Hotels.ng.",
        c: "Helping Nigerians.",
        d: "Hungry Nigerians.",
        answer: "b",
    });
    questionsMap.set(6, {
        question: "When did this year Start.ng program commence ?",
        a: "Feb 9 2020.",
        b: "Mar 9 2020.",
        c: "Apr 9 2020.",
        d: "May 9 2020.",
        answer: "b",
    });
    questionsMap.set(7, {
        question: "What painter is famous for cutting off part of his ear?",
        a: "Rembrandt Van Rijn.",
        b: "Piet Mondriaan.",
        c: "Vincent Van Gogh.",
        d: "Johannes Vermeer.",
        answer: "c",
    });
    questionsMap.set(8, {
        question: "The Communist Manifesto was written by which two German philosophers?",
        a: "Martin Heidegger and Friedrich Nietzsche.",
        b: "Adolf Hitler and Herman Goring.",
        c: "Ludwig Feuerbach and Albert Schweitzer.",
        d: "Karl Marx and Friedrich Engels.",
        answer: "d",
    });
    questionsMap.set(9, {
        question: "Who directed the 1977 movie Star Wars?",
        a: "George Lucas.",
        b: "Luke Skywalker.",
        c: "Stephen Spielberg.",
        d: "Martin Scorsese.",
        answer: "a",
    });
    questionsMap.set(10, {
        question: "What was the name of the passenger train service created in 1883 that connected Paris and Constantinople?",
        a: "The Constantinople Express.",
        b: "The Orient Express.",
        c: "The Trans-Siberian Express.",
        d: "The Trans-Europe Express.",
        answer: "b",
    });
    questionsMap.set(11, {
        question: "How many stripes are on the flag of the United States?",
        a: "50 Stripes.",
        b: "17 Stripes.",
        c: "13 Stripes.",
        d: "20 Stripes.",
        answer: "c",
    });
    questionsMap.set(12, {
        question: "Lemurs, a type of primate, are native to what island nation?",
        a: "Indonesia.",
        b: "Sri Lanka.",
        c: "Phillipines..",
        d: "Madagascar.",
        answer: "d",
    });
    questionsMap.set(13, {
        question: "The largest volcano ever discovered in our solar system is located on which planet?",
        a: "Jupiter.",
        b: "Earth.",
        c: "Venus.",
        d: "Mars.",
        answer: "d",
    });
    questionsMap.set(14, {
        question: "What is name of the worldÃ¢â‚¬â„¢s largest and most powerful particle accelerator?",
        a: "Large Hadron Collider.",
        b: "Relativistic Heavy Ion Collider.",
        c: "Antiproton Decelerator.",
        d: "Super Proton Synchrotron.",
        answer: "a",
    });
    questionsMap.set(15, {
        question: "Joseph Smith was the founder of what religion?",
        a: "Scientology.",
        b: "Jehova's Witnesses.",
        c: "Latter Day Saints.",
        d: "Josephism.",
        answer: "c",
    });
    questionsMap.set(16, {
        question: "What character is murdered by George in the John Steinbeck novella 'Of Mice and Men'?",
        a: "His brother: Lennie.",
        b: "His mother: Annie.",
        c: "His friend: Bennie.",
        d: "His wife: Jennie.",
        answer: "a",
    });
    questionsMap.set(17, {
        question: "Which 1979 film included a spaceship called Nostromo?",
        a: "Star Trek.",
        b: "Alien.",
        c: "Star Wars.",
        d: "The Black Hole.",
        answer: "b",
    });
    questionsMap.set(18, {
        question: "One kilobyte is equal to how many bytes?",
        a: "1000 bytes.",
        b: "1048 bytes.",
        c: "1001 bytes.",
        d: "1024 bytes.",
        answer: "d",
    });
    questionsMap.set(19, {
        question: "Who is credited to be the first person to circumnavigate the globe?",
        a: "Christopher Columbus.",
        b: "Abel Tasman.",
        c: "Ferdinand Magellan.",
        d: "Vasco da Gama.",
        answer: "c",
    });
    questionsMap.set(20, {
        question: "How many fingers do the Simpsons cartoon characters have?",
        a: "Five.",
        b: "Three.",
        c: "Four.",
        d: "Seven.",
        answer: "c",
    });
}

// Get the containers.
let questionContainer = document.getElementById("question"),
    answerA = document.getElementById("first-answer"),
    answerB = document.getElementById("second-answer"),
    answerC = document.getElementById("third-answer"),
    answerD = document.getElementById("fourth-answer"),
    scoreCounter = document.getElementById("counter");

// Add question keys to the quiz sequence array.
function determineSequence() {
    // Populate quizSequence.
    for (let [key, value] of questionsMap) {
        quizSequence.push(key);
    }

    // Shuffle an array.
    function shuffle(array) {
        let currentIndex = array.length,
            temporaryValue,
            randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;

    }

    // Randomize quizSequence.
    quizSequence = shuffle(quizSequence);
}

// Get the next question.
function getNextQuestion() {


    // Up the counter.
    quizStats.counter++;

    // Get the question number.
    let qn = quizSequence.shift();

    // Set up the question and answers.
    let a = questionsMap.get(qn).a,
        b = questionsMap.get(qn).b,
        c = questionsMap.get(qn).c,
        d = questionsMap.get(qn).d,
        question = questionsMap.get(qn).question;

    // Print the questions.
    questionContainer.textContent = question;
    answerA.textContent = a;
    answerB.textContent = b;
    answerC.textContent = c;
    answerD.textContent = d;

    // Track the current question.
    quizStats.currentQuestion = qn;
}



// Add event listeners.
function addEventListeners() {
    answerA.addEventListener("click", checkTheAnswer);
    answerB.addEventListener("click", checkTheAnswer);
    answerC.addEventListener("click", checkTheAnswer);
    answerD.addEventListener("click", checkTheAnswer);

}

// Add data attributes.
function addDataAttributes() {
    answerA.setAttribute("data-answer", ("a"));
    answerB.setAttribute("data-answer", ("b"));
    answerC.setAttribute("data-answer", ("c"));
    answerD.setAttribute("data-answer", ("d"));
}

// Check the answer.
function checkTheAnswer() {
    // Get the answers.
    let givenAnswer = this.dataset.answer,
        correctAnswer = questionsMap.get(quizStats.currentQuestion).answer;

    // Check given and correct answers.
    if (givenAnswer == correctAnswer) {
        quizStats.correct++;
        this.classList.add("correct");
    } else {
        quizStats.wrong++;
        this.classList.add("wrong");
    }

    // Update the counter.
    scoreCounter.textContent = quizStats.correct;
    if (givenAnswer == 1) {
        quizStats.correct++;
    }





    // Check if max num of questions has been reached.


    document.getElementById("next").onclick = function() {
        if (quizStats.counter < NUMQUESTIONS) {
            setTimeout(clearClasses, 20);
            setTimeout(getNextQuestion, 200);
        }
        // If so, stop the quiz.
        else {
            showTheResults();
        }
    }
    document.getElementById("previous").onclick = function() {
        if (quizStats.counter < NUMQUESTIONS) {
            setTimeout(clearClasses, 20);
            setTimeout(question, 200);
        }
        // If so, stop the quiz.
        else {
            showTheResults();
        }


    }
}

// Clear classes.
function clearClasses() {
    answerA.classList.remove("correct", "wrong");
    answerB.classList.remove("correct", "wrong");
    answerC.classList.remove("correct", "wrong");
    answerD.classList.remove("correct", "wrong");
}

// The results.
function showTheResults() {
    // Get the containers.
    let numCorrect = document.getElementById("num-correct"),
        numWrong = document.getElementById("num-wrong"),
        numTotal = document.getElementById("num-total");

    // Get the results.
    let correct = quizStats.correct,
        wrong = quizStats.wrong,
        total = NUMQUESTIONS;

    // Print the results.
    numCorrect.textContent = correct;
    numWrong.textContent = wrong;
    numTotal.textContent = total;

    // Display the results.
    document.getElementsByClassName("results-container")[0].classList.add("display");
}


//Let's start!
(function startQuiz() {
    // Init.
    quizQuestions();
    determineSequence();
    getNextQuestion();
    addEventListeners();
    addDataAttributes();

})();
