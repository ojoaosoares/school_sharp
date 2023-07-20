let btn_toggle = window.document.querySelector(".btn-toggle")
let dropdown = window.document.querySelector('header #dropdown-nav')


btn_toggle.addEventListener("click",openNavigation)


function openNavigation() {
    
    dropdown.classList.toggle("open-dropdown")
    dropdown.classList.toggle('nav-dropdown')
    window.document.body.classList.toggle('overflow')
}


function resizeNavigation () {
    if(Number(window.innerWidth) > 768) {
        console.log("Foi")
        dropdown.classList.remove("open-dropdown")
        dropdown.classList.add('nav-dropdown')
        window.document.body.classList.remove('overflow')
    }
}