document.addEventListener("DOMContentLoaded", () => {
    // Открытие-закрытие меню с кнопки
    document.getElementById('burger_menu_button').onclick = () => {
        elBlock = document.getElementById('mobile_menu')
        if (elBlock.style.height === "0px") {
            document.getElementById('header').classList.add('show_mobile_menu')
            document.getElementById('usp').classList.add('filter_blur')
            document.getElementById('lb1').classList.add('filter_blur')
            document.getElementById('body').classList.add('no_scroll')
            elBlock.style.height = `${elBlock.scrollHeight}px`
            document.getElementById('mobile_menu_img_burger').classList.add('dnone')
            document.getElementById('mobile_menu_img_cross').classList.remove('dnone')
        } else {
            hide_menu()
        }
    }
    // Функция закрытие меню
    function hide_menu() {
        document.getElementById('body').classList.remove('no_scroll')
        document.getElementById('lb1').classList.remove('filter_blur')
        document.getElementById('usp').classList.remove('filter_blur')
        document.getElementById('mobile_menu').style.height = `${elBlock.scrollHeight}px`;
        window.getComputedStyle(document.getElementById('mobile_menu'), null).getPropertyValue("height");
        document.getElementById('mobile_menu').style.height = "0";
        setTimeout(() => { document.getElementById('header').classList.remove('show_mobile_menu') }, 400);
        document.getElementById('mobile_menu_img_burger').classList.remove('dnone')
        document.getElementById('mobile_menu_img_cross').classList.add('dnone')
    }
    // Закрытие меню при нажатии на кнопки
    var elements = document.querySelectorAll(".header_mobile_menu_element_a");
    for (var i = 0; i < elements.length; i++) {
        elements[i].onclick = function () {
            hide_menu()
        };
    }
    // Плавная прокрутка к якорям
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
    // Показ и скрытие ответов к вопросам
    var elements = document.querySelectorAll(".faq_questions_question");
    for (var i = 0; i < elements.length; i++) {
        elements[i].onclick = function () {
            this.querySelector(".faq_questions_question_question_arrow").classList.toggle('faq_questions_question_show')
            var elBlock = this.querySelector(".faq_questions_question_text_hidden")
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
});

