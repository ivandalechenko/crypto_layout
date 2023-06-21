var elements = document.querySelectorAll(".question_arrow");
for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function () {
        this.classList.toggle('show')
        this.parentNode.querySelector(".text .hidden").classList.toggle('dnone')
    };
}