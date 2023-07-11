function show_menu() {
    document.getElementById('burger_opener').classList.add('dnone')
    document.getElementById('burger_closer').classList.remove('dnone')
    document.getElementById('sidebar').style.height = `${document.getElementById('sidebar').scrollHeight}px`
}
function hide_menu() {
    document.getElementById('sidebar').style.height = ``
    document.getElementById('burger_closer').classList.add('dnone')
    document.getElementById('burger_opener').classList.remove('dnone')
}

function show_modal() {
    document.getElementById("modal").classList.remove('dnone')
    setTimeout(() => { document.getElementById("modal").classList.remove('onone') }, 50)
}
function hide_modal() {
    document.getElementById("modal").classList.add('onone')
    setTimeout(() => { document.getElementById("modal").classList.add('dnone') }, 500)
}

function show(el) {
    el.classList.remove('dnone')
    // el.classList.remove('onone')
    setTimeout(remove_onone, 50, el)
}

function hide_all(target_page) {
    pages = document.querySelectorAll('.page')
    console.log(pages)
    for (var i = 0; i < pages.length; i++) {
        if (pages[i].id != target_page.id) {
            if (!pages[i].classList.contains('onone')) {
                pages[i].classList.add('onone')
                setTimeout(add_dnone, 500, pages[i])
            }
        }
    }
}
function add_dnone(el) {
    el.classList.add('dnone')
}
function remove_onone(el) {
    el.classList.remove('onone')
}

function set_active_menu_element(el) {
    menu_elements = document.querySelectorAll('.navigation_element')
    for (var i = 0; i < menu_elements.length; i++) {
        if (menu_elements[i].id != el.id) {
            menu_elements[i].classList.remove('active')
        }
    }
    el.classList.add('active')
}


document.getElementById('burger_opener').onclick = show_menu
document.getElementById('burger_closer').onclick = hide_menu
document.getElementById('modal_closer').onclick = hide_modal
document.getElementById('add_api_keys_button').onclick = show_modal

document.getElementById("manage_tarif_opener").onclick = () => {
    set_active_menu_element(document.getElementById("manage_tarif_opener"))
    hide_all(document.getElementById("manage_tarif_page"))
    show(document.getElementById("manage_tarif_page"))
}
document.getElementById("profile_opener").onclick = () => {
    set_active_menu_element(document.getElementById("profile_opener"))
    hide_all(document.getElementById("profile_page"))
    show(document.getElementById("profile_page"))
}
document.getElementById("ref_opener").onclick = () => {
    set_active_menu_element(document.getElementById("ref_opener"))
    hide_all(document.getElementById("ref_page"))
    show(document.getElementById("ref_page"))
}
