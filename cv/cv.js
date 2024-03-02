function experience(){
    window.location.href = "experience.html";
}

function education(){
    window.location.href = "education.html";
}

function skills(){
    window.location.href = "skills.html";
}

function contact(){
    window.location.href = "contact.html";
}

function projects(){
    window.location.href = "projects.html";
}

function home(){
    window.location.href = "index.html";
}
function instagram(){
    window.location.assign('https://www.instagram.com/kaczmarczyk_davvid/');

}
function facebook(){
    window.location.assign('https://www.facebook.com/KaczmarToZiomal/');

}

function GitHub(){
    window.location.assign('https://github.com/DawidKaczmarczyk');

}

function skopiuj(tekst) {
    var input = document.createElement('input');
    input.value = tekst;
    document.body.appendChild(input);

    input.select();
    input.setSelectionRange(0, 99999);

    document.execCommand('copy');

    document.body.removeChild(input);

    alert('Skopiowano do schowka: ' + tekst);
}




