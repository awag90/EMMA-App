function signup() {
    let first_name = document.querySelector("#first-name").value;
    let last_name = document.querySelector("#last-name").value;
    let mail = document.querySelector("#mail").value;
    let course = document.querySelector("#course-type").value;
    let course_date = document.querySelector("#date").value;
    if (!testString(first_name)){
        document.querySelector("#signUp").innerHTML = "Vorname enthält ungültige Zeichen";
    }else if(!testString(last_name)){
        document.querySelector("#signUp").innerHTML = "Nachname enthält ungültige Zeichen";
    }else if (first_name && last_name && mail && course && course_date ){
        document.querySelector("#signUp").innerHTML = "Hallo " + first_name + "! Du hast dich erfolgreich für den " + course + " Kurs am " + course_date + " angemeldet. Wir haben dir eine Bestätigungs-Mail an " + mail + " geschickt. Wir freuen uns dich bal zu treffen!";
    }else{
        document.querySelector("#signUp").innerHTML = "Bitte füllen Sie alle Felder aus um das Formular abzuschicken!";
    }
}

function testString(msg){
    let forbidden = ["0", "1", "2", "3", "4", "5", "6", "7","8", "9", "\"", "$", "%", ",", "!", "=", "+", "*"];
    for (let c of forbidden){
        if (msg.includes(c)){
            return false;
        }
    }
    return true;
}
