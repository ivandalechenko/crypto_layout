var elements = document.querySelectorAll(".question");
for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function () {
        this.querySelector(".question_arrow").classList.toggle('show')
        this.querySelector(".text .hidden").classList.toggle('dnone')
    };
}