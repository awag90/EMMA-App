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
    let trueAnswers = 0;
    let questionPoints = 0;
    let answers = document.querySelectorAll("#question" + questionCounter + " .answer");
    for (let ele of answers) {
        if (ele.classList.contains("true")) {
            trueAnswers++;
        }
    }

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
    alert("Du hast " + points + " Punkte");

}

function advance() {
    check();
    if (questionCounter < maxQuestion) {
        document.querySelector("#question" + questionCounter).classList.remove("active");
        questionCounter++;
        document.querySelector("#question" + questionCounter).classList.add("active");
    }
}