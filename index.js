let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px"

function toggleMenu() {

    if(menuList.style.maxHeight == '0px'){
        menuList.style.maxHeight = "400px"
    }else{
        menuList.style.maxHeight = '0px'
    }
}


function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}