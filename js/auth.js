document.getElementById("signup_switcher").onclick = switch_to_sign_up
function switch_to_sign_up() {
    document.getElementById("login_switcher").classList.remove('active')
    document.getElementById("signup_switcher").classList.add('active')
    console.log('sign_up')
}

document.getElementById("login_switcher").onclick = switch_to_log_in
function switch_to_log_in() {
    document.getElementById("login_switcher").classList.add('active')
    document.getElementById("signup_switcher").classList.remove('active')
    console.log('login')
}

var elements = document.querySelectorAll(".eye");
for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function () {
        if (this.classList.contains('closed')) {
            this.classList.remove('closed')
            this.querySelector('img').setAttribute('src', 'img/login/eye.svg')
            this.parentElement.querySelector('input').setAttribute('type', 'text');
        } else {
            this.classList.add('closed')
            this.querySelector('img').setAttribute('src', 'img/login/eye_closed.svg')
            this.parentElement.querySelector('input').setAttribute('type', 'password');
        }
    };
}

function switch_to_code() {
    console.log('code')
}

function switch_to_code() {
    console.log('code')
}
