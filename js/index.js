const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Nav


const links = document.querySelectorAll('a');
links[0].textContent = siteContent['nav']['nav-item-1'];
links[1].textContent = siteContent['nav']['nav-item-2'];
links[2].textContent = siteContent['nav']['nav-item-3'];
links[3].textContent = siteContent['nav']['nav-item-4'];
links[4].textContent = siteContent['nav']['nav-item-5'];
links[5].textContent = siteContent['nav']['nav-item-6'];

links.forEach(a => a.style.color = 'lightgreen')

const nav = document.querySelector('nav')

const preLink = document.createElement('a')
preLink.textContent = 'Pre';
preLink.href = '#';
preLink.style.color = 'green';

const postLink = document.createElement('a')
postLink.textContent = 'Post';
postLink.href = '#';
postLink.style.color = 'green';

nav.prepend(preLink)
nav.append(postLink)


//cta


const mainHeader = document.querySelector('h1')
mainHeader.textContent = siteContent['cta']['h1']

const btnStart = document.querySelector('button')
btnStart.textContent = siteContent['cta']['button']

const ctaImg = document.querySelector('#cta-img')
ctaImg.setAttribute('src', siteContent['cta']['img-src'])


// Main-Content



const bodyHeader = document.querySelectorAll('h4');
bodyHeader[0].textContent = siteContent['main-content']['features-h4'];
bodyHeader[1].textContent = siteContent['main-content']['about-h4'];
bodyHeader[2].textContent = siteContent['main-content']['services-h4'];
bodyHeader[3].textContent = siteContent['main-content']['product-h4'];
bodyHeader[4].textContent = siteContent['main-content']['vision-h4'];


const mainText = document.querySelectorAll('p');
mainText[0].textContent = siteContent['main-content']['features-content'];
mainText[1].textContent = siteContent['main-content']['about-content'];
mainText[2].textContent = siteContent['main-content']['services-content'];
mainText[3].textContent = siteContent['main-content']['product-content'];
mainText[4].textContent = siteContent['main-content']['vision-content'];


const accImg = document.querySelector('#middle-img')
accImg.setAttribute('src', siteContent['main-content']['middle-img-src'])


// Contact
bodyHeader[5].textContent = siteContent['contact']['contact-h4'];
mainText[5].textContent = siteContent['contact']['phone'];
mainText[6].textContent = siteContent['contact']['email'];
mainText[7].textContent = siteContent['contact']['address'];


//&copy
const cpyR = document.querySelector('footer')
cpyR.textContent = siteContent['footer']['copyright']