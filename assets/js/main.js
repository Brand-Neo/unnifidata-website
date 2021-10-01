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

/* ======== COUNTRIES MODAL ======== */
const countryBtn = document.getElementById('countries-btn'),
      countryModal = document.getElementById('countries-modal'),
      countryClose = document.getElementById('countires-close'),
      openCountry = document.getElementById('open-country')

let show = false
if(countryBtn){
    countryBtn.addEventListener('click', () => {
        countryModal.classList.toggle('show-modal')
        if(show===false){
            countryBtn.innerText = 'HIDE ALL COUNTRIES'
            show = true
        } else{
            countryBtn.innerText = 'VIEW ALL COUNTRIES'
            show = false
        }
    })
}

if(countryClose){
    countryClose.addEventListener('click', () => {
        countryModal.classList.remove('show-modal')
        if(show===false){
            countryBtn.innerText = 'HIDE ALL COUNTRIES'
            show = true
        } else{
            countryBtn.innerText = 'VIEW ALL COUNTRIES'
            show = false
        }
    })
}

if(openCountry){
    openCountry.addEventListener('click', () => {
        countryModal.classList.toggle('show-modal')
        if(show===false){
            countryBtn.innerText = 'HIDE ALL COUNTRIES'
            show = true
        } else{
            countryBtn.innerText = 'VIEW ALL COUNTRIES'
            show = false
        }
    })
}

/* ======== FAQ ACCORDIAN ======== */
const faqContent = document.getElementsByClassName('faq-content'),
      faqHeader = document.querySelectorAll('.faq-header')

function toggleSkills(){
    // Get the clicked faqHeader's parentnode's class
    let itemClass = this.parentNode.className

    for(i=0; i<faqContent.length; i++){
        faqContent[i].className = 'faq-content faq-close'
    }

    // If currently closed and is clicked, then open it by toggling the class 
    if(itemClass === 'faq-content faq-close'){
        this.parentNode.className = 'faq-content faq-open'
    }
}

faqHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

// Whatsapp link buttons
const linkSpan = document.querySelectorAll('.wa-link-btn'),
      whatsappBtn = document.getElementById('gcaMainButton'),
      whatsappChat = document.getElementById('gcaMainCard'),
      contactBtn = document.getElementById('contact-us-btn')

linkSpan.forEach((link) => {
    link.addEventListener('click', () => {
        whatsappChat.classList.toggle('gcaDisplay')
    })
})

contactBtn.addEventListener('click', () => {
    whatsappChat.classList.toggle('gcaDisplay')
})