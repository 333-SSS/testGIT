// 折叠按钮
const  navEl = document.querySelector('nav')
const navimgEl = document.querySelector('.nav_img');
navimgEl.addEventListener('click',() => {
    navEl.classList.toggle('open');
    }
)