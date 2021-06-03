
const questionContainer = document.getElementById("question-section")
const answersContainer = document.getElementById("answers-section")
const nextButton = document.getElementById("next-button")

const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let startButton = document.getElementById("start-button")
startButton.addEventListener("click",startQuiz)

function startQuiz(){
    startButton.classList.add("hide")
    questionContainer.classList.remove("hide")
    answersContainer.classList.remove("hide")
    nextButton.classList.remove("hide")
}

function select(evt, exclusive) {
    if (exclusive == true) {
        for (let ele of document.querySelectorAll(".selected")) {
            ele.classList.remove("selected");
            ele.classList.add("unselected")
        }
        evt.currentTarget.classList.add("selected");
        evt.currentTarget.classList.remove("unselected")
    } else {
        if (evt.currentTarget.classList.contains("unselected")){
            evt.currentTarget.classList.add("selected");
            evt.currentTarget.classList.remove("unselected");
        }else{
            evt.currentTarget.classList.add("unselected");
            evt.currentTarget.classList.remove("selected");
        }
    }
}

function check() {
    let trueAnswers = 0;
    let points = 0;
    for (let ele of document.querySelectorAll(".answer")) {
        if (ele.classList.contains("true")) {
            trueAnswers++;
        }
    }

    for (let ele of document.querySelectorAll(".answer")) {
        if (ele.classList.contains("true") && ele.classList.contains("selected")) {
            points += 10 / trueAnswers;
        } else if (ele.classList.contains("selected") && (points > 0)) {
            if (points >= 10 / trueAnswers) {
                points -= 10 / trueAnswers;
            } else {
                points = 0;
            }
        }
    }
    alert("Du hast " + points + " Punkte");

}

/*WORK IN PROGRESS
const questions = [
    {
        question: 'Welcher Rhythmus zwischen Thoraxkompressionen und Beatmung sollte bei'
         + 'der Reanimation angewandt werden?',
        answers: [
            { text: '30:2', correct:true },
            { text: '100:20', correct:false }
        ]


    }

]

function setNextQuestion(){
    
}

function showQuestion(question){
    
}
*/