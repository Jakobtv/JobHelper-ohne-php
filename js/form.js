function validateName(){
    let x = document.forms["apforms"]["fname"].value;
    if (x == "") {
        alert("Name muss ausgefüllt sein!");
        return false;
    }
}

function validateMail(){
    let x = document.forms["apforms"]["fmail"].value;
    if (x == "") {
        alert("E-Mail muss ausgefüllt sein!");
        return false;
    }
}

function validateJob(){
    let x = document.forms["apforms"]["fjob"].value;
    if (x == "") {
        alert("Job-Titel muss ausgefüllt sein!");
        return false;
    }
}

function validateDesc(){
    let x = document.forms["apforms"]["fdesc"].value;
    if (x == "") {
        alert("Beschreibung muss ausgefüllt sein!");
        return false;
    }
}