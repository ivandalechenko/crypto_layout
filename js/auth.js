document.getElementById("signup_switcher").onclick = switch_to_sign_up
function switch_to_sign_up() {
    document.getElementById("login_switcher").classList.remove('active')
    document.getElementById("signup_switcher").classList.add('active')

    show_inp(document.getElementById("username"))
    show_inp(document.getElementById("rpassword"))
    show(document.getElementById("create_password_label"), 17, 10)
    show(document.getElementById("accept_terms"), 24, 20)
    hide(document.getElementById("forgot_password"))

}

document.getElementById("login_switcher").onclick = switch_to_log_in
function switch_to_log_in() {
    document.getElementById("login_switcher").classList.add('active')
    document.getElementById("signup_switcher").classList.remove('active')

    hide_inp(document.getElementById("username"))
    hide_inp(document.getElementById("rpassword"))
    hide(document.getElementById("create_password_label"))
    show(document.getElementById("forgot_password"), 24, 20)
    hide(document.getElementById("accept_terms"))

}

function hide(el) {
    el.style.height = "0px";
    el.style.marginTop = "0px";
}
function show(el, h, mt) {
    el.style.height = h + 'px';
    el.style.marginTop = mt + 'px';
}
function hide_inp(el) {
    el.style.padding = `0px 20px`;
    el.style.height = "0px";
    setTimeout(() => { el.style.border = "1px solid rgba(27,28,29,0)"; }, 100)
}

function show_inp(el) {
    el.style.height = `65px`
    el.style.padding = `13px 20px`;
    setTimeout(() => { el.style.border = "1px solid rgba(27,28,29,1)"; }, 100)

}

document.getElementById("accept_t_and_p").onclick = () => {
    document.getElementById('accept_t_and_p_check_img').classList.toggle('onone')
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
