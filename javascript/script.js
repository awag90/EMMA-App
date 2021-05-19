

function signedUp(){
    let signUp = document.getElementById("signUp");
    let currentSetting = signUp.style.display;

    if(currentSetting == "block"){
        signUp.style.display = "none";
    } 
    else {
        signUp.style.display = "block";
    }
   
}