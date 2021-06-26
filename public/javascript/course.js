function signup() {
    let first_name = document.querySelector("#first-name").value;
    let last_name = document.querySelector("#last-name").value;
    let mail = document.querySelector("#mail").value;
    let course = document.querySelector("#course-type").value;
    let course_date = document.querySelector("#date").value;
    document.querySelector("#signUp").style.display = "block";

    if (!testString(first_name)){
        document.querySelector("#signUp").innerHTML = "Vorname enthält ungültige Zeichen";
    }else if(!testString(last_name)){
        document.querySelector("#signUp").innerHTML = "Nachname enthält ungültige Zeichen";
    }else if (first_name && last_name && mail && course && course_date ){
        document.querySelector("#signUp").innerHTML = "<h2>Hallo " + first_name + "!</h2><br> Du hast dich erfolgreich für den <span>" + course + "</span> Kurs am <span>" + course_date + "</span> angemeldet.<br>Wir haben dir eine Bestätigungs-Mail an <span>" + mail + "</span> geschickt.<br> Wir freuen uns dich bal zu treffen!";
    }else{
        document.querySelector("#signUp").innerHTML = "<p>Bitte füllen Sie alle Felder aus um das Formular abzuschicken!</p>";
        
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
