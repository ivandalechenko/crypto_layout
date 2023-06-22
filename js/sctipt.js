var elements = document.querySelectorAll(".question");
for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function () {
        this.querySelector(".question_arrow").classList.toggle('show')
        var elBlock = this.querySelector(".text .hidden")
        if (elBlock.style.height === "0px") {
            elBlock.style.height = `${elBlock.scrollHeight}px`
            elBlock.style.marginTop = `8px`
        } else {
            elBlock.style.height = `${elBlock.scrollHeight}px`;
            window.getComputedStyle(elBlock, null).getPropertyValue("height");
            elBlock.style.height = "0";
            setTimeout(() => { elBlock.style.marginTop = `0`; }, 500);
        }
    };
}
