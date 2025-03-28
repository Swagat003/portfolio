let them = document.querySelector('#them-icon');

var metaColor = document.createElement('meta');
metaColor.name = 'theme-color';
metaColor.content = '#945922';
document.head.appendChild(metaColor);

them.addEventListener('click', (evt) => {
    let them_icon = document.querySelector('#them-icon');
    let body = document.querySelector('body');
    let content = document.querySelector('#content');
    let skills = document.getElementsByClassName('code-lang');
    body.classList.toggle('dark-body');
    content.classList.toggle('dark-content');
    them_icon.classList.toggle('dark-them-icon');

    for (skill of skills) {
        skill.classList.toggle('dark-code-lang');
    }

})

let loader = document.getElementById('loader');
window.addEventListener('load',(e)=>{
    loader.style.display='none'
})