
const questionContainer = document.getElementById("question-section")
const answersContainer = document.getElementById("answers-section")
const nextButton = document.getElementById("next-button")
const questionCounter = document.getElementById("question-counter")

const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let selectedQuestionIndex


let startButton = document.getElementById("start-button")
startButton.addEventListener("click",startQuiz)

function startQuiz(){
    startButton.classList.add("hide")
    selectedQuestionIndex = 0
    questionContainer.classList.remove("hide")
    answersContainer.classList.remove("hide")
    nextButton.classList.remove("hide")
    setNextQuestion()
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
    selectedQuestionIndex++;
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
    setNextQuestion();
}

const questions = [
    {
        question: 'Welcher Rhythmus zwischen Thoraxkompressionen und Beatmung sollte bei'
         + 'der Reanimation angewandt werden?', 
        answers: [
            { text: '30:2', correct:true },
            { text: '100:20', correct:false }
        ]
    },
    {
        question: 'Welche Körperhaltungen können einer Person mit Atemnot dabei helfen freier atmen zu können?', 
        answers: [
            { text: 'Kutschersitz', correct:true },
            { text: 'Aufrecht sitzen', correct:true },
            { text: 'Flach liegen', correct:false },
            { text: 'Stabile Seitenlage', correct:false }
        ]
    },
    {
        question: 'Was sollten Sie bei Gesichtsverbrennungen auf jeden Fall beachten? ', 
        answers: [
            { text: 'Nutzen Sie möglichst fließendes Wasser zur Kühlung', correct:true },
            { text: 'Zur bestmöglichen Kühlung nutzen Sie Eis oder Kühl-Pads', correct:false },
            { text: 'Versuchen Sie die Brandwunde fest zu verbinden', correct:false }
        ]
    },
    {
        question: 'Wieso muss man bei der stabilen Seitenlage stets darauf achten, dass die bewusstlose Person den Mund offen und Kopf überstreckt hat?', 
        answers: [
            { text: 'Ersticken zu vermeiden ', correct:true },
            { text: 'Atemwege öffnen', correct:true },
            { text: 'Atemwege öffnen', correct:true }
        ]
    },
    {
        question: 'Wenn der Verdacht besteht, dass Ihr Gegenüber einen allergischen Schock hat beginnen Sie sofort mit', 
        answers: [
            { text: 'Der Suche nach dem Notfall-Set', correct:false },
            { text: 'Kontrolle des Atems ', correct:true },
            { text: 'Bei Bewusstsein des Betroffenen sofort zum Arzt eilen', correct:false },
            { text: 'dem Entfernen von engen Kleidungsstücken', correct:true }

        ]
    },
    {
        question: 'Wenn Sie bei einer schweren Verletzung versuchen die Blutung zu stoppen, achten Sie besonders darauf, dass', 
        answers: [
            { text: 'keine Keime in die Wunde gelangen', correct:false },
            { text: 'genügend Druck auf die Wunde ausgeübt wird', correct:true },
            { text: 'der Betroffene aufrecht steht', correct:false },
            { text: 'Sie wenn möglich Druck auf nahe Arterie geben', correct:true }

        ]
    },
    {
        question: 'Mit welcher Maßnahme müssen Sie bei der Reanimation fortfahren bis der Rettungsdienst eintrifft?', 
        answers: [
            { text: 'Thoraxkompressionen und evt. Beatmung', correct:true },
            { text: 'AED suchen', correct:false },
            { text: 'Atmung beobachten', correct:false },
            { text: 'Patient aufrichten', correct:false }

        ]
    },
    {
        question: 'In welcher dieser Situationen sollten Sie auf jeden Fall einen Notruf absetzen?', 
        answers: [
            { text: 'Tiefer Schnitt am Unterarm aus dem hellrotes Blut spritzt', correct:true },
            { text: 'Fahrgast in der U-Bahn bricht bewusstlos zusammen und atmet nicht mehr', correct:true },
            { text: 'Ihre Nichte klagt nach einem Wespenstich über ein Engegefühl im Hals', correct:true },
            { text: 'Sie haben eine Erkältung und Ihnen fällt Sonntag-Abend ein, dass sie noch eine Krankmeldung brauchen', correct:false }

        ]
    },
    {
        question: 'Bei Nasenbluten legen Sie den Kopf in den Nacken und versuchen sich zu beruhigen', 
        answers: [
            { text: 'Wahr', correct:false },
            { text: 'Falsch', correct:true }
        ]
    },
    {
        question: 'Bei großflächigen Verbrennungen sollten Sie sofort handeln und', 
        answers: [
            { text: 'An der Haut haftende Kleidungsstücke vorsichtig entfernen', correct:false },
            { text: 'Atmung kontrollieren', correct:true },
            { text: 'Ausgiebig kühlen', correct:false },
            { text: 'Brandblase nicht öffnen', correct:true }
        ]
    },
    {
        question: 'Der Rhythmus von welchen Liedern kann dabei helfen den richtigen Rhythmus bei der Reanimation zu finden?', 
        answers: [
            { text: 'Hänschen klein', correct:false },
            { text: '"Stayin Alive" - Bee Gees', correct:true },
            { text: '"Highway to Hell" - ACDC', correct:false },
            { text: '"Sandstorm" - Darude', correct:true }
        ]
    }
]


function setNextQuestion(){
    displayQuestion(questions[selectedQuestionIndex])
    
}

function displayQuestion(question){
    questionElement.innerText = question.question
    questionCounter.innerText = selectedQuestionIndex +1 
    /*question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if(answer.correct){
            button.dataset.correct = answer.correct  //belegt den richtigen String mit correct Attribut
        }
        //button.addEventListener("click",selectAnswer)
        //answerButtonsElement.appendChild(button)
    });
    Not Working Yet */
    
}


function selectAnswer(e){

}