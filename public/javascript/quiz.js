let questionCounter = 1;
let points = 0;
const maxQuestion = 11;

function select(evt, exclusive) {
    if (exclusive == true) {
        for (let ele of document.querySelectorAll(".selected")) {
            ele.classList.remove("selected");
            ele.classList.add("unselected")
        }
        evt.currentTarget.classList.add("selected");
        evt.currentTarget.classList.remove("unselected")
    } else {
        if (evt.currentTarget.classList.contains("unselected")) {
            evt.currentTarget.classList.add("selected");
            evt.currentTarget.classList.remove("unselected");
        } else {
            evt.currentTarget.classList.add("unselected");
            evt.currentTarget.classList.remove("selected");
        }
    }
}

function check() {
    let trueAnswers = countTrueAnswers();
    let questionPoints = 0;
    let answers = document.querySelectorAll("#question" + questionCounter + " .answer");
    
    for (let ele of answers) {
        if (ele.classList.contains("true") && ele.classList.contains("selected")) {
            questionPoints += 10 / trueAnswers;
        } else if (ele.classList.contains("selected") && (points > 0)) {
            if (questionPoints >= 10 / trueAnswers) {
                questionPoints -= 10 / trueAnswers;
            } else {
                questionPoints = 0;
            }
        }
    }
    points += questionPoints;
}

function countTrueAnswers(){
    let trueAnswers = 0;
    for (let ele of answers) {
        if (ele.classList.contains("true")) {
            trueAnswers++;
        }
    }
    return trueAnswers;
}

function advance() {
    check();
    if (questionCounter < maxQuestion) {
        document.querySelector("#question" + questionCounter).classList.remove("active");
        questionCounter++;
        document.querySelector("#question" + questionCounter).classList.add("active");
    } else {
        loadResult();
    }
}

function loadResult() {
    document.querySelector("#quiz-block").style.display = "none";
    document.querySelector("#result-block").style.display = "block";
    document.querySelector("#points-display").innerHTML = points.toPrecision(3) + " Punkte";

    if (points <= 30){
        document.querySelector("#bad").style.display = "block";
    }else if( points <= 60){
        document.querySelector("#normal").style.display = "block";
    }else if (points <= 90){
        document.querySelector("#good").style.display = "block";
    }else{
        document.querySelector("#excelent").style.display = "block";
    }
}