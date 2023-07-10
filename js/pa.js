document.getElementById('burger_opener').onclick = show_menu
function show_menu() {
    document.getElementById('burger_opener').classList.add('dnone')
    document.getElementById('burger_closer').classList.remove('dnone')
    document.getElementById('sidebar').style.height = `${document.getElementById('sidebar').scrollHeight}px`
}
document.getElementById('burger_closer').onclick = hide_menu
function hide_menu() {
    document.getElementById('sidebar').style.height = ``
    document.getElementById('burger_closer').classList.add('dnone')
    document.getElementById('burger_opener').classList.remove('dnone')
}