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