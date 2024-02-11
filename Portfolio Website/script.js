// header toggle click event 

let MenuBtn = document.getElementById('MenuBtn');
MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})


// typing effect 

let typed = new Typed('.auto-input', {
    strings: ['Fullstack Developer !', 'Digital Marketer !', 'Freelancer !', 'Business Consultant !', 'Stock Marketer !'],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
});


// active link state on scroll

// get all link 
let navlinks = document.querySelectorAll('nav ul li a');

// get all section 
let section = document.querySelectorAll('section');
console.log(section);

window.addEventListener('scroll',function(){
    const scrollpos = window.scrollY + 20
    section.forEach(section=>{
        if(scrollpos>section.offsetTop&&scrollpos<(section.offsetTop+section.offsetHeight)){
            navlinks.forEach(link=>{
                link.classList.remove('active');
                if(section.getAttribute('id')===link.getAttribute('href').substring(1)){
                    link.classList.add('active');
                }
            })
        }
    })
})
