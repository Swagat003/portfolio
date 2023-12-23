let them = document.querySelector('#them-icon')

them.addEventListener('click', (evt) => {
    let them_icon = document.querySelector('#them-icon')
    let body = document.querySelector('body')
    let content = document.querySelector('#content')
    let skills = document.getElementsByClassName('code-lang')
    body.classList.toggle('dark-body')
    content.classList.toggle('dark-content')
    them_icon.classList.toggle('dark-them-icon')

    for (skill of skills) {
        skill.classList.toggle('dark-code-lang')
    }

})