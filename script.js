"use strict";

const btnUp = document.createElement('button');
btnUp.classList.add('btn-up');
btnUp.classList.add('btn-up__hide');
const btnUpStyle = document.createElement('style');
btnUpStyle.innerHTML = `
.btn-up {
    position: fixed;
    left: 100px;
    bottom: 40px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 1px 1px 5px rgba(0,0,0,.1);
    opacity: 100%;
    transition: all 0.5s;
    border: none;
    
}

.btn-up:hover {
    transform: scale(1.2);
}

.btn-up::before {
    content: "";
    width: 40px;
    height: 40px;
    background-image: url(https://armango.com/app/images/icons/pagination_arrow.png);
    background-repeat: no-repeat;
    background-size: 50% 30%;
    background-position: center;
    transform: rotate(90deg);
}

.btn-up__hide {
    opacity: 0;
    transition: 0.5s;
}

@media (max-width:900px) {
    .btn-up {
        left: 20px;
        bottom: 20px;
    }
}
`;

document.head.appendChild(btnUpStyle);
document.body.appendChild(btnUp);


window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY > (document.documentElement.clientHeight)) {
        btnUp.classList.remove('btn-up__hide');
    } else {
        btnUp.classList.add('btn-up__hide');
    }
})

btnUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})


