/* ======== pop-up related ======== */
// check in cookies that user has not closed popup, else open the "Buy Now" popUp, then set cookie accordingly
function checkCookie() {
    // $('#buyNowPopUp').modal(); // for local testing only
    let popUpClosed = getCookie("popUpClosed");
    if (popUpClosed != "true") {
        $('#buyNowPopUp').modal();
        setCookie("popUpClosed", true, 10); // cookie expires in 10 days
    }
}


/* ======== NAVBAR ======== */
const headerToggle = document.getElementById('header-toggle'),
    navClose = document.getElementById('nav-close'),
    navMenu = document.getElementById('nav-menu')

if (headerToggle) {
    headerToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-nav')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-nav')
    })
}

/* ======== NAVBAR SUBMENU ======== */
const productList = document.getElementById('product-list'),
    productSubmenu = document.getElementById('product-submenu'),
    navChevron = document.getElementById('nav-chevron')

if (productList) {
    productList.addEventListener('click', () => {
        productSubmenu.classList.toggle('active')
        navChevron.classList.toggle('fa-chevron-up')
    })
}

if (productSubmenu) {
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
if (countryBtn) {
    countryBtn.addEventListener('click', () => {
        countryModal.classList.toggle('show-modal')
        if (show === false) {
            countryBtn.innerText = 'HIDE ALL COUNTRIES'
            show = true
        } else {
            countryBtn.innerText = 'VIEW ALL COUNTRIES'
            show = false
        }
    })
}

if (countryClose) {
    countryClose.addEventListener('click', () => {
        countryModal.classList.remove('show-modal')
        if (show === false) {
            countryBtn.innerText = 'HIDE ALL COUNTRIES'
            show = true
        } else {
            countryBtn.innerText = 'VIEW ALL COUNTRIES'
            show = false
        }
    })
}

if (openCountry) {
    openCountry.addEventListener('click', () => {
        countryModal.classList.toggle('show-modal')
        if (show === false) {
            countryBtn.innerText = 'HIDE ALL COUNTRIES'
            show = true
        } else {
            countryBtn.innerText = 'VIEW ALL COUNTRIES'
            show = false
        }
    })
}

/* ======== FAQ ACCORDIAN ======== */
const faqContent = document.getElementsByClassName('faq-content'),
    faqHeader = document.querySelectorAll('.faq-header')

function toggleSkills() {
    // Get the clicked faqHeader's parentnode's class
    let itemClass = this.parentNode.className

    for (i = 0; i < faqContent.length; i++) {
        faqContent[i].className = 'faq-content faq-close'
    }

    // If currently closed and is clicked, then open it by toggling the class 
    if (itemClass === 'faq-content faq-close') {
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

// Helper functions

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}