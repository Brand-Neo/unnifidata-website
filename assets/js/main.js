/* ======== 1.0 HEADER ======== */
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


const productList = document.getElementById('product-list')
const productSubmenu = document.getElementById('product-submenu')
const navChevron = document.getElementById('nav-chevron')

productList.addEventListener('click', () => {
    productSubmenu.classList.toggle('active')
    navChevron.classList.toggle('fa-chevron-up')
})

productSubmenu.addEventListener('mouseover', () => {
    productSubmenu.classList.add('active')
})