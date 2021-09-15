/* ======== NAVBAR ======== */
const headerToggle = document.getElementById('header-toggle'),
      navClose = document.getElementById('nav-close'),
      navMenu = document.getElementById('nav-menu')

if(headerToggle){
    headerToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-nav')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-nav')
    })
}

/* ======== NAVBAR SUBMENU ======== */
const productList = document.getElementById('product-list'),
      productSubmenu = document.getElementById('product-submenu'),
      navChevron = document.getElementById('nav-chevron')

if(productList){
    productList.addEventListener('click', () => {
        productSubmenu.classList.toggle('active')
        navChevron.classList.toggle('fa-chevron-up')
    })
}

if(productSubmenu){
    productSubmenu.addEventListener('mouseover', () => {
        productSubmenu.classList.add('active')
    })
}

/* ======== FAQ ACCORDIAN ======== */
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    // Get the clicked skillsHeader's parentnode's class
    let itemClass = this.parentNode.className

    for(i=0; i<skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }

    // If currently closed and is clicked, then open it by toggling the class 
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})