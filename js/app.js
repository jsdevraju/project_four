const navbar =  document.querySelector('.nav_item ul');
const handMenu =  document.querySelector('.bars');
const closeMenu =  document.querySelector('#close');

handMenu.addEventListener('click', () =>{
    navbar.classList.add('show')
})

closeMenu.addEventListener('click', () =>{
    navbar.classList.remove('show')
})


//imagebox
const portf_item = document.querySelectorAll('.port_fo');
const popup_model =  document.querySelector('.popup_model');
const images = document.querySelector('.images');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close');


portf_item.forEach((item, index) =>{
    item.addEventListener('click', () =>{
        popup_model.classList.add('show');
        overlay.classList.add('active');
        images.src = item.src;

        close.addEventListener('click', () =>{
            popup_model.classList.remove('show');
            overlay.classList.remove('active');
        })
    })
})
